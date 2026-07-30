// ============================================================
// Estado global
// ============================================================
let allQuestions = [];
let questions = [];
let current = 0;
let userState = {};
let config = {};
let timerInterval = null;
let timeLeft = 0;
let elapsedSeconds = 0;
let customRetakeIds = null; // ids para o modo "custom" (refazer)
// true enquanto ha uma prova em andamento (nao finalizada). Controla o
// auto-save, para nao reativar uma sessao ja finalizada (config.examId
// continua preenchido mesmo depois de finalizar, entao nao da pra usar
// so o config como sinal de "sessao ativa").
let sessionActive = false;

const SESSION_KEY = 'vce_session';
const HISTORY_KEY = 'vce_history';
const THEME_KEY = 'vce_theme';

// Escapa texto que vem de dados (nome do candidato, titulo da prova,
// enunciados de .txt importados) antes de inserir em innerHTML, para
// impedir injecao de HTML/script (XSS).
function escapeHtml(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
const SETUP_PREFS_KEY = 'vce_setup_prefs';
const el = (id) => document.getElementById(id);

// EXAMS: comeca com o que estiver em exams.js (fallback offline),
// mas tenta carregar os simulados dinamicos via simulados.php (servidor/site).
let EXAMS_DATA = (typeof EXAMS_DATA_STATIC !== 'undefined')
  ? EXAMS_DATA_STATIC
  : { exams: [] };

// Indica se o servidor PHP respondeu (independente de ter provas ou nao).
// Usado para habilitar recursos que dependem de servidor, como importar provas.
let serverAvailable = false;

async function loadExams() {
  try {
    const res = await fetch('simulados.php');
    if (res.ok) {
      serverAvailable = true;
      const data = await res.json();
      if (data && Array.isArray(data.exams) && data.exams.length) {
        EXAMS_DATA = data;
      }
    }
  } catch (e) {
    // sem servidor PHP: usa o exams.js estatico (fallback)
  }
}

// ============================================================
// TEMA (MODO ESCURO)
// ============================================================
function currentTheme() {
  const attr = document.documentElement.getAttribute('data-theme');
  if (attr === 'dark' || attr === 'light') return attr;
  // sem preferencia salva: segue o esquema de cores do sistema operacional
  return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_KEY, theme);
  const btn = el('themeToggle');
  if (btn) btn.textContent = theme === 'dark' ? 'Modo claro' : 'Modo escuro';
}

function initThemeToggle() {
  const btn = el('themeToggle');
  if (!btn) return;
  btn.textContent = currentTheme() === 'dark' ? 'Modo claro' : 'Modo escuro';
  btn.addEventListener('click', () => {
    applyTheme(currentTheme() === 'dark' ? 'light' : 'dark');
  });
}

// ============================================================
// TELA INICIAL
// ============================================================
function populateExamSelect() {
  const examSelect = el('examSelect');
  const previousValue = examSelect.value;
  examSelect.innerHTML = '';
  EXAMS_DATA.exams.forEach(ex => {
    const opt = document.createElement('option');
    opt.value = ex.id;
    opt.textContent = ex.title;
    examSelect.appendChild(opt);
  });
  if (previousValue && EXAMS_DATA.exams.some(ex => ex.id === previousValue)) {
    examSelect.value = previousValue;
  }
}

function initSetupScreen() {
  populateExamSelect();

  // fase 1: restaura a prova selecionada antes de montar topicos/faixas
  // (que dependem da prova escolhida)
  const prefs = readSetupPrefs();
  if (prefs && prefs.examSelect && EXAMS_DATA.exams.some(ex => ex.id === prefs.examSelect)) {
    el('examSelect').value = prefs.examSelect;
  }

  el('examSelect').addEventListener('change', refreshExamMeta);
  refreshExamMeta();

  // fase 2: restaura o resto (inclui topicSelect, modo, checkboxes, numeros)
  applySetupPrefs();
  bindSetupPrefsAutosave();

  el('btnStart').addEventListener('click', startExam);
  el('btnContinue').addEventListener('click', continueSession);
  el('btnHistory').addEventListener('click', () => openHistory());
  initImportUI();
}

function currentExamData() {
  const id = el('examSelect').value;
  return EXAMS_DATA.exams.find(e => e.id === id);
}

function refreshExamMeta() {
  const ex = currentExamData();
  if (!ex) {
    // nenhuma prova carregada (ex: exams.js ausente e sem servidor)
    el('allCount').textContent = 'todas (0)';
    el('btnStart').disabled = true;
    el('customInfo').textContent = '(nenhuma prova disponivel - importe um .txt ou verifique o exams.js)';
    return;
  }
  el('btnStart').disabled = false;
  const total = ex.questions.length;
  el('allCount').textContent = `todas (${total})`;
  el('rangeTo').value = total;
  el('rangeFrom').max = total;
  el('rangeTo').max = total;
  el('countN').max = total;

  const topics = [...new Set(ex.questions.map(q => q.topic))].sort((a,b)=>a-b);
  const topicSelect = el('topicSelect');
  topicSelect.innerHTML = '';
  topics.forEach(t => {
    const opt = document.createElement('option');
    opt.value = t;
    opt.textContent = 'Topico ' + t;
    topicSelect.appendChild(opt);
  });

  // info do modo custom
  if (customRetakeIds && customRetakeIds.length) {
    el('customInfo').textContent = `(${customRetakeIds.length} questoes prontas)`;
  } else {
    el('customInfo').textContent = '(vazio)';
  }
}

// ============================================================
// LEMBRAR OPCOES DA TELA INICIAL
// ============================================================
const SETUP_FIELD_IDS = [
  'examSelect', 'candidateName', 'rangeFrom', 'rangeTo', 'countN',
  'topicSelect', 'qtypeSelect', 'randomizeQ', 'randomizeChoices', 'trainingMode',
  'passingScore', 'timerOn', 'timerMinutes'
];

function collectSetupPrefs() {
  const prefs = {};
  SETUP_FIELD_IDS.forEach(id => {
    const field = el(id);
    if (!field) return;
    prefs[id] = (field.type === 'checkbox') ? field.checked : field.value;
  });
  const modeEl = document.querySelector('input[name="mode"]:checked');
  prefs.mode = modeEl ? modeEl.value : 'all';
  return prefs;
}

function saveSetupPrefs() {
  localStorage.setItem(SETUP_PREFS_KEY, JSON.stringify(collectSetupPrefs()));
}

function readSetupPrefs() {
  try { return JSON.parse(localStorage.getItem(SETUP_PREFS_KEY)); } catch (e) { return null; }
}

function applySetupPrefs() {
  const prefs = readSetupPrefs();
  if (!prefs) return;
  SETUP_FIELD_IDS.forEach(id => {
    const field = el(id);
    if (!field || !(id in prefs)) return;
    if (field.type === 'checkbox') field.checked = prefs[id];
    else field.value = prefs[id];
  });
  if (prefs.mode) {
    const radio = document.querySelector(`input[name="mode"][value="${prefs.mode}"]`);
    if (radio) radio.checked = true;
  }
}

function bindSetupPrefsAutosave() {
  SETUP_FIELD_IDS.forEach(id => {
    const field = el(id);
    if (!field) return;
    const evt = (field.tagName === 'SELECT' || field.type === 'checkbox' || field.type === 'radio') ? 'change' : 'input';
    field.addEventListener(evt, saveSetupPrefs);
  });
  document.querySelectorAll('input[name="mode"]').forEach(r => r.addEventListener('change', saveSetupPrefs));
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Define a ordem em que as alternativas (A,B,C..) serao exibidas.
// Sem embaralhar: ordem original. Com embaralhar: ordem aleatoria.
// Questoes do tipo "text" nao tem alternativas.
function buildChoiceOrder(q, randomize) {
  if (q.type === 'text' || !q.options) return null;
  const keys = Object.keys(q.options);
  return randomize ? shuffle(keys) : keys;
}

function startExam() {
  saveSetupPrefs();
  const ex = currentExamData();
  if (!ex) { alert('Nenhuma prova disponivel para iniciar.'); return; }
  allQuestions = ex.questions;

  const mode = document.querySelector('input[name="mode"]:checked').value;
  let selected = [...allQuestions];

  if (mode === 'range') {
    const from = parseInt(el('rangeFrom').value, 10);
    const to = parseInt(el('rangeTo').value, 10);
    selected = allQuestions.filter((q, i) => (i + 1) >= from && (i + 1) <= to);
  } else if (mode === 'count') {
    const n = parseInt(el('countN').value, 10);
    selected = shuffle(allQuestions).slice(0, n);
  } else if (mode === 'topic') {
    const t = parseInt(el('topicSelect').value, 10);
    selected = allQuestions.filter(q => q.topic === t);
  } else if (mode === 'qtype') {
    const tp = el('qtypeSelect').value;
    selected = allQuestions.filter(q => q.type === tp);
    if (!selected.length) { alert('Nao ha questoes deste tipo nesta prova.'); return; }
  } else if (mode === 'custom') {
    if (!customRetakeIds || !customRetakeIds.length) {
      alert('Nenhuma lista personalizada disponivel. Use "Refazer" no relatorio de pontuacao primeiro.');
      return;
    }
    selected = customRetakeIds.map(id => allQuestions.find(q => q.id === id)).filter(Boolean);
  }

  if (el('randomizeQ').checked) selected = shuffle(selected);

  config = {
    examId: ex.id,
    examTitle: ex.title,
    candidate: el('candidateName').value || 'Candidato',
    trainingMode: el('trainingMode').checked,
    randomizeChoices: el('randomizeChoices').checked,
    timerOn: el('timerOn').checked,
    timerMinutes: parseInt(el('timerMinutes').value, 10) || 120,
    passingScore: parseInt(el('passingScore').value, 10) || 500,
    questionIds: selected.map(q => q.id)
  };

  questions = selected;
  current = 0;
  userState = {};
  questions.forEach(q => {
    userState[q.id] = {
      selected: [],
      marked: false,
      showAnswer: false,
      choiceOrder: buildChoiceOrder(q, config.randomizeChoices)
    };
  });

  elapsedSeconds = 0;
  sessionActive = true;
  enterExamScreen();
}

function enterExamScreen() {
  el('setupScreen').style.display = 'none';
  el('examScreen').style.display = 'flex';
  el('examTitle').textContent = config.examTitle + ' - VCE Web Player';
  el('candidateLabel').textContent = config.candidate + ' - ';

  // cronometro de tempo decorrido (sempre roda, para o relatorio)
  clearInterval(timerInterval);
  if (config.timerOn) {
    timeLeft = config.timerMinutes * 60;
    el('timerDisplay').style.display = 'inline';
  } else {
    el('timerDisplay').style.display = 'none';
  }
  timerInterval = setInterval(tick, 1000);

  renderQuestion();
}

function tick() {
  elapsedSeconds++;
  if (config.timerOn) {
    timeLeft--;
    const m = Math.floor(Math.max(timeLeft,0) / 60);
    const s = Math.max(timeLeft,0) % 60;
    el('timerDisplay').textContent = `Tempo restante: ${m}:${String(s).padStart(2,'0')}`;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert('Tempo esgotado! O exame sera finalizado.');
      endExam();
    }
  }
}

// ============================================================
// IMPORTAR PROVA (.txt) PELO NAVEGADOR
// ============================================================
function showImportStatus(msg, kind) {
  const box = el('importStatus');
  box.textContent = msg;
  box.className = 'importStatus ' + kind;
  box.style.display = msg ? 'block' : 'none';
}

function initImportUI() {
  const fileInput = el('importFileInput');
  const btn = el('btnImport');
  const toggle = el('btnImportToggle');
  const panel = el('importPanel');
  const hint = el('importHint');

  toggle.addEventListener('click', () => {
    const open = panel.style.display !== 'none';
    panel.style.display = open ? 'none' : 'block';
  });

  if (!serverAvailable) {
    fileInput.disabled = true;
    btn.disabled = true;
    hint.textContent = 'Disponivel apenas rodando com servidor PHP (php -S localhost:8000).';
    return;
  }

  hint.textContent = 'Selecione um arquivo .txt no formato padronizado (veja FORMATO_QUESTOES.md).';
  btn.addEventListener('click', () => {
    const file = fileInput.files[0];
    if (!file) { showImportStatus('Escolha um arquivo .txt primeiro.', 'error'); return; }
    uploadSimuladoFile(file);
  });
}

async function uploadSimuladoFile(file, overwrite) {
  showImportStatus('Enviando...', 'info');
  el('btnImport').disabled = true;
  try {
    const fd = new FormData();
    fd.append('simuladoFile', file);
    if (overwrite) fd.append('overwrite', '1');
    const res = await fetch('import_simulado.php', { method: 'POST', body: fd });
    const data = await res.json();

    if (res.status === 409 && !overwrite) {
      el('btnImport').disabled = false;
      if (confirm(data.error + ' Deseja sobrescrever?')) {
        await uploadSimuladoFile(file, true);
      } else {
        showImportStatus('Importacao cancelada.', 'info');
      }
      return;
    }

    if (!data.ok) {
      showImportStatus(data.error || 'Falha ao importar o arquivo.', 'error');
      return;
    }

    await loadExams();
    populateExamSelect();
    el('examSelect').value = data.id;
    refreshExamMeta();
    saveSetupPrefs();
    el('importFileInput').value = '';
    showImportStatus(`Prova importada: ${data.title} (${data.questionCount} questoes)`, 'success');
  } catch (e) {
    showImportStatus('Erro de conexao ao importar. O servidor PHP esta rodando?', 'error');
  } finally {
    el('btnImport').disabled = false;
  }
}

// ============================================================
// RENDERIZACAO
// ============================================================
function correctAnswerArray(q) {
  return q.answer.split(',').map(s => s.trim()).filter(Boolean);
}

function formatQuestionText(text) {
  const escaped = text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  return escaped.replace(/```([\s\S]*?)```/g, (m, code) => `<pre>${code.trim()}</pre>`);
}

function renderQuestion() {
  const q = questions[current];
  const state = userState[q.id];

  el('itemIndex').textContent = current + 1;
  el('itemTotal').textContent = questions.length;
  el('itemQNum').textContent = q.id;
  el('topicNum').textContent = q.topic;
  el('questionText').innerHTML = formatQuestionText(q.question);
  el('markCheckbox').checked = state.marked;

  const container = el('optionsContainer');
  container.innerHTML = '';

  if (q.type === 'text') {
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'textAnswer';
    input.placeholder = 'Digite sua resposta...';
    input.value = state.selected[0] || '';
    input.addEventListener('input', () => {
      // Conta como respondida se houver qualquer conteudo nao-vazio (inclui "0").
      const v = input.value;
      state.selected = (v.trim().length > 0) ? [v] : [];
      updateScore();
      autoSaveSession();
    });
    container.appendChild(input);
  } else {
    const isMulti = q.type === 'multi';
    // ordem de exibicao (embaralhada ou original). Fallback: chaves originais.
    const order = (state.choiceOrder && state.choiceOrder.length)
      ? state.choiceOrder : Object.keys(q.options);
    // A letra MOSTRADA na tela e reatribuida (A,B,C...) mas a chave interna
    // continua sendo a original (key), para a correcao funcionar corretamente.
    const displayLetters = ['A','B','C','D','E','F','G','H'];

    order.forEach((key, i) => {
      const text = q.options[key];
      const shownLetter = displayLetters[i];
      const row = document.createElement('label');
      row.className = 'optionRow';
      const input = document.createElement('input');
      input.type = isMulti ? 'checkbox' : 'radio';
      input.name = 'opt';
      input.value = key;
      input.checked = state.selected.includes(key);
      input.addEventListener('change', () => {
        if (isMulti) {
          if (input.checked) state.selected.push(key);
          else state.selected = state.selected.filter(k => k !== key);
        } else {
          state.selected = [key];
          if (config.trainingMode) state.showAnswer = true;
        }
        renderQuestion();
        updateScore();
        autoSaveSession();
      });
      const label = document.createElement('span');
      label.className = 'optLabel';
      label.textContent = shownLetter + '.';
      const textSpan = document.createElement('span');
      textSpan.className = 'optText';
      textSpan.textContent = ' ' + text;
      row.appendChild(input); row.appendChild(label); row.appendChild(textSpan);

      if (state.showAnswer) {
        const correct = correctAnswerArray(q);
        if (correct.includes(key)) row.classList.add('correct');
        else if (state.selected.includes(key)) row.classList.add('incorrectSelected');
      }
      container.appendChild(row);
    });
  }

  const answerBox = el('answerBox');
  if (state.showAnswer) {
    answerBox.style.display = 'block';
    el('answerText').textContent = 'Resposta: ' + displayedAnswer(q, state);
    if (q.explanation && q.explanation.trim()) {
      el('explanationText').textContent = q.explanation;
      el('explanationText').style.display = 'block';
    } else {
      el('explanationText').style.display = 'none';
    }
  } else {
    answerBox.style.display = 'none';
  }

  el('btnShowAnswer').textContent = state.showAnswer ? 'Ocultar Resposta' : 'Mostrar Resposta';
  updateScore();
  updateStatus();
}

// Converte o gabarito (chaves originais) para as letras que o usuario ve na tela.
// Necessario quando as alternativas foram embaralhadas.
function displayedAnswer(q, state) {
  if (q.type === 'text') return q.answer;
  const order = (state.choiceOrder && state.choiceOrder.length)
    ? state.choiceOrder : Object.keys(q.options);
  const displayLetters = ['A','B','C','D','E','F','G','H'];
  const correctKeys = correctAnswerArray(q);
  const shown = correctKeys
    .map(k => { const idx = order.indexOf(k); return idx >= 0 ? displayLetters[idx] : k; })
    .sort();
  return shown.join(',');
}

function isAnswered(q) { return userState[q.id].selected.length > 0; }

function isCorrect(q) {
  const state = userState[q.id];
  if (!isAnswered(q)) return false;
  if (q.type === 'text') {
    const given = state.selected[0].trim().toLowerCase();
    const accepted = q.answer.split(',').map(s => s.trim().toLowerCase());
    return accepted.includes(given);
  }
  const correct = correctAnswerArray(q).sort().join(',');
  const chosen = [...state.selected].sort().join(',');
  return correct === chosen;
}

function updateScore() {
  const answered = questions.filter(isAnswered);
  const correct = questions.filter(isCorrect);
  el('scoreDisplay').textContent = `${correct.length}/${questions.length} (${answered.length} respondidas)`;
}

function updateStatus() {
  const q = questions[current];
  if (q.type === 'multi') {
    el('statusText').textContent = `Escolha ${correctAnswerArray(q).length} respostas corretas.`;
  } else if (q.type === 'text') {
    el('statusText').textContent = 'Digite a resposta.';
  } else {
    el('statusText').textContent = 'Selecione a melhor alternativa.';
  }
}

// ============================================================
// EVENTOS
// ============================================================
function bindExamEvents() {
  el('btnPrevious').addEventListener('click', () => { if (current>0){current--;renderQuestion();autoSaveSession();} });
  el('btnNext').addEventListener('click', () => { if (current<questions.length-1){current++;renderQuestion();autoSaveSession();} });
  el('markCheckbox').addEventListener('change', () => { userState[questions[current].id].marked = el('markCheckbox').checked; autoSaveSession(); });
  el('btnShowAnswer').addEventListener('click', () => {
    const s = userState[questions[current].id]; s.showAnswer = !s.showAnswer; renderQuestion();
  });
  el('btnCalculator').addEventListener('click', () => {
    const panel = el('calculatorPanel');
    panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
    if (panel.style.display === 'block' && !panel.dataset.built) { buildCalculator(); panel.dataset.built = '1'; }
  });
  el('btnReview').addEventListener('click', () => {
    const menu = el('reviewMenu'); menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
  });
  document.addEventListener('click', (e) => { if (!e.target.closest('.reviewDropdownWrap')) el('reviewMenu').style.display = 'none'; });
  el('reviewMenu').addEventListener('click', (e) => { const m = e.target.dataset.mode; if (m){ openReview(m); el('reviewMenu').style.display='none'; } });
  el('closeReview').addEventListener('click', () => { el('reviewOverlay').style.display='none'; });
  el('btnSave').addEventListener('click', saveSession);
  el('btnEnd').addEventListener('click', endExam);
  el('btnBackToSetup').addEventListener('click', () => {
    if (confirm('Voltar ao menu inicial? (salve sua sessao antes se quiser manter o progresso)')) {
      clearInterval(timerInterval);
      el('examScreen').style.display = 'none';
      el('setupScreen').style.display = 'block';
      refreshExamMeta();
    }
  });

  // Score report buttons
  el('closeReport').addEventListener('click', () => { el('reportOverlay').style.display='none'; });
  el('btnPrintReport').addEventListener('click', () => window.print());
  el('btnReviewFromReport').addEventListener('click', () => { el('reportOverlay').style.display='none'; openReview('all'); });
  el('btnRetakeWrong').addEventListener('click', () => retake('wrong'));
  el('btnRetakeIncomplete').addEventListener('click', () => retake('incomplete'));

  // History buttons
  el('closeHistory').addEventListener('click', () => { el('historyOverlay').style.display='none'; });
  el('btnClearHistory').addEventListener('click', () => {
    if (confirm('Limpar todo o historico de notas?')) { localStorage.removeItem(HISTORY_KEY); openHistory(); }
  });
}

function buildCalculator() {
  const grid = el('calcGrid'); const display = el('calcDisplay');
  let expr = '';
  const keys = ['7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+','C'];
  keys.forEach(k => {
    const btn = document.createElement('button'); btn.textContent = k;
    btn.addEventListener('click', () => {
      if (k==='C') expr='';
      else if (k==='=') { try{ expr=String(Function('"use strict";return ('+expr+')')()); }catch(e){ expr='Erro'; } }
      else expr += k;
      display.textContent = expr || '0';
    });
    grid.appendChild(btn);
  });
}

// ============================================================
// REVISAO
// ============================================================
function openReview(mode) {
  const titles = { all:'Todas', marked:'Marcadas', incomplete:'Incompletas', wrong:'Erradas' };
  el('reviewTitle').textContent = 'Revisao - ' + (titles[mode]||'');
  const list = el('reviewList'); list.innerHTML = '';
  let shown = 0;
  questions.forEach((q, idx) => {
    const state = userState[q.id];
    const answered = isAnswered(q); const correct = isCorrect(q);
    let show = true;
    if (mode==='marked') show = state.marked;
    if (mode==='incomplete') show = !answered;
    if (mode==='wrong') show = answered && !correct;
    if (!show) return;
    shown++;
    const row = document.createElement('div');
    let icon='', cls='';
    if (!answered){icon='?';cls='rUnanswered';}
    else if (correct){icon='OK';cls='rCorrect';}
    else {icon='X';cls='rWrong';}
    row.innerHTML = `<span class="rIcon ${cls}">${icon}</span> Item ${idx+1} (Q${escapeHtml(q.id)}) `+
      `${state.marked?'<span class="rMarked">[Marcada]</span> ':''}- ${escapeHtml(q.question.slice(0,80).replace(/\n/g,' '))}...`;
    row.addEventListener('click', () => { current=idx; renderQuestion(); el('reviewOverlay').style.display='none'; });
    list.appendChild(row);
  });
  if (shown===0) list.innerHTML = '<div style="color:var(--text-muted);padding:12px;">Nenhuma questao nesta categoria.</div>';
  el('reviewOverlay').style.display = 'flex';
}

// ============================================================
// SALVAR / CARREGAR SESSAO
// ============================================================
function buildSessionPayload() {
  return { active: true, savedAt: Date.now(), config, current, userState, elapsedSeconds, timeLeft };
}

// localStorage e sempre a fonte de verdade (evita misturar sessao de
// usuarios diferentes no arquivo unico sessions/session.json do servidor).
// O servidor so e consultado se nao houver nada salvo localmente.
async function loadSessionData() {
  const local = localStorage.getItem(SESSION_KEY);
  if (local) {
    try { const parsed = JSON.parse(local); if (parsed && parsed.config) return parsed; } catch (e) {}
  }
  try {
    const res = await fetch('load_session.php');
    if (res.ok) {
      const d = await res.json();
      if (d && d.ok !== false && d.config) return d;
    }
  } catch (e) {}
  return null;
}

function restoreSessionFromData(data, ex) {
  config = data.config;
  allQuestions = ex.questions;
  questions = config.questionIds.map(id => ex.questions.find(q => q.id === id)).filter(Boolean);
  current = data.current || 0;
  userState = data.userState || {};
  elapsedSeconds = data.elapsedSeconds || 0;
  questions.forEach(q => {
    if (!userState[q.id]) userState[q.id] = { selected:[], marked:false, showAnswer:false };
    // recria a ordem das alternativas se a sessao antiga nao tiver (compatibilidade)
    if (userState[q.id].choiceOrder === undefined) {
      userState[q.id].choiceOrder = buildChoiceOrder(q, config.randomizeChoices);
    }
  });
  sessionActive = true;
  enterExamScreen();
  // Restaura o tempo restante do timer salvo na sessao (enterExamScreen
  // reinicia timeLeft do zero, entao sobrescreve depois).
  if (config.timerOn && typeof data.timeLeft === 'number' && data.timeLeft > 0) {
    timeLeft = data.timeLeft;
  }
}

let serverSaveTimer = null;
const SERVER_SAVE_DEBOUNCE_MS = 4000;

// Auto-save: grava no localStorage a cada mudanca relevante (sincrono) e
// agenda um envio ao servidor com debounce, para nao disparar uma
// requisicao HTTP a cada clique/tecla.
function autoSaveSession() {
  if (!sessionActive) return;
  const payload = buildSessionPayload();
  localStorage.setItem(SESSION_KEY, JSON.stringify(payload));
  clearTimeout(serverSaveTimer);
  serverSaveTimer = setTimeout(() => flushServerSave(payload), SERVER_SAVE_DEBOUNCE_MS);
}

async function flushServerSave(payload) {
  try {
    await fetch('save_session.php', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) });
  } catch (e) {
    // sem servidor: sem problema, o localStorage ja tem o estado atual
  }
}

// Garante que o ultimo estado chegue ao servidor mesmo se o debounce
// nao tiver disparado ainda (aba fechada/trocada de fundo).
function bindAutosaveLifecycleHooks() {
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden' && sessionActive) {
      const payload = buildSessionPayload();
      localStorage.setItem(SESSION_KEY, JSON.stringify(payload));
      if (navigator.sendBeacon) {
        navigator.sendBeacon('save_session.php', new Blob([JSON.stringify(payload)], { type: 'application/json' }));
      }
    }
  });
}

async function saveSession() {
  clearTimeout(serverSaveTimer);
  const payload = buildSessionPayload();
  localStorage.setItem(SESSION_KEY, JSON.stringify(payload));
  try {
    const res = await fetch('save_session.php', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) });
    if (res.ok) { alert('Sessao salva (local + servidor)!'); return; }
  } catch(e){}
  alert('Sessao salva localmente no navegador!');
}

async function continueSession() {
  const data = await loadSessionData();
  if (!data || !data.config) { alert('Nenhuma sessao salva encontrada.'); return; }
  const ex = EXAMS_DATA.exams.find(e => e.id === data.config.examId);
  if (!ex) { alert('A prova desta sessao nao foi encontrada no codigo.'); return; }
  restoreSessionFromData(data, ex);
}

// Tenta retomar automaticamente uma sessao ativa ao carregar a pagina
// (ex: apos dar refresh no meio de uma prova). So dispara se a sessao
// estiver marcada como "active" (nao ocorre para provas ja finalizadas).
async function tryAutoRestoreSession() {
  const data = await loadSessionData();
  if (!data || !data.config || data.active !== true) return false;
  const ex = EXAMS_DATA.exams.find(e => e.id === data.config.examId);
  if (!ex) return false;
  restoreSessionFromData(data, ex);
  return true;
}

function clearActiveSession() {
  sessionActive = false;
  clearTimeout(serverSaveTimer);
  localStorage.removeItem(SESSION_KEY);
  fetch('save_session.php', {
    method: 'POST', headers: {'Content-Type':'application/json'},
    body: JSON.stringify({ active: false, endedAt: Date.now() })
  }).catch(() => {});
}

// ============================================================
// SCORE REPORT + HISTORICO
// ============================================================
function computeResults() {
  const total = questions.length;
  const correct = questions.filter(isCorrect).length;
  const answered = questions.filter(isAnswered).length;
  const incorrect = questions.filter(q => isAnswered(q) && !isCorrect(q)).length;
  const incomplete = total - answered;

  const scaledScore = Math.round((correct / total) * 1000);
  const passing = config.passingScore || 500;
  const passed = scaledScore >= passing;
  const percent = ((correct / total) * 100).toFixed(1);

  // por topico
  const byTopic = {};
  questions.forEach(q => {
    if (!byTopic[q.topic]) byTopic[q.topic] = { total:0, correct:0 };
    byTopic[q.topic].total++;
    if (isCorrect(q)) byTopic[q.topic].correct++;
  });

  return { total, correct, answered, incorrect, incomplete, scaledScore, passing, passed, percent, byTopic };
}

function endExam() {
  clearInterval(timerInterval);
  const r = computeResults();
  saveToHistory(r);
  clearActiveSession();
  showScoreReport(r);
}

function showScoreReport(r) {
  const now = new Date();
  const dateStr = now.toLocaleDateString('pt-BR');
  const timeStr = now.toLocaleTimeString('pt-BR', {hour:'2-digit', minute:'2-digit'});
  const em = Math.floor(elapsedSeconds/60), es = elapsedSeconds%60;
  const elapsedStr = `${em}:${String(es).padStart(2,'0')}`;

  const gradeColor = r.passed ? 'var(--pass)' : 'var(--fail)';
  const gradeText = r.passed ? 'APROVADO' : 'REPROVADO';

  // barra: sua nota vs nota minima (escala 0-1000)
  const yourPct = (r.scaledScore/1000)*100;
  const passPct = (r.passing/1000)*100;

  // tabela por topico
  let topicRows = '';
  Object.keys(r.byTopic).sort((a,b)=>a-b).forEach(t => {
    const d = r.byTopic[t];
    const p = ((d.correct/d.total)*100).toFixed(0);
    topicRows += `<tr>
      <td>Topico ${t}</td>
      <td style="text-align:center;">${d.correct}/${d.total}</td>
      <td style="text-align:right;">
        <div class="topicBar"><div class="topicBarFill" style="width:${p}%"></div><span>${p}%</span></div>
      </td>
    </tr>`;
  });

  el('reportBody').innerHTML = `
    <h1>Examination Score Report</h1>
    <h2>${escapeHtml(config.examTitle)}</h2>
    <div class="reportMeta">
      <div><strong>CANDIDATO:</strong> ${escapeHtml(config.candidate)}</div>
      <div class="metaRow"><span><strong>DATA:</strong> ${dateStr}</span><span><strong>HORA:</strong> ${timeStr}</span></div>
      <div class="metaRow"><span><strong>PROVA:</strong> ${escapeHtml(config.examId)}</span><span><strong>TEMPO DECORRIDO:</strong> ${elapsedStr}</span></div>
    </div>

    <div class="chartWrap">
      <div class="chartRow">
        <div class="chartLabel">Nota Minima</div>
        <div class="chartTrack"><div class="chartBarReq" style="width:${passPct}%"></div></div>
      </div>
      <div class="chartRow">
        <div class="chartLabel">Sua Nota</div>
        <div class="chartTrack"><div class="chartBarYour ${r.passed?'pass':'fail'}" style="width:${yourPct}%"></div></div>
      </div>
      <div class="chartScale"><span>0</span><span>500</span><span>1000</span></div>
    </div>

    <div class="reportScores">
      <div><strong>Nota Minima:</strong> ${r.passing}/1000</div>
      <div><strong>Sua Nota:</strong> ${r.scaledScore}/1000</div>
      <div><strong>Resultado:</strong> <span style="color:${gradeColor};font-weight:700;">${gradeText}</span></div>
    </div>

    <div class="reportStats">
      <span class="statChip">Total: ${r.total}</span>
      <span class="statChip ok">Acertos: ${r.correct}</span>
      <span class="statChip bad">Erros: ${r.incorrect}</span>
      <span class="statChip warn">Incompletas: ${r.incomplete}</span>
      <span class="statChip">Percentual: ${r.percent}%</span>
    </div>

    <h3>Desempenho por Secao/Topico</h3>
    <table class="topicTable">
      <thead><tr><th>Secao</th><th style="text-align:center;">Itens</th><th style="text-align:right;">Percentual Correto</th></tr></thead>
      <tbody>${topicRows}</tbody>
    </table>
  `;

  el('reportOverlay').style.display = 'flex';
}

function getHistory() {
  try { return JSON.parse(localStorage.getItem(HISTORY_KEY)) || []; } catch(e){ return []; }
}

function saveToHistory(r) {
  const hist = getHistory();
  const now = new Date();
  hist.unshift({
    date: now.toLocaleDateString('pt-BR'),
    time: now.toLocaleTimeString('pt-BR', {hour:'2-digit', minute:'2-digit'}),
    candidate: config.candidate,
    examTitle: config.examTitle,
    examId: config.examId,
    scaledScore: r.scaledScore,
    passing: r.passing,
    passed: r.passed,
    correct: r.correct,
    total: r.total,
    incorrectIds: questions.filter(q => isAnswered(q) && !isCorrect(q)).map(q=>q.id),
    incompleteIds: questions.filter(q => !isAnswered(q)).map(q=>q.id)
  });
  localStorage.setItem(HISTORY_KEY, JSON.stringify(hist.slice(0, 50)));
}

function openHistory() {
  const hist = getHistory();
  const body = el('historyBody');
  if (!hist.length) {
    body.innerHTML = '<div style="color:var(--text-muted);padding:20px;text-align:center;">Nenhuma tentativa registrada ainda.</div>';
  } else {
    let rows = '';
    hist.forEach((h, i) => {
      const grade = h.passed ? '<span style="color:var(--pass);font-weight:700;">Aprovado</span>' : '<span style="color:var(--fail);font-weight:700;">Reprovado</span>';
      rows += `<tr>
        <td>${escapeHtml(h.date)}</td><td>${escapeHtml(h.time)}</td><td>${escapeHtml(h.candidate)}</td>
        <td>${escapeHtml(h.examTitle)}</td>
        <td style="text-align:center;">${h.scaledScore}</td>
        <td style="text-align:center;">${h.passing}</td>
        <td style="text-align:center;">${grade}</td>
        <td style="text-align:center;">
          <button class="miniBtn" data-retake-wrong="${i}" ${h.incorrectIds.length?'':'disabled'}>Erradas (${h.incorrectIds.length})</button>
          <button class="miniBtn" data-retake-incomplete="${i}" ${h.incompleteIds.length?'':'disabled'}>Incompletas (${h.incompleteIds.length})</button>
        </td>
      </tr>`;
    });
    body.innerHTML = `
      <table class="historyTable">
        <thead><tr>
          <th>Data</th><th>Hora</th><th>Candidato</th><th>Prova</th>
          <th>Nota</th><th>Min.</th><th>Resultado</th><th>Refazer</th>
        </tr></thead>
        <tbody>${rows}</tbody>
      </table>`;
    body.querySelectorAll('[data-retake-wrong]').forEach(b => {
      b.addEventListener('click', () => retakeFromHistory(hist[+b.dataset.retakeWrong], 'wrong'));
    });
    body.querySelectorAll('[data-retake-incomplete]').forEach(b => {
      b.addEventListener('click', () => retakeFromHistory(hist[+b.dataset.retakeIncomplete], 'incomplete'));
    });
  }
  el('historyOverlay').style.display = 'flex';
}

// Refazer a partir do relatorio atual
function retake(kind) {
  const ids = kind === 'wrong'
    ? questions.filter(q => isAnswered(q) && !isCorrect(q)).map(q=>q.id)
    : questions.filter(q => !isAnswered(q)).map(q=>q.id);
  if (!ids.length) { alert('Nenhuma questao nesta categoria para refazer.'); return; }
  startCustomRetake(config.examId, ids);
}

// Refazer a partir do historico
function retakeFromHistory(entry, kind) {
  const ids = kind === 'wrong' ? entry.incorrectIds : entry.incompleteIds;
  if (!ids || !ids.length) { alert('Nenhuma questao nesta categoria.'); return; }
  startCustomRetake(entry.examId, ids);
}

function startCustomRetake(examId, ids) {
  const ex = EXAMS_DATA.exams.find(e => e.id === examId);
  if (!ex) { alert('Prova nao encontrada.'); return; }
  allQuestions = ex.questions;
  const selected = ids.map(id => ex.questions.find(q => q.id === id)).filter(Boolean);
  const keepRandChoices = !!config.randomizeChoices;
  config = {
    examId: ex.id, examTitle: ex.title + ' (Refazer)',
    candidate: config.candidate || el('candidateName').value || 'Candidato',
    trainingMode: true, randomizeChoices: keepRandChoices,
    timerOn: false, timerMinutes: 120,
    passingScore: (config.passingScore || parseInt(el('passingScore').value,10) || 500),
    questionIds: selected.map(q=>q.id)
  };
  questions = selected; current = 0; userState = {};
  questions.forEach(q => userState[q.id] = {
    selected:[], marked:false, showAnswer:false,
    choiceOrder: buildChoiceOrder(q, keepRandChoices)
  });
  elapsedSeconds = 0;
  sessionActive = true;
  el('reportOverlay').style.display = 'none';
  el('historyOverlay').style.display = 'none';
  enterExamScreen();
}

// ============================================================
// INIT
// ============================================================
(async function init() {
  initThemeToggle();
  await loadExams();
  initSetupScreen();
  bindExamEvents();
  bindAutosaveLifecycleHooks();
  await tryAutoRestoreSession();
})();
