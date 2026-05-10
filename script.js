const DOWNLOAD_URL = 'https://github.com/CyberGateVpn/CyberGateVPN.github.io/raw/refs/heads/main/CyberGate.rar';

const translations = {
  ru: {
    nav_features: "Возможности",
    nav_pricing: "Цены",
    nav_servers: "Серверы",
    nav_download: "Скачать",
    nav_faq: "FAQ",
    nav_support: "Поддержка",
    hero_badge: "#1 VPN 2025 по версии TechSecurity",
    hero_subtitle: "Обеспечьте свою цифровую свободу",
    hero_desc: "Шифрование военного уровня - Политика без логов - Молниеносная скорость",
    trust_users: "пользователей",
    trust_servers: "серверов",
    trust_countries: "стран",
    hero_btn_protected: "Получить защиту",
    hero_btn_download: "Скачать бесплатно",
    speed_title: "Проверка скорости",
    speed_download: "Загрузка",
    speed_upload: "Отдача",
    speed_ping: "Пинг",
    speed_btn: "Начать тест",
    map_title: "Глобальная зашифрованная сеть",
    map_live: "АКТИВНЫЕ ЗАШИФРОВАННЫЕ СОЕДИНЕНИЯ",
    features_title: "Почему CyberGateVPN?",
    feature1_title: "Политика без логов",
    feature1_desc: "Проверено аудитом. Ваши данные принадлежат только вам.",
    feature2_title: "Сверхбыстрый",
    feature2_desc: "Серверы 10 Гбит/с - протокол WireGuard.",
    feature3_title: "Военное шифрование",
    feature3_desc: "AES-256 + ChaCha20 для максимальной безопасности.",
    feature4_title: "Kill Switch",
    feature4_desc: "Автоматическая блокировка при обрыве соединения.",
    feature5_title: "Split Tunneling",
    feature5_desc: "Выбирайте какие приложения идут через VPN.",
    feature6_title: "Поддержка 24/7",
    feature6_desc: "Чат с поддержкой в реальном времени.",
    servers_title: "Наши серверы",
    reviews_title: "Отзывы пользователей",
    pricing_title: "Выберите план",
    billing_monthly: "Месяц",
    billing_yearly: "Год",
    billing_save: "Экономия 50%",
    popular_badge: "Популярный",
    plan_free_name: "Бесплатный",
    plan_free_duration: "1 Месяц",
    plan_free_desc: "Базовая защита",
    plan_free_btn: "Начать бесплатно",
    plan_premium_name: "Премиум",
    plan_premium_duration: "3 Года",
    plan_premium_desc: "Все функции разблокированы",
    plan_premium_btn: "Получить Премиум",
    plan_lifetime_name: "Пожизненный",
    plan_lifetime_duration: "Навсегда",
    plan_lifetime_desc: "Одноразовый платёж",
    plan_lifetime_btn: "Купить навсегда",
    download_title: "Скачать бесплатную версию",
    download_subtitle: "Выберите регион для подключения (демо-доступ)",
    download_btn: "Скачать бесплатно",
    download_regions_available: "Доступно регионов",
    download_no_reg: "Без регистрации",
    file_version: "Версия",
    faq_title: "Часто задаваемые вопросы",
    faq1_q: "Это действительно бесплатно?",
    faq1_a: "Да, базовая версия полностью бесплатна на 1 месяц без ограничений по трафику.",
    faq2_q: "Как насчёт конфиденциальности?",
    faq2_a: "Мы не храним логи. Ваша активность в интернете остаётся полностью анонимной.",
    faq3_q: "Можно ли использовать для торрентов?",
    faq3_a: "Да, на Премиум и Пожизненном плане P2P полностью разрешён.",
    newsletter_title: "Подпишитесь на новости",
    newsletter_placeholder: "Введите ваш email",
    newsletter_btn: "Подписаться",
    card_number: "Номер карты",
    card_name: "Имя владельца",
    card_expiry: "ММ/ГГ",
    card_cvv: "CVV",
    email: "Email",
    secure_payment: "Защищённый платёж SSL",
    payment_btn: "Завершить безопасный платёж",
    payment_cancel: "Отмена",
    cookie_text: "Мы используем файлы cookie для улучшения работы сайта.",
    cookie_btn: "Принять",
    footer_desc: "Ваша цифровая свобода начинается здесь.",
    footer_links: "Ссылки",
    footer_contact: "Контакты",
    footer_text: "2025 CyberGateVPN. Все права защищены. Цифровая свобода.",
    region_germany: "Германия: 32 сервера - высокая скорость",
    region_netherlands: "Нидерланды: 28 серверов - низкий пинг",
    region_japan: "Япония: 35 серверов - азиатский хаб",
    region_singapore: "Сингапур: 40 серверов - оптимизация для стримов",
    region_canada: "Канада: 27 серверов - североамериканский узел",
    region_switzerland: "Швейцария: 33 сервера - максимальная конфиденциальность",
    region_ukraine: "Украина: 25 серверов - отличный пинг в Европе",
    region_poland: "Польша: 22 сервера - быстрый доступ к ЕС",
    free_access: "Бесплатный доступ: 30+ виртуальных локаций",
    download_start: "Загрузка CyberGate.rar начинается..."
  },
  ua: {
    nav_features: "Можливості",
    nav_pricing: "Ціни",
    nav_servers: "Сервери",
    nav_download: "Завантажити",
    nav_faq: "FAQ",
    nav_support: "Підтримка",
    hero_badge: "#1 VPN 2025 за версією TechSecurity",
    hero_subtitle: "Забезпечте свою цифрову свободу",
    hero_desc: "Шифрування військового рівня - Політика без логів - Блискавична швидкість",
    trust_users: "користувачів",
    trust_servers: "серверів",
    trust_countries: "країн",
    hero_btn_protected: "Отримати захист",
    hero_btn_download: "Завантажити безкоштовно",
    speed_title: "Перевірка швидкості",
    speed_download: "Завантаження",
    speed_upload: "Віддача",
    speed_ping: "Пінг",
    speed_btn: "Почати тест",
    map_title: "Глобальна зашифрована мережа",
    map_live: "АКТИВНІ ЗАШИФРОВАНІ З'ЄДНАННЯ",
    features_title: "Чому CyberGateVPN?",
    feature1_title: "Політика без логів",
    feature1_desc: "Перевірено аудитом. Ваші дані належать лише вам.",
    feature2_title: "Надшвидкий",
    feature2_desc: "Сервери 10 Гбіт/с - протокол WireGuard.",
    feature3_title: "Військове шифрування",
    feature3_desc: "AES-256 + ChaCha20 для максимальної безпеки.",
    feature4_title: "Kill Switch",
    feature4_desc: "Автоматичне блокування при обриві з'єднання.",
    feature5_title: "Split Tunneling",
    feature5_desc: "Обирайте які додатки йдуть через VPN.",
    feature6_title: "Підтримка 24/7",
    feature6_desc: "Чат з підтримкою в реальному часі.",
    servers_title: "Наші сервери",
    reviews_title: "Відгуки користувачів",
    pricing_title: "Оберіть план",
    billing_monthly: "Місяць",
    billing_yearly: "Рік",
    billing_save: "Економія 50%",
    popular_badge: "Популярний",
    plan_free_name: "Безкоштовний",
    plan_free_duration: "1 Місяць",
    plan_free_desc: "Базовий захист",
    plan_free_btn: "Почати безкоштовно",
    plan_premium_name: "Преміум",
    plan_premium_duration: "3 Роки",
    plan_premium_desc: "Всі функції розблоковано",
    plan_premium_btn: "Отримати Преміум",
    plan_lifetime_name: "Довічний",
    plan_lifetime_duration: "Назавжди",
    plan_lifetime_desc: "Одноразовий платіж",
    plan_lifetime_btn: "Купити назавжди",
    download_title: "Завантажити безкоштовну версію",
    download_subtitle: "Оберіть регіон для підключення (демо-доступ)",
    download_btn: "Завантажити безкоштовно",
    download_regions_available: "Доступно регіонів",
    download_no_reg: "Без реєстрації",
    file_version: "Версія",
    faq_title: "Часті запитання",
    faq1_q: "Це дійсно безкоштовно?",
    faq1_a: "Так, базова версія повністю безкоштовна на 1 місяць без обмежень трафіку.",
    faq2_q: "Як щодо конфіденційності?",
    faq2_a: "Ми не зберігаємо логи. Ваша активність в інтернеті залишається повністю анонімною.",
    faq3_q: "Чи можна використовувати для торентів?",
    faq3_a: "Так, на Преміум і Довічному плані P2P повністю дозволений.",
    newsletter_title: "Підпишіться на новини",
    newsletter_placeholder: "Введіть ваш email",
    newsletter_btn: "Підписатися",
    card_number: "Номер картки",
    card_name: "Ім'я власника",
    card_expiry: "ММ/РР",
    card_cvv: "CVV",
    email: "Email",
    secure_payment: "Захищений платіж SSL",
    payment_btn: "Завершити безпечний платіж",
    payment_cancel: "Скасувати",
    cookie_text: "Ми використовуємо файли cookie для покращення роботи сайту.",
    cookie_btn: "Прийняти",
    footer_desc: "Ваша цифрова свобода починається тут.",
    footer_links: "Посилання",
    footer_contact: "Контакти",
    footer_text: "2025 CyberGateVPN. Всі права захищені. Цифрова свобода.",
    region_germany: "Німеччина: 32 сервери - висока швидкість",
    region_netherlands: "Нідерланди: 28 серверів - низький пінг",
    region_japan: "Японія: 35 серверів - азійський хаб",
    region_singapore: "Сінгапур: 40 серверів - оптимізація для стримів",
    region_canada: "Канада: 27 серверів - північноамериканський вузол",
    region_switzerland: "Швейцарія: 33 сервери - максимальна конфіденційність",
    region_ukraine: "Україна: 25 серверів - відмінний пінг в Європі",
    region_poland: "Польща: 22 сервери - швидкий доступ до ЄС",
    free_access: "Безкоштовний доступ: 30+ віртуальних локацій",
    download_start: "Завантаження CyberGate.rar починається..."
  },
  eu: {
    nav_features: "Features",
    nav_pricing: "Pricing",
    nav_servers: "Servers",
    nav_download: "Download",
    nav_faq: "FAQ",
    nav_support: "Support",
    hero_badge: "#1 VPN 2025 by TechSecurity",
    hero_subtitle: "Secure Your Digital Freedom",
    hero_desc: "Military-grade encryption - No-logs policy - Blazing fast speeds",
    trust_users: "users",
    trust_servers: "servers",
    trust_countries: "countries",
    hero_btn_protected: "Get Protected Now",
    hero_btn_download: "Free Download",
    speed_title: "Speed Test",
    speed_download: "Download",
    speed_upload: "Upload",
    speed_ping: "Ping",
    speed_btn: "Start Test",
    map_title: "Global Encrypted Network",
    map_live: "LIVE ENCRYPTED CONNECTIONS",
    features_title: "Why CyberGateVPN?",
    feature1_title: "No Logs Policy",
    feature1_desc: "Audited and independently verified. Your data stays yours.",
    feature2_title: "Ultra Fast",
    feature2_desc: "10 Gbps servers - WireGuard protocol included.",
    feature3_title: "Military Encryption",
    feature3_desc: "AES-256 + ChaCha20 for maximum security.",
    feature4_title: "Kill Switch",
    feature4_desc: "Automatic block if connection drops.",
    feature5_title: "Split Tunneling",
    feature5_desc: "Choose which apps go through VPN.",
    feature6_title: "24/7 Support",
    feature6_desc: "Real-time chat with our support team.",
    servers_title: "Our Servers",
    reviews_title: "User Reviews",
    pricing_title: "Choose Your Plan",
    billing_monthly: "Monthly",
    billing_yearly: "Yearly",
    billing_save: "Save 50%",
    popular_badge: "Popular",
    plan_free_name: "Free",
    plan_free_duration: "1 Month",
    plan_free_desc: "Basic protection",
    plan_free_btn: "Start Free",
    plan_premium_name: "Premium",
    plan_premium_duration: "3 Years",
    plan_premium_desc: "All features unlocked",
    plan_premium_btn: "Get Premium",
    plan_lifetime_name: "Lifetime",
    plan_lifetime_duration: "Forever",
    plan_lifetime_desc: "One-time payment",
    plan_lifetime_btn: "Buy Lifetime",
    download_title: "Download Free Version",
    download_subtitle: "Choose a region for connection (demo access)",
    download_btn: "Download Free",
    download_regions_available: "Available regions",
    download_no_reg: "No registration",
    file_version: "Version",
    faq_title: "Frequently Asked Questions",
    faq1_q: "Is it really free?",
    faq1_a: "Yes, the basic version is completely free for 1 month with no traffic limits.",
    faq2_q: "What about privacy?",
    faq2_a: "We don't keep logs. Your internet activity remains completely anonymous.",
    faq3_q: "Can I use it for torrents?",
    faq3_a: "Yes, P2P is fully allowed on Premium and Lifetime plans.",
    newsletter_title: "Subscribe to News",
    newsletter_placeholder: "Enter your email",
    newsletter_btn: "Subscribe",
    card_number: "Card Number",
    card_name: "Cardholder Name",
    card_expiry: "MM/YY",
    card_cvv: "CVV",
    email: "Email",
    secure_payment: "Secure SSL Payment",
    payment_btn: "Complete Secure Payment",
    payment_cancel: "Cancel",
    cookie_text: "We use cookies to improve your experience.",
    cookie_btn: "Accept",
    footer_desc: "Your digital freedom starts here.",
    footer_links: "Links",
    footer_contact: "Contact",
    footer_text: "2025 CyberGateVPN. All rights reserved. Digital freedom.",
    region_germany: "Germany: 32 servers - high speed",
    region_netherlands: "Netherlands: 28 servers - low ping",
    region_japan: "Japan: 35 servers - Asian hub",
    region_singapore: "Singapore: 40 servers - stream optimized",
    region_canada: "Canada: 27 servers - North American node",
    region_switzerland: "Switzerland: 33 servers - maximum privacy",
    region_ukraine: "Ukraine: 25 servers - excellent ping in Europe",
    region_poland: "Poland: 22 servers - fast EU access",
    free_access: "Free access: 30+ virtual locations",
    download_start: "CyberGate.rar download starting..."
  }
};

let currentLang = 'ru';

function switchLanguage(lang) {
  currentLang = lang;
  
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.lang === lang) btn.classList.add('active');
  });

  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;
    if (translations[lang]?.[key]) element.textContent = translations[lang][key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.dataset.i18nPlaceholder;
    if (translations[lang]?.[key]) element.placeholder = translations[lang][key];
  });

  updateRegionDescription();
  updateModalPlanText();
}

function updateModalPlanText() {
  const modalPlan = document.getElementById('modalPlan');
  if (modalPlan && translations[currentLang]) {
    modalPlan.textContent = translations[currentLang].payment_btn || 'Payment';
  }
}

// Language buttons
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => switchLanguage(btn.dataset.lang));
});

// Region system
const regionDetails = {
  'Germany': 'region_germany',
  'Netherlands': 'region_netherlands',
  'Japan': 'region_japan',
  'Singapore': 'region_singapore',
  'Canada': 'region_canada',
  'Switzerland': 'region_switzerland',
  'Ukraine': 'region_ukraine',
  'Poland': 'region_poland'
};

const regionChips = document.querySelectorAll('.region-chip');
const regionDescription = document.getElementById('region-description');
const activeRegionCountSpan = document.getElementById('activeRegionCount');

function updateRegionDescription() {
  const activeChip = document.querySelector('.region-chip.active');
  if (activeChip) {
    const region = activeChip.dataset.region;
    const translationKey = regionDetails[region];
    if (translations[currentLang]?.[translationKey]) {
      regionDescription.textContent = translations[currentLang][translationKey];
    } else if (translations[currentLang]?.free_access) {
      regionDescription.textContent = translations[currentLang].free_access;
    }
  }
  
  const randomAdd = Math.floor(Math.random() * 5);
  const availableText = currentLang === 'ru' ? 'доступно' : currentLang === 'ua' ? 'доступно' : 'available';
  activeRegionCountSpan.textContent = '30+' + (randomAdd > 0 ? ` (${30+randomAdd} ${availableText})` : '');
}

regionChips.forEach(chip => {
  chip.addEventListener('click', function() {
    regionChips.forEach(c => c.classList.remove('active'));
    this.classList.add('active');
    updateRegionDescription();
  });
});

// Download button
document.getElementById('downloadFreeBtn').addEventListener('click', function(e) {
  const activeRegion = document.querySelector('.region-chip.active')?.dataset.region || 'Germany';
  const messages = {
    ru: `Загрузка CyberGate.rar начинается...\nВыбран регион: ${activeRegion}\nФайл загружается с GitHub.`,
    ua: `Завантаження CyberGate.rar починається...\nОбраний регіон: ${activeRegion}\nФайл завантажується з GitHub.`,
    eu: `CyberGate.rar download starting...\nSelected region: ${activeRegion}\nFile downloading from GitHub.`
  };
  
  console.log(`Download started: ${DOWNLOAD_URL}`);
  console.log(`Region: ${activeRegion}`);
  
  setTimeout(() => alert(messages[currentLang] || messages.eu), 500);
});

// Scroll functions
function scrollToPricing() { document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' }); }
function scrollToDownload() { document.getElementById('download-free').scrollIntoView({ behavior: 'smooth' }); }

// Payment modal
function showPayment(plan) {
  const modal = document.getElementById('paymentModal');
  const planTitle = document.getElementById('modalPlan');
  const planNames = {
    ru: { free: 'Бесплатная версия - 1 Месяц', premium: 'Премиум доступ - 3 Года', lifetime: 'Пожизненный доступ' },
    ua: { free: 'Безкоштовна версія - 1 Місяць', premium: 'Преміум доступ - 3 Роки', lifetime: 'Довічний доступ' },
    eu: { free: 'Free Version - 1 Month', premium: 'Premium Access - 3 Years', lifetime: 'Lifetime Access' }
  };
  planTitle.innerText = planNames[currentLang]?.[plan] || planNames.eu[plan];
  modal.style.display = 'flex';
}

function completePayment() {
  const messages = {
    ru: 'Оплата прошла успешно! Защита CyberGateVPN активирована.',
    ua: 'Оплата пройшла успішно! Захист CyberGateVPN активовано.',
    eu: 'Payment successful! Your CyberGateVPN protection is now active.'
  };
  alert(messages[currentLang] || messages.eu);
  closeModal();
}

function closeModal() {
  document.getElementById('paymentModal').style.display = 'none';
}

window.onclick = function(event) {
  const modal = document.getElementById('paymentModal');
  if (event.target === modal) modal.style.display = 'none';
}

// Speed test simulation
function startSpeedTest() {
  const downloadEl = document.getElementById('downloadSpeed');
  const uploadEl = document.getElementById('uploadSpeed');
  const pingEl = document.getElementById('pingValue');
  
  const btn = document.querySelector('.speed-test-container .btn');
  btn.disabled = true;
  btn.textContent = 'Тестирование...';
  
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 15;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      downloadEl.textContent = Math.floor(Math.random() * 200 + 400);
      uploadEl.textContent = Math.floor(Math.random() * 100 + 200);
      pingEl.textContent = Math.floor(Math.random() * 20 + 5);
      btn.disabled = false;
      const texts = { ru: 'Начать тест', ua: 'Почати тест', eu: 'Start Test' };
      btn.textContent = texts[currentLang] || 'Start Test';
    }
    downloadEl.textContent = Math.floor(progress * 4);
    uploadEl.textContent = Math.floor(progress * 2);
    pingEl.textContent = Math.floor(Math.random() * 10 + 10);
  }, 100);
}

// Trust counters animation
function animateCounters() {
  document.querySelectorAll('.trust-counter').forEach(counter => {
    const target = parseInt(counter.dataset.target);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
      current += step;
      if (current < target) {
        counter.textContent = Math.floor(current).toLocaleString();
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target.toLocaleString();
      }
    };
    updateCounter();
  });
}

// FAQ accordion
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const faqItem = question.parentElement;
    faqItem.classList.toggle('active');
  });
});

// Mobile menu
document.getElementById('mobileMenuBtn').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});

// Cookie banner
function acceptCookies() {
  document.getElementById('cookieBanner').style.display = 'none';
}

// Billing toggle
document.getElementById('billingToggle').addEventListener('change', function() {
  const prices = document.querySelectorAll('.plan-price');
  if (this.checked) {
    prices[0].innerHTML = '$0<span class="price-period">/год</span>';
    prices[1].innerHTML = '$29.99<span class="price-period">/год</span>';
    prices[2].innerHTML = '$99.99';
  } else {
    prices[0].innerHTML = '$0';
    prices[1].innerHTML = '$2.99<span class="price-period">/мес</span>';
    prices[2].innerHTML = '$99.99';
  }
});

// Particles effect
function createParticles() {
  const container = document.getElementById('particles');
  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random() * 100 + '%';
    particle.style.width = Math.random() * 3 + 1 + 'px';
    particle.style.height = particle.style.width;
    particle.style.animationDelay = Math.random() * 8 + 's';
    particle.style.animationDuration = Math.random() * 6 + 6 + 's';
    container.appendChild(particle);
  }
}

// Initialize
window.addEventListener('DOMContentLoaded', () => {
  switchLanguage('ru');
  updateRegionDescription();
  createParticles();
  
  // Animate counters when visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        observer.unobserve(entry.target);
      }
    });
  });
  
  const trustSection = document.querySelector('.trust-indicators');
  if (trustSection) observer.observe(trustSection);
});

console.log("%cCyberGateVPN Loaded", "color:#00f0ff; font-size:18px; font-weight:bold;");
console.log("%cDownload URL: " + DOWNLOAD_URL, "color:#c026d3;");
console.log("%cAll systems operational", "color:#00ff64;");
