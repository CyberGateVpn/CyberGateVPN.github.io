const DOWNLOAD_URL = 'https://github.com/CyberGateVpn/CyberGateVPN.github.io/blob/main/CyberGate.exe';

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
    download_start: "Загрузка CyberGate.exe начинается..."
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
    download_start: "Завантаження CyberGate.exe починається..."
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
    download_start: "CyberGate.exe download starting..."
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
  'Switzerland': 'region_switzerland