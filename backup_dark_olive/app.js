/**
 * QUIZVERSE - Interactive QnA & Questionnaire Platform
 * Core Application Engine & State Controller
 */

// ===================================================================
// 1. DATA MODELS & INITIAL PRESET QUESTIONNAIRES
// ===================================================================
const DEFAULT_PRESET_QUIZZES = [
  {
    id: "quiz-faith-01",
    code: "FAITH1",
    title: "Bible & Faith Quest",
    description: "Test your knowledge on inspiring Bible stories, historical events, and Christian traditions.",
    category: "Faith & Church",
    author: "Grace Community",
    timeLimit: 20,
    createdAt: "2026-10-10",
    playsCount: 24,
    questions: [
      {
        id: "q1",
        text: "How many books are in the standard Protestant Bible?",
        type: "multiple",
        points: 1000,
        explanation: "The Protestant Bible has 66 books: 39 in the Old Testament and 27 in the New Testament.",
        options: [
          { text: "66 books", isCorrect: true },
          { text: "73 books", isCorrect: false },
          { text: "52 books", isCorrect: false },
          { text: "80 books", isCorrect: false }
        ]
      },
      {
        id: "q2",
        text: "Which book of the Bible begins with the words 'In the beginning'?",
        type: "multiple",
        points: 1000,
        explanation: "Genesis 1:1 and John 1:1 both open with this, but Genesis is the first book of the scriptures.",
        options: [
          { text: "Psalms", isCorrect: false },
          { text: "Genesis", isCorrect: true },
          { text: "Exodus", isCorrect: false },
          { text: "Matthew", isCorrect: false }
        ]
      },
      {
        id: "q3",
        text: "Who led the Israelites across the Red Sea away from Egypt?",
        type: "multiple",
        points: 1000,
        explanation: "Moses led the Exodus out of Egypt under God's guidance.",
        options: [
          { text: "King David", isCorrect: false },
          { text: "Abraham", isCorrect: false },
          { text: "Moses", isCorrect: true },
          { text: "Joshua", isCorrect: false }
        ]
      },
      {
        id: "q4",
        text: "Which fruit of the Spirit is listed first in Galatians 5:22?",
        type: "multiple",
        points: 1000,
        explanation: "Galatians 5:22 states: 'But the fruit of the Spirit is love, joy, peace, forbearance...'",
        options: [
          { text: "Joy", isCorrect: false },
          { text: "Love", isCorrect: true },
          { text: "Peace", isCorrect: false },
          { text: "Faithfulness", isCorrect: false }
        ]
      },
      {
        id: "q5",
        text: "In which town was Jesus Christ born according to the Gospels?",
        type: "multiple",
        points: 1000,
        explanation: "Jesus was born in Bethlehem in Judea, fulfilling the prophecy of Micah 5:2.",
        options: [
          { text: "Nazareth", isCorrect: false },
          { text: "Jerusalem", isCorrect: false },
          { text: "Bethlehem", isCorrect: true },
          { text: "Capernaum", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "quiz-trivia-02",
    code: "TRIVIA",
    title: "Ultimate World Trivia Challenge",
    description: "Fast-paced questions across world geography, science, history, and pop culture!",
    category: "General Trivia",
    author: "QuizMaster",
    timeLimit: 15,
    createdAt: "2026-10-11",
    playsCount: 58,
    questions: [
      {
        id: "t1",
        text: "Which planet in our solar system is known as the 'Red Planet'?",
        type: "multiple",
        points: 1000,
        explanation: "Mars appears reddish due to iron oxide (rust) on its surface.",
        options: [
          { text: "Venus", isCorrect: false },
          { text: "Mars", isCorrect: true },
          { text: "Jupiter", isCorrect: false },
          { text: "Saturn", isCorrect: false }
        ]
      },
      {
        id: "t2",
        text: "What is the largest ocean on Earth?",
        type: "multiple",
        points: 1000,
        explanation: "The Pacific Ocean covers over 63 million square miles, greater than all land area combined.",
        options: [
          { text: "Atlantic Ocean", isCorrect: false },
          { text: "Indian Ocean", isCorrect: false },
          { text: "Pacific Ocean", isCorrect: true },
          { text: "Arctic Ocean", isCorrect: false }
        ]
      },
      {
        id: "t3",
        text: "How many colors are in a traditional rainbow?",
        type: "multiple",
        points: 1000,
        explanation: "Red, Orange, Yellow, Green, Blue, Indigo, and Violet (ROYGBIV) - 7 colors.",
        options: [
          { text: "6", isCorrect: false },
          { text: "7", isCorrect: true },
          { text: "8", isCorrect: false },
          { text: "9", isCorrect: false }
        ]
      },
      {
        id: "t4",
        text: "Who painted the famous masterpiece 'Mona Lisa'?",
        type: "multiple",
        points: 1000,
        explanation: "Leonardo da Vinci painted the Mona Lisa in the early 16th century.",
        options: [
          { text: "Vincent van Gogh", isCorrect: false },
          { text: "Pablo Picasso", isCorrect: false },
          { text: "Leonardo da Vinci", isCorrect: true },
          { text: "Michelangelo", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "quiz-science-03",
    code: "SCI888",
    title: "Science & Nature Wonders",
    description: "Explore atomic wonders, animal facts, and the secrets of the physical world.",
    category: "Science",
    author: "Dr. Cosmos",
    timeLimit: 20,
    createdAt: "2026-10-09",
    playsCount: 31,
    questions: [
      {
        id: "s1",
        text: "What gas do plants absorb from the air to perform photosynthesis?",
        type: "multiple",
        points: 1000,
        explanation: "Plants take in Carbon Dioxide (CO2) and release Oxygen (O2).",
        options: [
          { text: "Oxygen", isCorrect: false },
          { text: "Carbon Dioxide", isCorrect: true },
          { text: "Nitrogen", isCorrect: false },
          { text: "Hydrogen", isCorrect: false }
        ]
      },
      {
        id: "s2",
        text: "What is the chemical formula for water?",
        type: "multiple",
        points: 1000,
        explanation: "Two Hydrogen atoms bonded with one Oxygen atom form H2O.",
        options: [
          { text: "H2O", isCorrect: true },
          { text: "CO2", isCorrect: false },
          { text: "NaCl", isCorrect: false },
          { text: "O2", isCorrect: false }
        ]
      },
      {
        id: "s3",
        text: "What is the hardest natural substance on Earth?",
        type: "multiple",
        points: 1000,
        explanation: "Diamond scores 10 on the Mohs mineral hardness scale.",
        options: [
          { text: "Gold", isCorrect: false },
          { text: "Titanium", isCorrect: false },
          { text: "Diamond", isCorrect: true },
          { text: "Granite", isCorrect: false }
        ]
      }
    ]
  }
];

// ===================================================================
// 2. SYNTHESIZED SOUND EFFECTS ENGINE (Web Audio API)
// ===================================================================
class AudioEffectsEngine {
  constructor() {
    this.ctx = null;
    let muted = false;
    try {
      muted = localStorage.getItem("quizverse_muted") === "true";
    } catch (e) {}
    this.isMuted = muted;
  }

  init() {
    if (!this.ctx) {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          this.ctx = new AudioCtx();
        }
      } catch (e) {
        console.warn("AudioContext not supported or restricted", e);
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      try {
        this.ctx.resume();
      } catch (e) {}
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    try {
      localStorage.setItem("quizverse_muted", this.isMuted);
    } catch (e) {}
    return this.isMuted;
  }

  playTone(freq, type, duration, gainStart = 0.15, gainEnd = 0.001) {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(gainStart, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(gainEnd, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn("Audio play error", e);
    }
  }

  playClick() {
    this.playTone(600, "sine", 0.08, 0.1);
  }

  playCountdownTick() {
    this.playTone(440, "sine", 0.12, 0.2);
  }

  playCountdownGo() {
    this.playTone(880, "triangle", 0.4, 0.3);
  }

  playCorrect() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    // Cheerful ascending major chord arpeggio (C5, E5, G5, C6)
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playTone(freq, "sine", 0.25, 0.2);
      }, idx * 70);
    });
  }

  playWrong() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    // Buzzing descending tone
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(220, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(140, this.ctx.currentTime + 0.35);

      gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.35);
    } catch (e) {
      console.warn(e);
    }
  }

  playFanfare() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const fanfare = [
      { f: 523.25, d: 0.15 },
      { f: 659.25, d: 0.15 },
      { f: 783.99, d: 0.2 },
      { f: 1046.50, d: 0.5 }
    ];
    let timeOffset = 0;
    fanfare.forEach(item => {
      setTimeout(() => {
        this.playTone(item.f, "triangle", item.d, 0.25);
      }, timeOffset * 1000);
      timeOffset += item.d * 0.9;
    });
  }
}

// ===================================================================
// 3. CANVAS CONFETTI EXPLOSION GENERATOR
// ===================================================================
class ConfettiEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas ? this.canvas.getContext("2d") : null;
    this.particles = [];
    this.animationId = null;

    if (this.canvas) {
      window.addEventListener("resize", () => this.resize());
      this.resize();
    }
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  fire(particleCount = 120) {
    if (!this.ctx) return;
    this.resize();

    const colors = ["#6b8e23", "#ffffff", "#8ca948", "#4f681a", "#eab308", "#d2dfc4", "#181d14"];
    for (let i = 0; i < particleCount; i++) {
      this.particles.push({
        x: this.canvas.width / 2 + (Math.random() - 0.5) * 200,
        y: this.canvas.height / 2 + (Math.random() - 0.5) * 100,
        vx: (Math.random() - 0.5) * 18,
        vy: -Math.random() * 15 - 8,
        size: Math.random() * 8 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 12,
        opacity: 1
      });
    }

    if (!this.animationId) {
      this.render();
    }
  }

  render() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.45; // gravity
      p.vx *= 0.985;
      p.rotation += p.rotSpeed;
      p.opacity -= 0.007;

      if (p.opacity <= 0 || p.y > this.canvas.height + 50) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.fillStyle = p.color;
      this.ctx.globalAlpha = Math.max(0, p.opacity);
      this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.5);
      this.ctx.restore();
    }

    if (this.particles.length > 0) {
      this.animationId = requestAnimationFrame(() => this.render());
    } else {
      this.animationId = null;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}

// ===================================================================
// 4. MAIN APP CONTROLLER
// ===================================================================
class QuizverseApp {
  constructor() {
    this.sound = new AudioEffectsEngine();
    this.confetti = new ConfettiEngine("confettiCanvas");

    // Player state (must be initialized BEFORE getEmptyQuizDraft)
    this.player = {
      name: this.safeGetStorage("quizverse_last_name", "Player 1"),
      avatar: this.safeGetStorage("quizverse_last_avatar", "🦊")
    };

    // State
    this.quizzes = this.loadQuizzes();
    this.leaderboard = this.loadLeaderboard();
    this.currentView = "explore";
    this.activeCategory = "All";
    this.searchQuery = "";

    // Quiz Builder State
    this.builderDraft = this.getEmptyQuizDraft();
    this.builderActiveQIndex = 0;

    // Game Session State
    this.gameQuiz = null;
    this.gameState = {
      qIndex: 0,
      score: 0,
      streak: 0,
      correctCount: 0,
      history: [],
      timer: null,
      timeLeft: 0,
      totalTime: 20,
      answered: false
    };

    // Anti-Cheat & Proctoring State
    this.disqualifiedQuizzes = this.loadDisqualifiedQuizzes();
    this.isGameInProgress = false;
    this.countdownInterval = null;

    // Check if player closed/refreshed page during an active quiz session
    const abandonedQuizId = this.safeGetStorage("quizverse_active_game_id");
    if (abandonedQuizId) {
      this.recordDisqualification(abandonedQuizId, "Closed or refreshed browser while quiz was active");
      this.safeRemoveStorage("quizverse_active_game_id");
    }

    this.initDOM();
    this.bindEvents();
    this.checkUrlParams();
    this.render();
  }

  // Safe Local Storage Helpers
  safeGetStorage(key, fallback = null) {
    try {
      const val = localStorage.getItem(key);
      return val !== null ? val : fallback;
    } catch (e) {
      return fallback;
    }
  }

  safeSetStorage(key, value) {
    try {
      localStorage.setItem(key, typeof value === "string" ? value : JSON.stringify(value));
    } catch (e) {
      console.warn("Storage write error", e);
    }
  }

  safeRemoveStorage(key) {
    try {
      localStorage.removeItem(key);
    } catch (e) {}
  }

  // Anti-Cheat & Disqualification Management
  loadDisqualifiedQuizzes() {
    try {
      const data = this.safeGetStorage("quizverse_disqualified_v1");
      if (data) {
        const parsed = JSON.parse(data);
        if (typeof parsed === "object" && parsed !== null) {
          return parsed;
        }
      }
    } catch (e) {}
    return {};
  }

  saveDisqualifiedQuizzes() {
    this.safeSetStorage("quizverse_disqualified_v1", JSON.stringify(this.disqualifiedQuizzes));
  }

  isDisqualified(quizId) {
    return !!(this.disqualifiedQuizzes && this.disqualifiedQuizzes[quizId]);
  }

  recordDisqualification(quizId, reason = "Exited or switched tabs during quiz") {
    if (!quizId) return;
    this.disqualifiedQuizzes[quizId] = {
      timestamp: new Date().toISOString(),
      reason: reason
    };
    this.saveDisqualifiedQuizzes();
  }

  resetDisqualification(quizId) {
    if (this.disqualifiedQuizzes && this.disqualifiedQuizzes[quizId]) {
      delete this.disqualifiedQuizzes[quizId];
      this.saveDisqualifiedQuizzes();
      this.showToast("Disqualification cleared for this questionnaire.", "success");
      this.switchView("explore");
    }
  }

  resetAllDisqualifications() {
    this.disqualifiedQuizzes = {};
    this.saveDisqualifiedQuizzes();
    this.showToast("All disqualifications cleared.", "success");
    this.switchView("explore");
  }

  triggerDisqualification(reason = "Switched to another tab or exited the browser") {
    if (!this.isGameInProgress || !this.gameQuiz) return;

    // Immediately stop active round timer and countdown timer
    if (this.gameState && this.gameState.timer) {
      clearInterval(this.gameState.timer);
      this.gameState.timer = null;
    }
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
      this.countdownInterval = null;
    }

    this.isGameInProgress = false;
    this.safeRemoveStorage("quizverse_active_game_id");

    // Remove any countdown popup elements immediately
    document.querySelectorAll(".game-countdown-overlay").forEach(el => el.remove());

    const quizId = this.gameQuiz.id;
    this.recordDisqualification(quizId, reason);

    this.sound.playWrong();
    this.showToast("🚫 DISQUALIFIED: You left or switched tabs during the quiz!", "error");
    this.renderDisqualifiedScreen(quizId, reason);
  }

  // Local Storage
  loadQuizzes() {
    try {
      const data = localStorage.getItem("quizverse_quizzes_v1");
      if (data) {
        const parsed = JSON.parse(data);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error("Corrupted quiz cache, loading presets", e);
    }
    this.saveQuizzes(DEFAULT_PRESET_QUIZZES);
    return DEFAULT_PRESET_QUIZZES;
  }

  saveQuizzes(list) {
    this.quizzes = list;
    this.safeSetStorage("quizverse_quizzes_v1", list);
  }

  loadLeaderboard() {
    try {
      const data = localStorage.getItem("quizverse_leaderboard_v1");
      if (data) {
        return JSON.parse(data);
      }
    } catch (e) {}
    return {};
  }

  saveLeaderboard(data) {
    this.leaderboard = data;
    this.safeSetStorage("quizverse_leaderboard_v1", data);
  }

  getEmptyQuizDraft() {
    return {
      id: "quiz-" + Date.now(),
      code: "QZ" + Math.floor(1000 + Math.random() * 9000),
      title: "",
      description: "",
      category: "General Trivia",
      author: (this.player && this.player.name) ? this.player.name : "Quiz Creator",
      timeLimit: 20,
      createdAt: new Date().toISOString().split("T")[0],
      playsCount: 0,
      questions: [
        {
          id: "q-" + Date.now() + "-1",
          text: "",
          type: "multiple",
          points: 1000,
          explanation: "",
          options: [
            { text: "", isCorrect: true },
            { text: "", isCorrect: false },
            { text: "", isCorrect: false },
            { text: "", isCorrect: false }
          ]
        }
      ]
    };
  }

  // DOM Elements
  initDOM() {
    this.views = {
      explore: document.getElementById("viewExplore"),
      builder: document.getElementById("viewBuilder"),
      play: document.getElementById("viewPlay"),
      results: document.getElementById("viewResults")
    };

    this.navBtns = document.querySelectorAll(".nav-btn");
    this.audioToggleBtn = document.getElementById("audioToggleBtn");
    this.updateAudioButtonState();
  }

  updateAudioButtonState() {
    if (!this.audioToggleBtn) return;
    if (this.sound.isMuted) {
      this.audioToggleBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="1" y1="1" x2="23" y2="23"></line>
          <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path>
          <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path>
          <line x1="12" y1="19" x2="12" y2="23"></line>
          <line x1="8" y1="23" x2="16" y2="23"></line>
        </svg>
      `;
      this.audioToggleBtn.title = "Unmute Sounds";
    } else {
      this.audioToggleBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        </svg>
      `;
      this.audioToggleBtn.title = "Mute Sounds";
    }
  }

  switchView(viewName) {
    if (this.isGameInProgress && viewName !== "play") {
      this.triggerDisqualification("Exited active quiz to browse other views");
      return;
    }

    this.currentView = viewName;
    Object.keys(this.views).forEach(key => {
      if (this.views[key]) {
        this.views[key].classList.toggle("active", key === viewName);
      }
    });

    this.navBtns.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.view === viewName);
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
    this.render();
  }

  showToast(message, type = "success") {
    const container = document.getElementById("toastContainer");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    const icon = type === "success" 
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;

    toast.innerHTML = `${icon} <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(50px)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // ===================================================================
  // 5. EVENT LISTENERS
  // ===================================================================
  bindEvents() {
    // Navigation
    this.navBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        this.sound.playClick();
        const targetView = btn.dataset.view;
        if (targetView === "builder") {
          // Keep current draft or fresh
          this.switchView("builder");
        } else {
          this.switchView(targetView);
        }
      });
    });

    // Audio toggle
    if (this.audioToggleBtn) {
      this.audioToggleBtn.addEventListener("click", () => {
        const isMuted = this.sound.toggleMute();
        this.updateAudioButtonState();
        this.showToast(isMuted ? "Sound muted" : "Sound enabled! 🔊", "success");
      });
    }

    // Hero buttons
    const heroCreateBtn = document.getElementById("heroCreateBtn");
    if (heroCreateBtn) {
      heroCreateBtn.addEventListener("click", () => {
        this.sound.playClick();
        this.resetBuilder();
        this.switchView("builder");
      });
    }

    // PIN Quick Join
    const pinJoinBtn = document.getElementById("pinJoinBtn");
    const pinInput = document.getElementById("pinInput");
    if (pinJoinBtn && pinInput) {
      const handlePin = () => {
        const code = pinInput.value.trim().toUpperCase();
        if (!code) {
          this.showToast("Please enter a Quiz Code or PIN", "error");
          return;
        }
        const found = this.quizzes.find(q => q.code.toUpperCase() === code);
        if (found) {
          if (this.isDisqualified(found.id)) {
            this.sound.playWrong();
            this.showToast("🚫 You are disqualified from this quiz!", "error");
            this.renderDisqualifiedScreen(found.id, this.disqualifiedQuizzes[found.id]?.reason);
            return;
          }
          this.sound.playClick();
          this.openLobby(found.id);
        } else {
          this.sound.playWrong();
          this.showToast("No quiz found with PIN: " + code, "error");
        }
      };

      pinJoinBtn.addEventListener("click", handlePin);
      pinInput.addEventListener("keydown", e => {
        if (e.key === "Enter") handlePin();
      });
    }

    // Category filter chips
    const categoryChips = document.querySelectorAll(".category-chip");
    categoryChips.forEach(chip => {
      chip.addEventListener("click", () => {
        this.sound.playClick();
        categoryChips.forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        this.activeCategory = chip.dataset.category;
        this.renderQuizGrid();
      });
    });

    // Search bar
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
      searchInput.addEventListener("input", e => {
        this.searchQuery = e.target.value.toLowerCase();
        this.renderQuizGrid();
      });
    }

    // JSON Export / Import buttons
    const importModalBtn = document.getElementById("importModalBtn");
    if (importModalBtn) {
      importModalBtn.addEventListener("click", () => this.openImportModal());
    }

    // Modal Close buttons
    document.querySelectorAll(".modal-close-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("active"));
      });
    });

    // Anti-Cheat Proctoring Listeners
    this.bindAntiCheatListeners();
  }

  bindAntiCheatListeners() {
    // 1. Tab switch or minimize window
    document.addEventListener("visibilitychange", () => {
      if (document.hidden && this.isGameInProgress) {
        this.triggerDisqualification("Switched tabs or minimized browser window");
      }
    });

    // 2. Window focus loss (clicking outside to another application)
    window.addEventListener("blur", () => {
      if (this.isGameInProgress) {
        this.triggerDisqualification("Navigated away from the quiz window (lost window focus)");
      }
    });

    // 3. Tab close, refresh, or back button
    window.addEventListener("beforeunload", (e) => {
      if (this.isGameInProgress && this.gameQuiz) {
        this.recordDisqualification(this.gameQuiz.id, "Closed or refreshed the webpage while quiz was active");
        e.preventDefault();
        e.returnValue = "Exiting or refreshing this page will disqualify you from the quiz!";
        return e.returnValue;
      }
    });

    // 4. Pagehide (mobile browser backgrounding / navigating away)
    window.addEventListener("pagehide", () => {
      if (this.isGameInProgress && this.gameQuiz) {
        this.recordDisqualification(this.gameQuiz.id, "Navigated away or closed webpage");
      }
    });
  }

  // ===================================================================
  // 6. EXPLORE & QUIZ HUB
  // ===================================================================
  renderQuizGrid() {
    const grid = document.getElementById("quizGrid");
    if (!grid) return;

    let filtered = this.quizzes.filter(q => {
      const matchCat = this.activeCategory === "All" || q.category === this.activeCategory;
      const matchSearch = !this.searchQuery || 
        q.title.toLowerCase().includes(this.searchQuery) ||
        q.description.toLowerCase().includes(this.searchQuery) ||
        q.category.toLowerCase().includes(this.searchQuery) ||
        q.code.toLowerCase().includes(this.searchQuery);
      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <div class="empty-icon">🔍</div>
          <h3>No questionnaires match your search</h3>
          <p style="color: var(--text-muted); margin: 0.5rem 0 1.25rem;">Try adjusting filters or create a brand new questionnaire.</p>
          <button class="btn btn-primary" onclick="window.quizApp.resetBuilder(); window.quizApp.switchView('builder');">
            + Create Questionnaire
          </button>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(quiz => {
      const questionCount = quiz.questions ? quiz.questions.length : 0;
      const isDisq = this.isDisqualified(quiz.id);
      return `
        <div class="quiz-card ${isDisq ? 'is-disqualified-card' : ''}" data-id="${quiz.id}">
          <div>
            <div class="quiz-card-top">
              <span class="quiz-category-tag">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                ${quiz.category || 'General'}
              </span>
              ${isDisq 
                ? `<span class="quiz-code-badge badge-disqualified">🚫 DISQUALIFIED</span>`
                : `<span class="quiz-code-badge">PIN: ${quiz.code}</span>`}
            </div>
            <h3 class="quiz-card-title">${this.escapeHTML(quiz.title)}</h3>
            <p class="quiz-card-desc">${this.escapeHTML(quiz.description || 'Interactive QnA questionnaire ready to play and answer.')}</p>
          </div>

          <div>
            <div class="quiz-card-meta">
              <div class="meta-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                <span>${questionCount} Questions</span>
              </div>
              <div class="meta-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                <span>${quiz.timeLimit || 20}s / Q</span>
              </div>
              <div class="meta-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                <span>${quiz.playsCount || 0} plays</span>
              </div>
            </div>

            <div class="quiz-card-actions">
              ${isDisq ? `
                <button class="btn btn-disqualified btn-sm" onclick="window.quizApp.openLobby('${quiz.id}')">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>
                  Locked (Disqualified)
                </button>
              ` : `
                <button class="btn btn-primary btn-sm" onclick="window.quizApp.openLobby('${quiz.id}')">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                  Play Now
                </button>
              `}

              <div class="quiz-card-tools">
                ${isDisq ? `
                  <button class="mini-icon-btn" title="Reset Disqualification (Dev/Test)" onclick="window.quizApp.resetDisqualification('${quiz.id}')">
                    ↺
                  </button>
                ` : ''}
                <button class="mini-icon-btn" title="Share Quiz Link" onclick="window.quizApp.shareQuiz('${quiz.id}')">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                </button>
                <button class="mini-icon-btn" title="Export as JSON" onclick="window.quizApp.exportQuizJSON('${quiz.id}')">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                </button>
                <button class="mini-icon-btn" title="Edit Questionnaire" onclick="window.quizApp.editQuiz('${quiz.id}')">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                </button>
                <button class="mini-icon-btn delete-btn" title="Delete Questionnaire" onclick="window.quizApp.deleteQuiz('${quiz.id}')">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  shareQuiz(quizId) {
    this.sound.playClick();
    const quiz = this.quizzes.find(q => q.id === quizId);
    if (!quiz) return;

    const shareUrl = window.location.origin + window.location.pathname + `?pin=${quiz.code}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl).then(() => {
        this.showToast(`Link & PIN (${quiz.code}) copied to clipboard! 📋`, "success");
      }).catch(() => {
        this.promptShareFallback(shareUrl, quiz.code);
      });
    } else {
      this.promptShareFallback(shareUrl, quiz.code);
    }
  }

  promptShareFallback(url, code) {
    prompt(`Share this quiz link (PIN: ${code}):`, url);
  }

  exportQuizJSON(quizId) {
    this.sound.playClick();
    const quiz = this.quizzes.find(q => q.id === quizId);
    if (!quiz) return;

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(quiz, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `${quiz.title.replace(/\s+/g, "_")}_quiz.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    this.showToast("Questionnaire exported as JSON file! 📥", "success");
  }

  deleteQuiz(quizId) {
    const quiz = this.quizzes.find(q => q.id === quizId);
    if (!quiz) return;

    if (confirm(`Are you sure you want to delete "${quiz.title}"?`)) {
      this.sound.playWrong();
      const updated = this.quizzes.filter(q => q.id !== quizId);
      this.saveQuizzes(updated);
      this.showToast("Questionnaire deleted", "success");
      this.renderQuizGrid();
    }
  }

  editQuiz(quizId) {
    this.sound.playClick();
    const quiz = this.quizzes.find(q => q.id === quizId);
    if (!quiz) return;

    this.builderDraft = JSON.parse(JSON.stringify(quiz));
    this.builderActiveQIndex = 0;
    this.switchView("builder");
  }

  // ===================================================================
  // 7. QUESTIONNAIRE BUILDER ENGINE
  // ===================================================================
  resetBuilder() {
    this.builderDraft = this.getEmptyQuizDraft();
    this.builderActiveQIndex = 0;
  }

  renderBuilder() {
    const formContainer = document.getElementById("builderQuestionEditor");
    const sidebarList = document.getElementById("builderSidebarQuestions");
    const countBadge = document.getElementById("builderQuestionCountBadge");

    if (!formContainer || !sidebarList) return;

    // Set metadata fields
    const titleInput = document.getElementById("builderQuizTitle");
    const descInput = document.getElementById("builderQuizDesc");
    const categorySelect = document.getElementById("builderQuizCategory");
    const timerSelect = document.getElementById("builderQuizTimer");
    const pinBadge = document.getElementById("builderQuizPinBadge");

    if (titleInput) titleInput.value = this.builderDraft.title || "";
    if (descInput) descInput.value = this.builderDraft.description || "";
    if (categorySelect) categorySelect.value = this.builderDraft.category || "General Trivia";
    if (timerSelect) timerSelect.value = this.builderDraft.timeLimit || 20;
    if (pinBadge) pinBadge.textContent = "PIN: " + (this.builderDraft.code || "AUTO");

    if (countBadge) {
      countBadge.textContent = `${this.builderDraft.questions.length} Questions`;
    }

    // Render Sidebar List
    sidebarList.innerHTML = this.builderDraft.questions.map((q, idx) => {
      const title = q.text ? q.text : `Question ${idx + 1} (Empty)`;
      const isActive = idx === this.builderActiveQIndex;
      return `
        <div class="sidebar-q-item ${isActive ? 'active' : ''}" onclick="window.quizApp.selectBuilderQuestion(${idx})">
          <div class="sidebar-q-title">${idx + 1}. ${this.escapeHTML(title)}</div>
          <div style="display: flex; gap: 4px;">
            ${this.builderDraft.questions.length > 1 ? `
              <button class="mini-icon-btn" style="width:24px;height:24px;" title="Delete" onclick="event.stopPropagation(); window.quizApp.deleteBuilderQuestion(${idx})">×</button>
            ` : ''}
          </div>
        </div>
      `;
    }).join("");

    // Render Active Question Editor
    const currQ = this.builderDraft.questions[this.builderActiveQIndex] || this.builderDraft.questions[0];
    if (!currQ) return;

    formContainer.innerHTML = `
      <div class="question-item-card">
        <div class="question-card-header">
          <span class="q-badge">Question #${this.builderActiveQIndex + 1}</span>
          <div style="display:flex; gap:0.5rem;">
            <button class="btn btn-glass btn-sm" onclick="window.quizApp.duplicateBuilderQuestion(${this.builderActiveQIndex})">
              Duplicate
            </button>
            ${this.builderDraft.questions.length > 1 ? `
              <button class="btn btn-danger btn-sm" onclick="window.quizApp.deleteBuilderQuestion(${this.builderActiveQIndex})">
                Delete
              </button>
            ` : ''}
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Question Text / Prompt *</label>
          <input type="text" class="form-input" id="currentQText" placeholder="e.g. Which country hosted the 2016 Summer Olympics?" value="${this.escapeHTML(currQ.text || '')}">
        </div>

        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Points Value</label>
            <select class="form-select" id="currentQPoints">
              <option value="500" ${currQ.points === 500 ? 'selected' : ''}>500 Points (Easy)</option>
              <option value="1000" ${currQ.points === 1000 || !currQ.points ? 'selected' : ''}>1000 Points (Standard)</option>
              <option value="2000" ${currQ.points === 2000 ? 'selected' : ''}>2000 Points (Double Bonus)</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Explanation / Fun Fact (Shown After Answer)</label>
            <input type="text" class="form-input" id="currentQExplanation" placeholder="e.g. Brazil hosted the Games in Rio de Janeiro." value="${this.escapeHTML(currQ.explanation || '')}">
          </div>
        </div>

        <label class="form-label" style="margin-top: 1rem;">Answer Options (Kahoot Palette - Select the Correct Answer Checkmark) *</label>
        <div class="answers-grid-editor">
          ${currQ.options.map((opt, oIdx) => {
            const shapeClass = `shape-${oIdx + 1}`;
            const wrapClass = `answer-opt-${oIdx + 1}`;
            const glyphs = ["▲", "◆", "●", "◼"];
            return `
              <div class="answer-option-input-wrap ${wrapClass}">
                <div class="opt-shape ${shapeClass}">${glyphs[oIdx]}</div>
                <input type="text" class="answer-opt-input opt-input-${oIdx}" placeholder="Option ${oIdx + 1} text..." value="${this.escapeHTML(opt.text || '')}">
                <label class="correct-checkbox-wrap" title="Mark as correct answer">
                  <input type="radio" name="correctOptionRadio" class="correct-check" ${opt.isCorrect ? 'checked' : ''} onchange="window.quizApp.setCorrectOption(${oIdx})">
                </label>
              </div>
            `;
          }).join("")}
        </div>
      </div>
    `;

    // Bind real-time input listeners to update builder draft
    const textInput = document.getElementById("currentQText");
    if (textInput) {
      textInput.addEventListener("input", e => {
        currQ.text = e.target.value;
        const activeSide = sidebarList.querySelector(`.sidebar-q-item:nth-child(${this.builderActiveQIndex + 1}) .sidebar-q-title`);
        if (activeSide) activeSide.textContent = `${this.builderActiveQIndex + 1}. ${currQ.text || '(Empty)'}`;
      });
    }

    const pointsSelect = document.getElementById("currentQPoints");
    if (pointsSelect) {
      pointsSelect.addEventListener("change", e => {
        currQ.points = parseInt(e.target.value, 10);
      });
    }

    const expInput = document.getElementById("currentQExplanation");
    if (expInput) {
      expInput.addEventListener("input", e => {
        currQ.explanation = e.target.value;
      });
    }

    currQ.options.forEach((opt, oIdx) => {
      const optEl = formContainer.querySelector(`.opt-input-${oIdx}`);
      if (optEl) {
        optEl.addEventListener("input", e => {
          opt.text = e.target.value;
        });
      }
    });

    // Metadata changes
    if (titleInput) titleInput.oninput = e => { this.builderDraft.title = e.target.value; };
    if (descInput) descInput.oninput = e => { this.builderDraft.description = e.target.value; };
    if (categorySelect) categorySelect.onchange = e => { this.builderDraft.category = e.target.value; };
    if (timerSelect) timerSelect.onchange = e => { this.builderDraft.timeLimit = parseInt(e.target.value, 10); };
  }

  selectBuilderQuestion(index) {
    this.sound.playClick();
    this.builderActiveQIndex = index;
    this.renderBuilder();
  }

  addNewQuestion() {
    this.sound.playClick();
    this.builderDraft.questions.push({
      id: "q-" + Date.now() + "-" + (this.builderDraft.questions.length + 1),
      text: "",
      type: "multiple",
      points: 1000,
      explanation: "",
      options: [
        { text: "", isCorrect: true },
        { text: "", isCorrect: false },
        { text: "", isCorrect: false },
        { text: "", isCorrect: false }
      ]
    });
    this.builderActiveQIndex = this.builderDraft.questions.length - 1;
    this.renderBuilder();
  }

  duplicateBuilderQuestion(index) {
    this.sound.playClick();
    const copy = JSON.parse(JSON.stringify(this.builderDraft.questions[index]));
    copy.id = "q-" + Date.now() + "-copy";
    this.builderDraft.questions.splice(index + 1, 0, copy);
    this.builderActiveQIndex = index + 1;
    this.renderBuilder();
  }

  deleteBuilderQuestion(index) {
    if (this.builderDraft.questions.length <= 1) return;
    this.sound.playWrong();
    this.builderDraft.questions.splice(index, 1);
    if (this.builderActiveQIndex >= this.builderDraft.questions.length) {
      this.builderActiveQIndex = this.builderDraft.questions.length - 1;
    }
    this.renderBuilder();
  }

  setCorrectOption(optionIndex) {
    this.sound.playClick();
    const currQ = this.builderDraft.questions[this.builderActiveQIndex];
    if (!currQ) return;
    currQ.options.forEach((opt, idx) => {
      opt.isCorrect = idx === optionIndex;
    });
  }

  publishQuestionnaire() {
    const draft = this.builderDraft;

    if (!draft.title.trim()) {
      this.sound.playWrong();
      this.showToast("Please enter a Questionnaire Title", "error");
      document.getElementById("builderQuizTitle")?.focus();
      return;
    }

    if (!draft.questions || draft.questions.length === 0) {
      this.sound.playWrong();
      this.showToast("Please add at least 1 question", "error");
      return;
    }

    // Validate each question
    for (let i = 0; i < draft.questions.length; i++) {
      const q = draft.questions[i];
      if (!q.text.trim()) {
        this.sound.playWrong();
        this.selectBuilderQuestion(i);
        this.showToast(`Question #${i + 1} is missing its question text!`, "error");
        return;
      }

      const filledOpts = q.options.filter(o => o.text.trim().length > 0);
      if (filledOpts.length < 2) {
        this.sound.playWrong();
        this.selectBuilderQuestion(i);
        this.showToast(`Question #${i + 1} must have at least 2 filled answer options!`, "error");
        return;
      }

      const hasCorrect = q.options.some(o => o.isCorrect && o.text.trim().length > 0);
      if (!hasCorrect) {
        this.sound.playWrong();
        this.selectBuilderQuestion(i);
        this.showToast(`Please check a correct answer for Question #${i + 1}!`, "error");
        return;
      }
    }

    // Save to list
    const existingIndex = this.quizzes.findIndex(q => q.id === draft.id);
    if (existingIndex >= 0) {
      this.quizzes[existingIndex] = draft;
    } else {
      this.quizzes.unshift(draft);
    }

    this.saveQuizzes(this.quizzes);
    this.sound.playFanfare();
    this.confetti.fire(70);
    this.showToast(`🎉 Questionnaire "${draft.title}" published! PIN: ${draft.code}`, "success");

    this.resetBuilder();
    this.switchView("explore");
  }

  // ===================================================================
  // 8. GAMEPLAY & LOBBY ENGINE (KAHOOT / QUIZZLY VIBE)
  // ===================================================================
  openLobby(quizId) {
    this.sound.playClick();
    const quiz = this.quizzes.find(q => q.id === quizId);
    if (!quiz) return;

    if (this.isDisqualified(quizId)) {
      this.sound.playWrong();
      this.gameQuiz = quiz;
      this.renderDisqualifiedScreen(quizId, this.disqualifiedQuizzes[quizId]?.reason);
      return;
    }

    this.gameQuiz = quiz;
    this.switchView("play");
    this.renderLobby();
  }

  renderLobby() {
    const playContainer = document.getElementById("viewPlay");
    if (!playContainer || !this.gameQuiz) return;

    const avatars = ["🦊", "🚀", "⚡", "🦁", "👑", "🎯", "🌟", "🦄", "🔥", "🐱"];

    playContainer.innerHTML = `
      <div class="play-wrapper">
        <div class="lobby-card">
          <div style="margin-bottom: 1.5rem;">
            <span class="quiz-category-tag" style="margin-bottom: 0.5rem;">
              ${this.gameQuiz.category}
            </span>
            <h1 style="font-family: var(--font-display); font-size: 2.3rem; margin: 0.5rem 0 0.75rem; color:#fff;">
              ${this.escapeHTML(this.gameQuiz.title)}
            </h1>
            <p style="color: var(--text-muted); max-width: 600px; margin: 0 auto;">
              ${this.escapeHTML(this.gameQuiz.description || 'Answer fast to earn maximum points and keep your streak going!')}
            </p>
          </div>

          <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--card-border); border-radius: var(--radius-lg); padding: 1.5rem; max-width: 500px; margin: 0 auto 2rem;">
            <label class="form-label">Choose Your Avatar</label>
            <div class="lobby-avatar-picker">
              ${avatars.map(av => `
                <div class="avatar-opt ${this.player.avatar === av ? 'selected' : ''}" onclick="window.quizApp.selectAvatar('${av}')">
                  ${av}
                </div>
              `).join("")}
            </div>

            <label class="form-label">Your Nickname</label>
            <input type="text" class="form-input lobby-name-input" id="lobbyPlayerName" value="${this.escapeHTML(this.player.name)}" placeholder="Enter your name...">
          </div>

          <div class="anti-cheat-notice">
            <div class="anti-cheat-icon">🛡️</div>
            <div class="anti-cheat-text">
              <strong>Anti-Cheat Active:</strong> Once the quiz begins, switching to another tab, minimizing, or closing the window will <strong>immediately disqualify you</strong> and permanently lock you out of this quiz!
            </div>
          </div>

          <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
            <button class="btn btn-primary" style="padding: 1rem 2.5rem; font-size: 1.15rem;" onclick="window.quizApp.startCountdown()">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              Start Quiz!
            </button>
            <button class="btn btn-glass" onclick="window.quizApp.switchView('explore')">
              Cancel
            </button>
          </div>
        </div>
      </div>
    `;

    const nameInput = document.getElementById("lobbyPlayerName");
    if (nameInput) {
      nameInput.addEventListener("input", e => {
        this.player.name = e.target.value.trim() || "Player";
        this.safeSetStorage("quizverse_last_name", this.player.name);
      });
    }
  }

  renderDisqualifiedScreen(quizId, reason) {
    this.switchView("play");
    const playContainer = document.getElementById("viewPlay");
    if (!playContainer) return;

    const quiz = this.quizzes.find(q => q.id === quizId) || this.gameQuiz || { title: "Questionnaire", code: "PIN" };
    const record = (this.disqualifiedQuizzes && this.disqualifiedQuizzes[quizId]) || {};
    const recordedReason = reason || record.reason || "Switched tabs or exited the webpage during active quiz";
    const dateFormatted = record.timestamp ? new Date(record.timestamp).toLocaleTimeString() : new Date().toLocaleTimeString();

    playContainer.innerHTML = `
      <div class="play-wrapper">
        <div class="disqualified-card">
          <div class="disqualified-glow"></div>
          <div class="disqualified-icon">🚫</div>
          <h1 class="disqualified-title">YOU ARE DISQUALIFIED</h1>
          <p class="disqualified-subtitle">Academic Integrity & Proctoring Violation</p>

          <div class="disqualified-details-box">
            <div class="disqualified-row">
              <span class="disqualified-row-label">Questionnaire</span>
              <span class="disqualified-row-val">${this.escapeHTML(quiz.title)} (PIN: ${quiz.code})</span>
            </div>
            <div class="disqualified-row">
              <span class="disqualified-row-label">Violation Detected</span>
              <span class="disqualified-row-val danger">${this.escapeHTML(recordedReason)}</span>
            </div>
            <div class="disqualified-row">
              <span class="disqualified-row-label">Penalty Status</span>
              <span class="disqualified-row-val danger">Permanent Lockout</span>
            </div>
            <div class="disqualified-row">
              <span class="disqualified-row-label">Time of Infraction</span>
              <span class="disqualified-row-val">${dateFormatted}</span>
            </div>
          </div>

          <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 2rem; color: #fca5a5; font-size: 0.95rem; line-height: 1.5;">
            ⚠️ <strong>You cannot re-enter this questionnaire.</strong> You were removed because navigating away, switching tabs, or closing the window is strictly prohibited during active gameplay.
          </div>

          <div class="disqualified-actions">
            <button class="btn btn-primary" onclick="window.quizApp.switchView('explore')">
              Back to Quiz Hub
            </button>
            <button class="btn btn-glass btn-sm" onclick="window.quizApp.resetDisqualification('${quizId}')" title="Reset this penalty for testing">
              ↺ Reset Penalty (Dev / Testing)
            </button>
          </div>
        </div>
      </div>
    `;
  }

  selectAvatar(avatar) {
    this.sound.playClick();
    this.player.avatar = avatar;
    this.safeSetStorage("quizverse_last_avatar", avatar);
    document.querySelectorAll(".avatar-opt").forEach(el => {
      el.classList.toggle("selected", el.textContent.trim() === avatar);
    });
  }

  startCountdown() {
    const nameInput = document.getElementById("lobbyPlayerName");
    if (nameInput) {
      this.player.name = nameInput.value.trim() || "Player";
      this.safeSetStorage("quizverse_last_name", this.player.name);
    }

    // Proctoring: Set active quiz in progress
    this.isGameInProgress = true;
    this.safeSetStorage("quizverse_active_game_id", this.gameQuiz.id);

    // Reset game state
    this.gameState = {
      qIndex: 0,
      score: 0,
      streak: 0,
      correctCount: 0,
      history: [],
      timer: null,
      timeLeft: this.gameQuiz.timeLimit || 20,
      totalTime: this.gameQuiz.timeLimit || 20,
      answered: false
    };

    // Increment play count
    this.gameQuiz.playsCount = (this.gameQuiz.playsCount || 0) + 1;
    this.saveQuizzes(this.quizzes);

    // Show 3-2-1 Overlay
    const overlay = document.createElement("div");
    overlay.className = "game-countdown-overlay";
    overlay.innerHTML = `
      <div style="font-size: 1.5rem; font-weight: 700; color: var(--text-muted); margin-bottom: 1rem;">GET READY!</div>
      <div class="countdown-number" id="countdownDigits">3</div>
    `;
    document.body.appendChild(overlay);

    let count = 3;
    this.sound.playCountdownTick();

    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }

    this.countdownInterval = setInterval(() => {
      // Abort immediately if player switched tabs or was disqualified during countdown
      if (!this.isGameInProgress || !this.gameQuiz || this.isDisqualified(this.gameQuiz.id)) {
        clearInterval(this.countdownInterval);
        this.countdownInterval = null;
        document.querySelectorAll(".game-countdown-overlay").forEach(el => el.remove());
        if (this.gameQuiz && this.isDisqualified(this.gameQuiz.id)) {
          this.renderDisqualifiedScreen(this.gameQuiz.id, this.disqualifiedQuizzes[this.gameQuiz.id]?.reason);
        }
        return;
      }

      count--;
      const digits = document.getElementById("countdownDigits");
      if (count > 0) {
        if (digits) digits.textContent = count;
        this.sound.playCountdownTick();
      } else if (count === 0) {
        if (digits) digits.textContent = "GO!";
        this.sound.playCountdownGo();
      } else {
        clearInterval(this.countdownInterval);
        this.countdownInterval = null;
        document.querySelectorAll(".game-countdown-overlay").forEach(el => el.remove());
        if (this.isGameInProgress && !this.isDisqualified(this.gameQuiz.id)) {
          this.renderQuestionRound();
        } else if (this.isDisqualified(this.gameQuiz.id)) {
          this.renderDisqualifiedScreen(this.gameQuiz.id, this.disqualifiedQuizzes[this.gameQuiz.id]?.reason);
        }
      }
    }, 900);
  }

  renderQuestionRound() {
    const playContainer = document.getElementById("viewPlay");
    if (!playContainer || !this.gameQuiz) return;

    // Strict guard: Never render question round if disqualified or not in progress
    if (!this.isGameInProgress || this.isDisqualified(this.gameQuiz.id)) {
      this.renderDisqualifiedScreen(this.gameQuiz.id, this.disqualifiedQuizzes[this.gameQuiz.id]?.reason);
      return;
    }

    const q = this.gameQuiz.questions[this.gameState.qIndex];
    if (!q) {
      this.endGame();
      return;
    }

    this.gameState.answered = false;
    this.gameState.totalTime = this.gameQuiz.timeLimit || 20;
    this.gameState.timeLeft = this.gameState.totalTime;

    const glyphs = ["▲", "◆", "●", "◼"];

    playContainer.innerHTML = `
      <div class="play-wrapper">
        <div class="arena-header">
          <div class="arena-progress">
            <span class="q-counter-badge">Question ${this.gameState.qIndex + 1} of ${this.gameQuiz.questions.length}</span>
            ${this.gameState.streak > 1 ? `
              <span class="streak-pill">🔥 ${this.gameState.streak}x Streak</span>
            ` : ''}
          </div>
          <div class="arena-score-badge">
            <span>${this.player.avatar}</span>
            <span>${this.gameState.score.toLocaleString()} pts</span>
          </div>
        </div>

        <div class="arena-timer-wrap">
          <div class="arena-timer-number" id="arenaTimerNumber">${this.gameState.timeLeft}s</div>
          <div class="arena-timer-bar" id="arenaTimerBar" style="width: 100%;"></div>
        </div>

        <div class="arena-question-card">
          <h2 class="arena-question-text">${this.escapeHTML(q.text)}</h2>
        </div>

        <div class="arena-options-grid" id="arenaOptionsGrid">
          ${q.options.map((opt, idx) => {
            return `
              <button class="game-opt-btn opt-${idx + 1}" onclick="window.quizApp.submitAnswer(${idx})">
                <span class="opt-glyph">${glyphs[idx]}</span>
                <span class="opt-text">${this.escapeHTML(opt.text)}</span>
              </button>
            `;
          }).join("")}
        </div>

        <div id="arenaFeedbackCardWrap"></div>
      </div>
    `;

    this.startRoundTimer();
  }

  startRoundTimer() {
    clearInterval(this.gameState.timer);
    const timerBar = document.getElementById("arenaTimerBar");
    const timerNumber = document.getElementById("arenaTimerNumber");

    const startTime = Date.now();
    const duration = this.gameState.totalTime * 1000;

    this.gameState.timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, duration - elapsed);
      const remainingSec = Math.ceil(remaining / 1000);
      const pct = (remaining / duration) * 100;

      this.gameState.timeLeft = remaining / 1000;

      if (timerBar) timerBar.style.width = `${pct}%`;
      if (timerNumber) timerNumber.textContent = `${remainingSec}s`;

      if (remaining <= 0) {
        clearInterval(this.gameState.timer);
        if (!this.gameState.answered) {
          this.submitAnswer(-1); // Timeout
        }
      }
    }, 100);
  }

  submitAnswer(selectedOptIndex) {
    if (this.gameState.answered) return;
    this.gameState.answered = true;
    clearInterval(this.gameState.timer);

    const q = this.gameQuiz.questions[this.gameState.qIndex];
    const isTimeout = selectedOptIndex === -1;
    const selectedOpt = !isTimeout ? q.options[selectedOptIndex] : null;
    const isCorrect = selectedOpt ? !!selectedOpt.isCorrect : false;

    // Correct option index
    const correctOptIndex = q.options.findIndex(o => o.isCorrect);

    // Calculate score (Kahoot formula: up to points based on speed)
    let pointsEarned = 0;
    if (isCorrect) {
      const timeRatio = Math.max(0, this.gameState.timeLeft / this.gameState.totalTime);
      const basePoints = q.points || 1000;
      const speedBonus = Math.round(basePoints * (0.5 + 0.5 * timeRatio));
      const streakMultiplier = 1 + Math.min(0.5, (this.gameState.streak * 0.1));
      pointsEarned = Math.round(speedBonus * streakMultiplier);

      this.gameState.score += pointsEarned;
      this.gameState.streak++;
      this.gameState.correctCount++;
      this.sound.playCorrect();
    } else {
      this.gameState.streak = 0;
      this.sound.playWrong();
    }

    // Save round history
    this.gameState.history.push({
      questionText: q.text,
      userAnswer: selectedOpt ? selectedOpt.text : "(Time Expired)",
      correctAnswer: q.options[correctOptIndex]?.text || "",
      isCorrect: isCorrect,
      explanation: q.explanation || "",
      pointsEarned: pointsEarned
    });

    // Update UI option buttons styling
    const buttons = document.querySelectorAll(".game-opt-btn");
    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === correctOptIndex) {
        btn.classList.add("is-correct");
      } else if (idx === selectedOptIndex && !isCorrect) {
        btn.classList.add("user-wrong-choice");
      } else {
        btn.classList.add("is-wrong");
      }
    });

    // Feedback bottom banner
    const feedbackWrap = document.getElementById("arenaFeedbackCardWrap");
    if (feedbackWrap) {
      const isLastQuestion = this.gameState.qIndex >= this.gameQuiz.questions.length - 1;
      feedbackWrap.innerHTML = `
        <div class="arena-feedback-card ${isCorrect ? 'correct' : 'wrong'}">
          <div>
            <div class="feedback-status-title">
              ${isCorrect 
                ? `<span>🎉 Correct! +${pointsEarned.toLocaleString()} pts</span>` 
                : (isTimeout ? `<span>⏰ Time's Up!</span>` : `<span>❌ Incorrect!</span>`)}
            </div>
            ${q.explanation ? `
              <div class="feedback-explanation">💡 ${this.escapeHTML(q.explanation)}</div>
            ` : ''}
          </div>
          <button class="btn btn-primary" onclick="window.quizApp.nextQuestion()">
            ${isLastQuestion ? 'View Results 🏆' : 'Next Question ➔'}
          </button>
        </div>
      `;
    }
  }

  nextQuestion() {
    this.sound.playClick();
    this.gameState.qIndex++;
    if (this.gameState.qIndex < this.gameQuiz.questions.length) {
      this.renderQuestionRound();
    } else {
      this.endGame();
    }
  }

  // ===================================================================
  // 9. GAME OVER & LEADERBOARD RESULTS
  // ===================================================================
  endGame() {
    this.isGameInProgress = false;
    this.safeRemoveStorage("quizverse_active_game_id");

    this.sound.playFanfare();
    this.confetti.fire(150);

    const totalQuestions = this.gameQuiz.questions.length;
    const accuracy = Math.round((this.gameState.correctCount / totalQuestions) * 100);

    // Save to Leaderboard
    if (!this.leaderboard[this.gameQuiz.id]) {
      this.leaderboard[this.gameQuiz.id] = [];
    }

    this.leaderboard[this.gameQuiz.id].push({
      player: this.player.name,
      avatar: this.player.avatar,
      score: this.gameState.score,
      accuracy: accuracy,
      date: new Date().toLocaleDateString()
    });

    // Sort descending
    this.leaderboard[this.gameQuiz.id].sort((a, b) => b.score - a.score);
    // Keep top 10
    this.leaderboard[this.gameQuiz.id] = this.leaderboard[this.gameQuiz.id].slice(0, 10);
    this.saveLeaderboard(this.leaderboard);

    this.switchView("results");
    this.renderResults();
  }

  renderResults() {
    const resultsContainer = document.getElementById("viewResults");
    if (!resultsContainer || !this.gameQuiz) return;

    const totalQuestions = this.gameQuiz.questions.length;
    const accuracy = Math.round((this.gameState.correctCount / totalQuestions) * 100);
    const quizLeaders = this.leaderboard[this.gameQuiz.id] || [];

    resultsContainer.innerHTML = `
      <div class="results-wrapper">
        <div class="podium-card">
          <div class="celebration-badge">🏆</div>
          <h1 class="results-title">Quiz Completed!</h1>
          <p style="color: var(--text-muted); margin-bottom: 0.5rem;">
            Awesome job, <strong>${this.player.avatar} ${this.escapeHTML(this.player.name)}</strong>!
          </p>
          <div class="results-score-big">${this.gameState.score.toLocaleString()} PTS</div>

          <div class="stats-grid">
            <div class="stat-box">
              <div class="stat-label">Accuracy</div>
              <div class="stat-value" style="color: #10b981;">${accuracy}%</div>
            </div>
            <div class="stat-box">
              <div class="stat-label">Correct Answers</div>
              <div class="stat-value" style="color: #38bdf8;">${this.gameState.correctCount} / ${totalQuestions}</div>
            </div>
            <div class="stat-box">
              <div class="stat-label">Max Streak</div>
              <div class="stat-value" style="color: #f59e0b;">🔥 ${this.gameState.streak || this.gameState.correctCount}</div>
            </div>
          </div>

          <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
            <button class="btn btn-primary" onclick="window.quizApp.openLobby('${this.gameQuiz.id}')">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
              Play Again
            </button>
            <button class="btn btn-accent" onclick="window.quizApp.shareScore()">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
              Share Score
            </button>
            <button class="btn btn-glass" onclick="window.quizApp.switchView('explore')">
              Back to Hub
            </button>
          </div>
        </div>

        <!-- Leaderboard -->
        <div class="leaderboard-card">
          <div class="card-heading">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
            High Scores Leaderboard
          </div>
          <div class="leaderboard-list">
            ${quizLeaders.map((lead, idx) => {
              const medal = idx === 0 ? '🥇' : (idx === 1 ? '🥈' : (idx === 2 ? '🥉' : `#${idx + 1}`));
              return `
                <div class="leaderboard-row ${idx === 0 ? 'rank-1' : ''}">
                  <div style="display: flex; align-items: center; gap: 0.75rem;">
                    <span class="leaderboard-rank">${medal}</span>
                    <span style="font-size: 1.3rem;">${lead.avatar || '👤'}</span>
                    <span style="font-weight: 700; color: #fff;">${this.escapeHTML(lead.player)}</span>
                  </div>
                  <div style="display: flex; align-items: center; gap: 1.5rem;">
                    <span style="font-size: 0.85rem; color: var(--text-muted);">${lead.accuracy}% Acc</span>
                    <span style="font-family: var(--font-display); font-weight: 800; font-size: 1.15rem; color: #38bdf8;">
                      ${lead.score.toLocaleString()} pts
                    </span>
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        </div>

        <!-- Review Answers Breakdown -->
        <div class="review-card">
          <div class="card-heading">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6b8e23" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            Question Review Breakdown
          </div>
          ${this.gameState.history.map((item, idx) => {
            return `
              <div class="review-item ${item.isCorrect ? 'is-correct' : 'is-wrong'}">
                <div class="review-q-title">${idx + 1}. ${this.escapeHTML(item.questionText)}</div>
                <div class="review-answers-diff">
                  <div>Your Answer: <strong style="color: ${item.isCorrect ? '#10b981' : '#ef4444'};">${this.escapeHTML(item.userAnswer)}</strong></div>
                  ${!item.isCorrect ? `<div>Correct Answer: <strong style="color: #10b981;">${this.escapeHTML(item.correctAnswer)}</strong></div>` : ''}
                  ${item.explanation ? `<div style="margin-top:0.3rem; color: var(--text-dim);">💡 ${this.escapeHTML(item.explanation)}</div>` : ''}
                </div>
              </div>
            `;
          }).join("")}
        </div>
      </div>
    `;
  }

  shareScore() {
    this.sound.playClick();
    const text = `🎯 I scored ${this.gameState.score.toLocaleString()} points on "${this.gameQuiz.title}" on Quizverse! Play with PIN: ${this.gameQuiz.code}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        this.showToast("Score copied to clipboard! 📋", "success");
      });
    } else {
      prompt("Copy your score:", text);
    }
  }

  // ===================================================================
  // 10. IMPORT MODAL
  // ===================================================================
  openImportModal() {
    this.sound.playClick();
    const modal = document.getElementById("importModal");
    if (modal) modal.classList.add("active");
  }

  importJSONPayload() {
    const textarea = document.getElementById("importJsonInput");
    if (!textarea) return;

    const raw = textarea.value.trim();
    if (!raw) {
      this.showToast("Please paste JSON text or select a file", "error");
      return;
    }

    try {
      const parsed = JSON.parse(raw);
      if (!parsed.title || !parsed.questions || !Array.isArray(parsed.questions)) {
        throw new Error("Invalid format: Must have a title and questions array.");
      }

      parsed.id = "quiz-" + Date.now();
      parsed.code = "QZ" + Math.floor(1000 + Math.random() * 9000);
      parsed.createdAt = new Date().toISOString().split("T")[0];

      this.quizzes.unshift(parsed);
      this.saveQuizzes(this.quizzes);

      document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("active"));
      textarea.value = "";

      this.sound.playFanfare();
      this.confetti.fire(70);
      this.showToast(`Imported questionnaire: "${parsed.title}"! 🎉`, "success");
      this.renderQuizGrid();
    } catch (err) {
      this.sound.playWrong();
      this.showToast("Error parsing JSON: " + err.message, "error");
    }
  }

  handleFileImport(fileInput) {
    const file = fileInput.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = e => {
      const textarea = document.getElementById("importJsonInput");
      if (textarea) textarea.value = e.target.result;
    };
    reader.readAsText(file);
  }

  // ===================================================================
  // 11. URL ROUTING & PIN DEEP LINK
  // ===================================================================
  checkUrlParams() {
    const params = new URLSearchParams(window.location.search);
    const pin = params.get("pin") || params.get("code");
    if (pin) {
      const found = this.quizzes.find(q => q.code.toUpperCase() === pin.toUpperCase());
      if (found) {
        setTimeout(() => this.openLobby(found.id), 200);
      }
    }
  }

  // ===================================================================
  // 12. UTILITY & RENDER DISPATCHER
  // ===================================================================
  render() {
    if (this.currentView === "explore") {
      this.renderQuizGrid();
    } else if (this.currentView === "builder") {
      this.renderBuilder();
    } else if (this.currentView === "play") {
      if (this.gameQuiz) {
        if (this.isDisqualified(this.gameQuiz.id)) {
          this.renderDisqualifiedScreen(this.gameQuiz.id, this.disqualifiedQuizzes[this.gameQuiz.id]?.reason);
        } else if (this.isGameInProgress) {
          this.renderQuestionRound();
        } else {
          this.renderLobby();
        }
      }
    } else if (this.currentView === "results") {
      if (this.gameQuiz) this.renderResults();
    }
  }

  escapeHTML(str) {
    if (typeof str !== "string") return "";
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}

// Global bootstrap
function initQuizverse() {
  if (!window.quizApp) {
    try {
      window.quizApp = new QuizverseApp();
    } catch (err) {
      console.error("Quizverse initialization error:", err);
    }
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initQuizverse);
} else {
  initQuizverse();
}
