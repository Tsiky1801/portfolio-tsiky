/* ============================================================
   PORTFOLIO — NAMBINITSOA Tsiky Fanantenana
   Fichier : script.js
   ============================================================ */

// ── DONNÉES — MODIFIEZ ICI ────────────────────────────────────

const PROFILE = {
  nom: "NAMBINITSOA Tsiky Fanantenana",
  age: 19,
  email: "tsikynamb@gmail.com",
  tel1: "+261 38 979 11 95",
  tel2: "+261 38 421 31 52",
  facebook: "NAMBINTSOA Tsiky Fanantenana",
  facebookUrl: "https://facebook.com/NAMBINTSOA-Tsiky-Fanantenana",
  github: "Tsiky1801",
  githubUrl: "https://github.com/Tsiky1801",
  ecole: "EMIT — École de Management et d'Innovation Technologique",
  universite: "Université de Fianarantsoa",
  filiere: "Informatique — DA2I",
  niveau: "L1",
  ville: "Fianarantsoa, Madagascar",

  // ── PHOTOS — remplacez les chemins par vos vraies photos ──
  // Exemple : "images/ma-photo.jpg"  (créez un dossier images/)
  photoProfile: "",      // chemin vers votre photo de profil
  photoEcole: "",        // chemin vers une photo de l'EMIT
};

// ── COMPÉTENCES ───────────────────────────────────────────────

const SKILLS = [
  {
    icon: "💻",
    name: "Programmation C",
    desc: "Bases solides en algorithmique, gestion mémoire et programmation structurée.",
    level: 65,
    label: "Intermédiaire",
  },
  {
    icon: "🐍",
    name: "Python",
    desc: "Scripts, automatisation, initiation à la data science et aux algorithmes.",
    level: 60,
    label: "Intermédiaire",
  },
  {
    icon: "🌐",
    name: "HTML & CSS",
    desc: "Création de pages web structurées, responsive design et animations CSS.",
    level: 72,
    label: "Bon niveau",
  },
  {
    icon: "⚡",
    name: "JavaScript",
    desc: "Interactivité web, manipulation du DOM, événements et logique côté client.",
    level: 58,
    label: "En progression",
  },
  {
    icon: "🗄️",
    name: "Base de données SQL",
    desc: "Conception de BDD relationnelles, requêtes SQL, jointures et optimisation.",
    level: 60,
    label: "Intermédiaire",
  },
  {
    icon: "🐧",
    name: "Linux / Bash",
    desc: "Commandes fondamentales, gestion de fichiers et scripts shell basiques.",
    level: 55,
    label: "En progression",
  },
  {
    icon: "🔢",
    name: "Algorithmique",
    desc: "Analyse de problèmes, structures de données, tri et complexité algorithmique.",
    level: 70,
    label: "Bon niveau",
  },
  {
    icon: "📊",
    name: "Excel & Tableurs",
    desc: "Formules avancées, tableaux croisés dynamiques et visualisation de données.",
    level: 76,
    label: "Bon niveau",
  },
  {
    icon: "🔧",
    name: "Git & GitHub",
    desc: "Gestion de versions, commits, branches et collaboration sur des projets.",
    level: 52,
    label: "Débutant avancé",
  },
  {
    icon: "🌐",
    name: "Réseaux informatiques",
    desc: "Protocoles TCP/IP, modèle OSI, adressage IP et architecture réseau de base.",
    level: 55,
    label: "En progression",
  },
];

// ── PROJETS ───────────────────────────────────────────────────

const PROJECTS = [
  {
    icon: "🖩",
    bg: "linear-gradient(135deg, #0d1325, #1a2540)",
    tags: ["Langage C", "Algorithmique"],
    title: "Calculatrice en C",
    desc: "Programme console développé en langage C permettant d'effectuer toutes les opérations arithmétiques de base avec une gestion robuste des erreurs et des divisions par zéro.",
    status: "Terminé",
    lien: "#",
  },
  {
    icon: "🌐",
    bg: "linear-gradient(135deg, #0d1325, #1a2540)",
    tags: ["HTML", "CSS", "JavaScript"],
    title: "Site Web Personnel",
    desc: "Développement de mon premier site web statique avec mise en page responsive, navigation fluide et présentation de mon profil en tant qu'étudiant développeur.",
    status: "Terminé",
    lien: "#",
  },
  {
    icon: "📋",
    bg: "linear-gradient(135deg, #0d1325, #1a2540)",
    tags: ["Python", "SQL", "SQLite"],
    title: "Gestion d'Étudiants",
    desc: "Application de gestion d'une liste d'étudiants avec stockage dans une base de données SQLite, opérations CRUD (ajout, modification, suppression) et interface en ligne de commande.",
    status: "En cours",
    lien: "#",
  },
];

// ═══════════════════════════════════════════════════════════════
// CODE PRINCIPAL — ne modifier que si vous savez ce que vous faites
// ═══════════════════════════════════════════════════════════════

document.addEventListener("DOMContentLoaded", () => {
  renderProfile();
  renderSkills();
  renderProjects();
  renderContact();
  initCursor();
  initNav();
  initObserver();
  initForm();
  initCounters();
});

// ── RENDU PROFIL (photo) ──────────────────────────────────────
//
// COMMENT AJOUTER VOTRE PHOTO DEPUIS GITHUB :
// 1. Allez sur un de vos dépôts GitHub (ex: Tsiky1801/reimagined-enigma)
// 2. Uploadez votre photo (ex: profil.jpg) dans ce dépôt
// 3. Ouvrez le fichier sur GitHub, cliquez "Raw", copiez l'URL
//    Ex: https://raw.githubusercontent.com/Tsiky1801/reimagined-enigma/main/profil.jpg
// 4. Collez cette URL dans PROFILE.photoProfile en haut de ce fichier
//
// EXEMPLE :
// photoProfile: "https://raw.githubusercontent.com/Tsiky1801/reimagined-enigma/main/profil.jpg",
// photoEcole:   "https://raw.githubusercontent.com/Tsiky1801/reimagined-enigma/main/emit.jpg",

function renderProfile() {
  // ── Photo de profil ──
  const imgWrap = document.getElementById("profile-img-wrap");
  if (imgWrap && PROFILE.photoProfile) {
    imgWrap.innerHTML = '<img src="' + PROFILE.photoProfile + '" alt="Photo de ' + PROFILE.nom + '" '
      + 'onerror="this.parentElement.innerHTML=\'<div class=\"profile-placeholder\"><span class=\"ph-icon\">🧑\u200d💻</span><p>Photo introuvable — vérifiez le lien GitHub</p></div>\'" />';
  }

  // ── Photo de l'école ──
  const schoolWrap = document.getElementById("school-img-wrap");
  if (!schoolWrap) return;

  if (PROFILE.photoEcole) {
    schoolWrap.innerHTML = '<img src="' + PROFILE.photoEcole + '" alt="EMIT Fianarantsoa" '
      + 'onerror="this.parentElement.innerHTML=\'<div class=\"school-img-placeholder\"><span>🏫</span><p>Photo EMIT introuvable</p></div>\'" />';
  } else {
    schoolWrap.innerHTML = '<div class="school-img-placeholder"><span>🏫</span><p>EMIT Fianarantsoa</p><small>Ajoutez PROFILE.photoEcole dans script.js</small></div>';
  }
}

// ── RENDU COMPÉTENCES ─────────────────────────────────────────

function renderSkills() {
  const grid = document.getElementById("skills-grid");
  if (!grid) return;

  grid.innerHTML = SKILLS.map((s) => `
    <div class="skill-card reveal">
      <span class="skill-icon">${s.icon}</span>
      <div class="skill-name">${s.name}</div>
      <div class="skill-desc">${s.desc}</div>
      <div class="skill-bar-bg">
        <div class="skill-bar" data-level="${s.level}"></div>
      </div>
      <div class="skill-level">
        <span>${s.label}</span>
        <span>${s.level}%</span>
      </div>
    </div>
  `).join("");
}

// ── RENDU PROJETS ─────────────────────────────────────────────

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  grid.innerHTML = PROJECTS.map((p) => `
    <div class="project-card reveal">
      <div class="project-thumb" style="background:${p.bg}">${p.icon}</div>
      <div class="project-body">
        <div class="project-tags">
          ${p.tags.map((t) => `<span class="project-tag">${t}</span>`).join("")}
        </div>
        <div class="project-title">${p.title}</div>
        <div class="project-desc">${p.desc}</div>
        <div class="project-footer">
          <span class="project-status">● ${p.status}</span>
          <a href="${p.lien}" class="project-link">Voir →</a>
        </div>
      </div>
    </div>
  `).join("");
}

// ── RENDU CONTACT ─────────────────────────────────────────────

function renderContact() {
  const box = document.getElementById("contact-info-items");
  if (!box) return;

  const items = [
    { icon: "✉️", label: "Email", val: PROFILE.email, href: `mailto:${PROFILE.email}` },
    { icon: "📱", label: "Téléphone", val: `${PROFILE.tel1} / ${PROFILE.tel2}`, href: `tel:+261389791195` },
    { icon: "📘", label: "Facebook", val: PROFILE.facebook, href: PROFILE.facebookUrl },
    { icon: "🐙", label: "GitHub", val: `@${PROFILE.github}`, href: PROFILE.githubUrl },
    { icon: "📍", label: "Localisation", val: PROFILE.ville, href: "#" },
    { icon: "🎓", label: "École", val: `${PROFILE.ecole} — ${PROFILE.niveau} ${PROFILE.filiere}`, href: "#" },
  ];

  box.innerHTML = items.map((item) => `
    <a href="${item.href}" class="contact-item" target="_blank" rel="noopener">
      <div class="ci-icon">${item.icon}</div>
      <div>
        <span class="ci-label">${item.label}</span>
        <span class="ci-val">${item.val}</span>
      </div>
    </a>
  `).join("");
}

// ── CURSOR PERSONNALISÉ ───────────────────────────────────────

function initCursor() {
  const cursor = document.querySelector(".cursor");
  const ring = document.querySelector(".cursor-ring");
  if (!cursor || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    cursor.style.left = mx + "px";
    cursor.style.top = my + "px";
  });

  function animRing() {
    rx += (mx - rx) * 0.14;
    ry += (my - ry) * 0.14;
    ring.style.left = rx + "px";
    ring.style.top = ry + "px";
    requestAnimationFrame(animRing);
  }
  animRing();

  // Agrandissement au hover sur liens/boutons
  document.querySelectorAll("a, button, .skill-card, .project-card").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.style.transform = "translate(-50%,-50%) scale(2)";
      cursor.style.background = "rgba(227,28,37,0.5)";
      ring.style.width = "60px";
      ring.style.height = "60px";
    });
    el.addEventListener("mouseleave", () => {
      cursor.style.transform = "translate(-50%,-50%) scale(1)";
      cursor.style.background = "var(--red)";
      ring.style.width = "36px";
      ring.style.height = "36px";
    });
  });
}

// ── NAV SCROLL & MOBILE ───────────────────────────────────────

function initNav() {
  const nav = document.querySelector("nav");
  const hamburger = document.querySelector(".hamburger");
  const navUl = document.querySelector("nav ul");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  if (hamburger && navUl) {
    hamburger.addEventListener("click", () => {
      navUl.style.display = navUl.style.display === "flex" ? "none" : "flex";
      navUl.style.flexDirection = "column";
      navUl.style.position = "absolute";
      navUl.style.top = "100%";
      navUl.style.left = "0";
      navUl.style.right = "0";
      navUl.style.background = "var(--bg)";
      navUl.style.padding = "1.5rem 2rem";
      navUl.style.borderBottom = "1px solid var(--border)";
    });
  }

  // Smooth scroll sur les liens nav
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href");
      if (id === "#") return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        if (navUl) navUl.style.display = "";
      }
    });
  });
}

// ── INTERSECTION OBSERVER (révélations + barres) ──────────────

function initObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");

          // Anime les barres de compétences
          entry.target.querySelectorAll(".skill-bar").forEach((bar) => {
            bar.style.width = bar.dataset.level + "%";
          });

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  // Observer tous les éléments .reveal et .skill-card
  document.querySelectorAll(".reveal, .skill-card, .project-card").forEach((el) => {
    observer.observe(el);
  });
}

// ── COMPTEURS ANIMÉS ──────────────────────────────────────────

function initCounters() {
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const statNums = entry.target.querySelectorAll("[data-target]");
          statNums.forEach((el) => {
            const target = parseInt(el.dataset.target, 10);
            let count = 0;
            const duration = 1400;
            const steps = 50;
            const increment = target / steps;
            const interval = duration / steps;

            const timer = setInterval(() => {
              count = Math.min(count + increment, target);
              el.textContent = Math.round(count);
              if (count >= target) clearInterval(timer);
            }, interval);
          });
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  const aboutSection = document.getElementById("about");
  if (aboutSection) counterObserver.observe(aboutSection);
}

// ── FORMULAIRE CONTACT ────────────────────────────────────────

function initForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const success = document.getElementById("form-success");

    btn.textContent = "Envoi en cours...";
    btn.disabled = true;

    // Simulation d'envoi (à remplacer par une vraie API si besoin)
    setTimeout(() => {
      btn.textContent = "✅ Message envoyé !";
      btn.style.background = "#4caf50";
      if (success) success.style.display = "block";

      setTimeout(() => {
        btn.textContent = "Envoyer le message";
        btn.style.background = "";
        btn.disabled = false;
        if (success) success.style.display = "none";
        form.reset();
      }, 4000);
    }, 1500);
  });
}

// ── TÉLÉCHARGEMENT CV ─────────────────────────────────────────
// Pour activer le téléchargement :
// 1. Placez votre CV dans le dossier du projet (ex: "cv-nambinitsoa.pdf")
// 2. Remplacez "#" par le chemin du fichier dans le bouton HTML
// Exemple : href="cv-nambinitsoa.pdf" download="CV_Nambinitsoa_Tsiky_Fanantenana.pdf"

// ── EASTER EGG (console) ─────────────────────────────────────
console.log(`
%c╔══════════════════════════════════════════╗
%c║  NAMBINITSOA Tsiky Fanantenana           ║
%c║  Développeur Web Junior                  ║
%c║  EMIT Fianarantsoa — L1 DA2I            ║
%c║  GitHub: github.com/Tsiky1801            ║
%c╚══════════════════════════════════════════╝
`, "color: #E31C25; font-weight: bold;",
   "color: white;", "color: #3b9edd;", "color: #6fbfff;",
   "color: #3b9edd;", "color: #E31C25; font-weight: bold;");
