/**
 * BAUR.BROO AKTAU — MONOCHROMATIC E-COMMERCE ENGINE
 * Features: Adidas-style Minimalist Design, Interactive Size Filtering, WhatsApp Checkout, Kaspi QR
 * Phone / WhatsApp: +7 (702) 329-51-31
 * Address: 19 mkr, 7, LCD "Alatau"
 */

const BAUR_PRODUCTS = [
  {
    id: 1,
    name_kk: "BAUR.BROO Heavyweight Oversize Tracksuit",
    name_ru: "Оверсайз Спортивный Костюм BAUR.BROO (Black)",
    cat: "hoodies",
    price: 26900,
    old_price: 34000,
    badge: "ХИТ",
    sizes: ["S", "M", "L", "XL", "2XL"],
    img: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=700&q=80",
    desc_kk: "Қалың премиум мақтадан тігілген (380 гсм) оверсайз костюм. Пішінін жуғаннан кейін жоғалтпайды, күнделікті киіске өте қолайлы.",
    desc_ru: "Плотный премиальный хлопок (380 гсм). Свободная трендовая посадка оверсайз, сохраняет цвет и форму."
  },
  {
    id: 2,
    name_kk: "BAUR.BROO Boxy Fleece Hoodie (Triple Black)",
    name_ru: "Худи Boxy Heavyweight Fleece (All Black)",
    cat: "hoodies",
    price: 18500,
    old_price: 24000,
    badge: "ТОП ТАҢДАУ",
    sizes: ["M", "L", "XL", "2XL", "3XL"],
    img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=700&q=80",
    desc_kk: "Түсіп тұратын иықты массивті худи. Капюшоны терең, қалтасы ыңғайлы. Streetwear стилінің негізі.",
    desc_ru: "Массивный худи со спущенным плечом. Глубокий капюшон, удобный карман-кенгуру."
  },
  {
    id: 3,
    name_kk: "Urban Tactical Multi-Pocket Cargo Trousers",
    name_ru: "Тактические Брюки Карго (Dark Graphite)",
    cat: "pants",
    price: 17900,
    old_price: 23000,
    badge: "ХИТ",
    sizes: ["S", "M", "L", "XL", "2XL"],
    img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    desc_kk: "Көптеген қалталары бар берік карго шалбары. Манжеттері баумен реттеледі, кез келген кроссовкамен стильді үйлеседі.",
    desc_ru: "Функциональные карго с вместительными карманами. Плотный рипстоп материал, манжеты на утяжках."
  },
  {
    id: 4,
    name_kk: "BAUR.BROO Retro Court Low Street Sneakers",
    name_ru: "Кроссовки Retro Court Low White Monochrome",
    cat: "shoes",
    price: 22900,
    old_price: 29000,
    badge: "ЖАҢА",
    sizes: ["40", "41", "42", "43", "44", "45"],
    img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    desc_kk: "Классикалық ақ-қара көше силуэті. Сапалы эко-былғары, тазалауға оңай, табаны тозуға төзімді.",
    desc_ru: "Минималистичный ретро-силуэт. Качественная эко-кожа, мягкая амортизация, легко чистится."
  },
  {
    id: 5,
    name_kk: "Air Cushion Sport Performance Sneakers Black",
    name_ru: "Кроссовки Air Cushion Stealth All Black",
    cat: "shoes",
    price: 24500,
    old_price: 31000,
    badge: "ХИТ",
    sizes: ["40", "41", "42", "43", "44"],
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
    desc_kk: "Тыныс алатын торлы маталы спорттық қара кроссовка. Табаны жұмсақ ауа балонымен жабдықталған.",
    desc_ru: "Дышащая сетка, технология воздушной подушки в подошве для максимального комфорта при ходьбе."
  },
  {
    id: 6,
    name_kk: "Windstopper Street Bomber Jacket (Matte Black)",
    name_ru: "Ветрозащитный Бомбер BAUR.BROO Windstopper",
    cat: "jackets",
    price: 28900,
    old_price: 36000,
    badge: "ТОП ТАҢДАУ",
    sizes: ["M", "L", "XL", "2XL"],
    img: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=700&q=80",
    desc_kk: "Каспий теңізінің қатты желдерінен қорғайтын арнайы мата. Жылдам киюге ыңғайлы сәнді сыртқы күртеше.",
    desc_ru: "Ветрозащитный матовый бомбер от ветров Каспия. Качественная металлическая фурнитура."
  },
  {
    id: 7,
    name_kk: "Heavyweight Boxy Graphic Tee 'ORIGINALS'",
    name_ru: "Футболка Boxy Heavyweight 'ORIGINALS'",
    cat: "hoodies",
    price: 12500,
    old_price: 16000,
    badge: "ЖАҢА",
    sizes: ["S", "M", "L", "XL", "2XL"],
    img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=700&q=80",
    desc_kk: "Тығыз 260 гсм мақтадан тігілген оверсайз футболка. Тұрақты жібек баспа, жуғанда өшпейді.",
    desc_ru: "Оверсайз футболка высокой плотности (260 гсм). Прямой силуэт, стойкий шелкографический принт."
  },
  {
    id: 8,
    name_kk: "Waterproof Tactical Crossbody Bag & Chest Pack",
    name_ru: "Тактическая Водостойкая Сумка BAUR.BROO",
    cat: "bags",
    price: 9900,
    old_price: 14000,
    badge: "АКСЕССУАР",
    sizes: ["One Size"],
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",
    desc_kk: "Телефон, құжаттар, кілттер мен әмиянға арналған су өткізбейтін тактикалық сөмке.",
    desc_ru: "Компактная водонепроницаемая сумка через плечо. Вместительные отделения для телефона и ключей."
  }
];

const I18N = {
  kk: {
    nav_catalog: "КАТАЛОГ",
    nav_sizes: "ӨЛШЕМДЕР БӨЛІМІ",
    nav_about: "ДҮКЕН ЖАЙЛЫ",
    nav_contacts: "МЕКЕНЖАЙ & 2GIS",
    hero_desc: "«BAUR.BROO» — 19 мкр ЖК Алатаудағы ерлер киімі мен трендті кроссовкалар дүкені. Сапалы оверсайз худилер, карго шалбарлар, бомберлер және стильді аяқ киімдер.",
    usp_quality: "Сапалы мата",
    usp_delivery: "Ақтауға жеткізу",
    btn_view_catalog: "КАТАЛОГТЫ ҚАРАУ",
    btn_size_find: "ӨЛШЕМДІ ТАҢДАУ",
    size_sec_title: "ӨЗ ӨЛШЕМІҢІЗДІ ТАҢДАҢЫЗ",
    size_sec_desc: "Өлшеміңізді бір рет басыңыз — сайт тек сіздің өлшеміңіздегі қолда бар киімдер мен кроссовкаларды көрсетеді",
    cat_title: "ТАУАРЛАР КАТАЛОГЫ",
    cat_desc: "Қажетті санатты немесе өлшемді таңдап, бірден WhatsApp-қа тапсырыс беріңіз",
    tab_all: "БАРЛЫҒЫ",
    tab_hoodies: "ХУДИ & СВИТШОТ",
    tab_jackets: "КҮРТЕШЕЛЕР & БОМБЕР",
    tab_shoes: "КРОССОВКАЛАР",
    tab_pants: "КАРГО & ШАЛБАР",
    tab_bags: "СӨМКЕЛЕР",
    add_to_cart: "СЕБЕТКЕ",
    buy_wa: "WHATSAPP АЛУ"
  },
  ru: {
    nav_catalog: "КАТАЛОГ",
    nav_sizes: "РАЗДЕЛ РАЗМЕРОВ",
    nav_about: "О МАГАЗИНЕ",
    nav_contacts: "КОНТАКТЫ & 2GIS",
    hero_desc: "«BAUR.BROO» — магазин мужской одежды и обуви в 19 мкр ЖК Алатау. Премиальные оверсайз худи, брюки карго, бомберы и сникеры.",
    usp_quality: "Качественная ткань",
    usp_delivery: "Доставка по Актау",
    btn_view_catalog: "СМОТРЕТЬ КАТАЛОГ",
    btn_size_find: "ПОДОБРАТЬ РАЗМЕР",
    size_sec_title: "ВЫБЕРИТЕ ВАШ РАЗМЕР",
    size_sec_desc: "Нажмите на нужный размер — сайт покажет одежду и обувь именно вашего размера",
    cat_title: "КАТАЛОГ ТОВАРОВ",
    cat_desc: "Выберите категорию или размер для быстрого заказа в WhatsApp",
    tab_all: "ВСЕ",
    tab_hoodies: "ХУДИ И СВИТШОТЫ",
    tab_jackets: "КУРТКИ И БОМБЕРЫ",
    tab_shoes: "КРОССОВКИ",
    tab_pants: "КАРГО И БРЮКИ",
    tab_bags: "СУМКИ",
    add_to_cart: "В КОРЗИНУ",
    buy_wa: "В WHATSAPP"
  }
};

let currentLang = 'kk';
let currentCategory = 'all';
let currentSizeFilter = 'all';
let selectedSizesMap = {}; // productId -> chosen size
let cart = [];

// Init cart
try {
  const sc = localStorage.getItem('baurbroo_cart');
  if (sc) cart = JSON.parse(sc);
} catch (e) {}

// Render
function renderCatalog() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  let filtered = BAUR_PRODUCTS.filter(item => {
    const matchCat = currentCategory === 'all' || item.cat === currentCategory;
    const matchSize = currentSizeFilter === 'all' || item.sizes.includes(currentSizeFilter) || (item.sizes.includes('One Size') && ['S', 'M', 'L', 'XL'].includes(currentSizeFilter));
    return matchCat && matchSize;
  });

  const filterBar = document.getElementById('activeFilterBar');
  const filterIndicator = document.getElementById('filterSizeIndicator');
  if (filterBar) {
    if (currentSizeFilter !== 'all') {
      filterBar.style.display = 'flex';
      filterIndicator.textContent = currentSizeFilter;
    } else {
      filterBar.style.display = 'none';
    }
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 50px 20px; color: var(--text-gray); border: 1px dashed var(--border-subtle);">
        <i class="fa-solid fa-box-open" style="font-size: 2.5rem; margin-bottom: 12px; opacity: 0.3;"></i>
        <p>Бұл өлшемде әзірге тауар табылмады. Басқа өлшемді таңдап көріңіз.</p>
        <button class="btn btn-outline" style="margin-top: 14px;" onclick="clearSizeFilter()">Барлық өлшемдерді көрсету</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => {
    const name = currentLang === 'kk' ? item.name_kk : item.name_ru;
    const chosenSize = selectedSizesMap[item.id] || item.sizes[0];

    return `
      <div class="p-card">
        <div class="p-card-media" onclick="openQuickView(${item.id})">
          <span class="p-badge">${item.badge}</span>
          <img src="${item.img}" alt="${name}" loading="lazy">
        </div>
        <div class="p-card-body">
          <span class="p-card-cat">${item.cat}</span>
          <h3 class="p-card-name">${name}</h3>
          
          <div class="p-card-sizes">
            <span style="font-size: 0.72rem; color: var(--text-gray); margin-right: 4px;">ӨЛШЕМ:</span>
            ${item.sizes.map(s => `
              <button class="p-size-btn ${s === chosenSize ? 'selected' : ''}" onclick="pickProductSize(${item.id}, '${s}', this)">${s}</button>
            `).join('')}
          </div>

          <div class="p-card-price-row">
            <span class="p-card-price">${item.price.toLocaleString('ru-RU')} ₸</span>
            <span class="p-card-old-price">${item.old_price.toLocaleString('ru-RU')} ₸</span>
          </div>

          <div class="p-card-actions">
            <button class="btn-add-cart" onclick="addToCart(${item.id})">
              <i class="fa-solid fa-bag-shopping"></i> ${I18N[currentLang].add_to_cart}
            </button>
            <button class="btn-buy-wa" onclick="orderWhatsAppDirect(${item.id})">
              <i class="fa-brands fa-whatsapp"></i> ${I18N[currentLang].buy_wa}
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Size Selection directly on card
function pickProductSize(id, size, btn) {
  selectedSizesMap[id] = size;
  const parent = btn.closest('.p-card-sizes');
  if (parent) {
    parent.querySelectorAll('.p-size-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
  }
}

// Global Size Filter from Size Board
function filterBySize(size, btn) {
  currentSizeFilter = size;
  document.querySelectorAll('.size-chip').forEach(c => c.classList.remove('active'));
  if (btn) btn.classList.add('active');

  renderCatalog();

  const catEl = document.getElementById('catalog');
  if (catEl) catEl.scrollIntoView({ behavior: 'smooth' });
}

function clearSizeFilter() {
  currentSizeFilter = 'all';
  document.querySelectorAll('.size-chip').forEach(c => {
    c.classList.toggle('active', c.textContent.trim() === 'БАРЛЫҒЫ');
  });
  renderCatalog();
}

// Category filter
function filterCategory(cat) {
  currentCategory = cat;
  document.querySelectorAll('.cat-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.cat === cat);
  });
  renderCatalog();
}

// Body measurement calculator
function calculateMySize() {
  const h = parseInt(document.getElementById('calcHeight').value, 10);
  const w = parseInt(document.getElementById('calcWeight').value, 10);
  if (!h || !w) return;

  let size = "L (50)";
  let rawSize = "L";
  let sub = "BAUR.BROO оверсайз киімдері мен костюмдеріне мінсіз сәйкес келеді.";

  if (w < 60 || h < 170) {
    size = "S (46)";
    rawSize = "S";
    sub = "Ықшам дене бітіміне арналған қолайлы өлшем.";
  } else if (w <= 72 && h <= 176) {
    size = "M (48)";
    rawSize = "M";
    sub = "Стандартты ыңғайлы ерлер өлшемі.";
  } else if (w <= 84 && h <= 184) {
    size = "L (50)";
    rawSize = "L";
    sub = "BAUR.BROO-ның ең сұранысқа ие оверсайз өлшемі! Еркін отырады.";
  } else if (w <= 95 || h <= 190) {
    size = "XL (52)";
    rawSize = "XL";
    sub = "Кең әрі массивті спорттық отырыс беретін өлшем.";
  } else {
    size = "2XL (54)";
    rawSize = "2XL";
    sub = "Максималды еркін оверсайз стилі.";
  }

  document.getElementById('resSizeVal').textContent = size;
  document.getElementById('resSizeText').textContent = sub;
  window.calculatedRawSize = rawSize;

  document.getElementById('calcResultPanel').style.display = 'flex';
}

function applyCalculatedFilter() {
  if (window.calculatedRawSize) {
    filterBySize(window.calculatedRawSize, null);
  }
}

// Cart Management
function addToCart(id) {
  const prod = BAUR_PRODUCTS.find(p => p.id === id);
  if (!prod) return;

  const size = selectedSizesMap[id] || prod.sizes[0];
  const existing = cart.find(i => i.id === id && i.size === size);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: prod.id,
      name_kk: prod.name_kk,
      name_ru: prod.name_ru,
      price: prod.price,
      img: prod.img,
      size: size,
      qty: 1
    });
  }

  saveCart();
  updateCartUI();
  showToast(currentLang === 'kk' ? 'Тауар себетке қосылды! 🛍️' : 'Товар добавлен в корзину! 🛍️');
}

function updateCartQty(idx, delta) {
  if (!cart[idx]) return;
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  saveCart();
  updateCartUI();
}

function removeCartItem(idx) {
  cart.splice(idx, 1);
  saveCart();
  updateCartUI();
}

function saveCart() {
  try {
    localStorage.setItem('baurbroo_cart', JSON.stringify(cart));
  } catch (e) {}
}

function updateCartUI() {
  const countEl = document.getElementById('cartCount');
  const mCountEl = document.getElementById('mobileCartCount');
  const listEl = document.getElementById('cartItemsList');
  const totalEl = document.getElementById('cartTotalVal');

  const totalCount = cart.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);

  if (countEl) countEl.textContent = totalCount;
  if (mCountEl) mCountEl.textContent = totalCount;
  if (totalEl) totalEl.textContent = totalPrice.toLocaleString('ru-RU') + ' ₸';

  if (!listEl) return;

  if (cart.length === 0) {
    listEl.innerHTML = `
      <div style="text-align: center; margin: auto 0; color: var(--text-gray);">
        <i class="fa-solid fa-bag-shopping" style="font-size: 3rem; margin-bottom: 12px; opacity: 0.2;"></i>
        <p>Себетіңіз әзірге бос</p>
      </div>
    `;
    return;
  }

  listEl.innerHTML = cart.map((item, idx) => {
    const name = currentLang === 'kk' ? item.name_kk : item.name_ru;
    return `
      <div class="cart-item-row">
        <img src="${item.img}" alt="${name}">
        <div class="cart-item-info">
          <div class="cart-item-title">${name}</div>
          <div class="cart-item-size-badge">ӨЛШЕМ: ${item.size}</div>
          <div class="cart-item-price">${(item.price * item.qty).toLocaleString('ru-RU')} ₸</div>
          <div class="cart-ctrls">
            <button class="c-btn" onclick="updateCartQty(${idx}, -1)">-</button>
            <span style="font-size:0.85rem; font-weight:700;">${item.qty}</span>
            <button class="c-btn" onclick="updateCartQty(${idx}, 1)">+</button>
            <button class="c-del" onclick="removeCartItem(${idx})"><i class="fa-regular fa-trash-can"></i></button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function openCart() {
  document.getElementById('cartDrawer').classList.add('active');
  document.getElementById('cartBackdrop').classList.add('active');
  updateCartUI();
}

function closeCart() {
  document.getElementById('cartDrawer').classList.remove('active');
  document.getElementById('cartBackdrop').classList.remove('active');
}

// WhatsApp Integration (+7 702 329 51 31)
function orderWhatsAppDirect(id) {
  const prod = BAUR_PRODUCTS.find(p => p.id === id);
  if (!prod) return;

  const size = selectedSizesMap[id] || prod.sizes[0];
  const name = currentLang === 'kk' ? prod.name_kk : prod.name_ru;

  let text = "";
  if (currentLang === 'kk') {
    text = `Сәлеметсіз бе, BAUR.BROO!\n\nСайттан мына тауарға тапсырыс бергім келеді:\n` +
           `📦 Тауар: *${name}*\n` +
           `📏 Өлшемі: *${size}*\n` +
           `💰 Бағасы: *${prod.price.toLocaleString('ru-RU')} ₸*\n\n` +
           `Қала: Ақтау (19 мкр ЖК Алатаудан алып кету немесе жеткізу).\nҚолда бар ма?`;
  } else {
    text = `Здравствуйте, BAUR.BROO!\n\nХочу оформить заказ с сайта:\n` +
           `📦 Товар: *${name}*\n` +
           `📏 Размер: *${size}*\n` +
           `💰 Цена: *${prod.price.toLocaleString('ru-RU')} ₸*\n\n` +
           `Доставка по Актау / самовывоз 19 мкр ЖК Алатау.\nЕсть ли в наличии?`;
  }

  const url = `https://wa.me/77023295131?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

function checkoutWhatsApp() {
  if (cart.length === 0) {
    alert('Себетіңіз бос!');
    return;
  }
  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const itemsText = cart.map((it, i) => {
    const name = currentLang === 'kk' ? it.name_kk : it.name_ru;
    return `${i + 1}. *${name}* (${it.size}) × ${it.qty} дана = ${(it.price * it.qty).toLocaleString('ru-RU')} ₸`;
  }).join('\n');

  let text = "";
  if (currentLang === 'kk') {
    text = `Сәлеметсіз бе, BAUR.BROO Aktau!\nСайт арқылы мына тапсырысты жасадым:\n\n` +
           `${itemsText}\n\n` +
           `💳 Жалпы сома: *${total.toLocaleString('ru-RU')} ₸*\n` +
           `📍 Қала: Ақтау (19 мкр, 7, ЖК Алатау)\n\n` +
           `Тапсырысымды растауыңызды сұраймын!`;
  } else {
    text = `Здравствуйте, BAUR.BROO Aktau!\nОформил заказ через сайт:\n\n` +
           `${itemsText}\n\n` +
           `💳 Общая сумма: *${total.toLocaleString('ru-RU')} ₸*\n` +
           `📍 Актау, 19 мкр, ЖК Алатау\n\n` +
           `Подтвердите, пожалуйста, заказ!`;
  }

  const url = `https://wa.me/77023295131?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

function quickOrderBaur(name, price, size) {
  let text = `Сәлеметсіз бе, BAUR.BROO! Сайттың басты бетіндегі *${name}* (${price}, өлшемі: ${size}) бойынша тапсырыс бергім келеді. Бар ма?`;
  window.open(`https://wa.me/77023295131?text=${encodeURIComponent(text)}`, '_blank');
}

// Kaspi Modal
function openKaspiModal() {
  if (cart.length === 0) {
    alert('Алдымен себетке тауар салыңыз!');
    return;
  }
  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  document.getElementById('kaspiAmount').textContent = total.toLocaleString('ru-RU') + ' ₸';
  document.getElementById('kaspiModal').classList.add('active');
}

function closeKaspiModal() {
  document.getElementById('kaspiModal').classList.remove('active');
}

// Quick View Modal
function openQuickView(id) {
  const prod = BAUR_PRODUCTS.find(p => p.id === id);
  if (!prod) return;

  const name = currentLang === 'kk' ? prod.name_kk : prod.name_ru;
  const desc = currentLang === 'kk' ? prod.desc_kk : prod.desc_ru;
  const chosenSize = selectedSizesMap[id] || prod.sizes[0];

  const content = document.getElementById('qvModalContent');
  content.innerHTML = `
    <button class="modal-close-btn" onclick="closeQuickView()">&times;</button>
    <div class="qv-grid">
      <div class="qv-img">
        <img src="${prod.img}" alt="${name}">
      </div>
      <div class="qv-details">
        <span class="p-card-cat">${prod.cat}</span>
        <h2 class="qv-title">${name}</h2>
        <div class="p-card-price-row">
          <span class="p-card-price">${prod.price.toLocaleString('ru-RU')} ₸</span>
          <span class="p-card-old-price">${prod.old_price.toLocaleString('ru-RU')} ₸</span>
        </div>
        <p class="qv-desc">${desc}</p>

        <div style="margin-bottom: 20px;">
          <div style="font-size:0.78rem; font-weight:800; color:var(--text-gray); margin-bottom:8px;">ӨЛШЕМДІ ТАҢДАҢЫЗ:</div>
          <div class="p-card-sizes">
            ${prod.sizes.map(s => `
              <button class="p-size-btn ${s === chosenSize ? 'selected' : ''}" onclick="pickProductSize(${prod.id}, '${s}', this)">${s}</button>
            `).join('')}
          </div>
        </div>

        <div class="p-card-actions">
          <button class="btn btn-outline" onclick="addToCart(${prod.id}); closeQuickView();">
            <i class="fa-solid fa-bag-shopping"></i> СЕБЕТКЕ САЛУ
          </button>
          <button class="btn btn-solid" onclick="orderWhatsAppDirect(${prod.id})">
            <i class="fa-brands fa-whatsapp"></i> WHATSAPP
          </button>
        </div>
      </div>
    </div>
  `;

  document.getElementById('quickViewModal').classList.add('active');
}

function closeQuickView() {
  document.getElementById('quickViewModal').classList.remove('active');
}

// Language Switcher
function setLanguage(lang) {
  currentLang = lang;
  document.getElementById('btnKz').classList.toggle('active', lang === 'kk');
  document.getElementById('btnRu').classList.toggle('active', lang === 'ru');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (I18N[lang] && I18N[lang][k]) {
      el.textContent = I18N[lang][k];
    }
  });

  renderCatalog();
  updateCartUI();
}

// Toast
function showToast(msg) {
  const t = document.createElement('div');
  t.style.position = 'fixed';
  t.style.bottom = '80px';
  t.style.right = '20px';
  t.style.background = '#111111';
  t.style.color = '#ffffff';
  t.style.border = '1px solid #111111';
  t.style.padding = '12px 20px';
  t.style.fontFamily = 'Inter, sans-serif';
  t.style.fontWeight = '600';
  t.style.fontSize = '0.85rem';
  t.style.borderRadius = '4px';
  t.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
  t.style.zIndex = '9999';
  t.innerHTML = msg;
  document.body.appendChild(t);
  setTimeout(() => {
    t.style.opacity = '0';
    setTimeout(() => t.remove(), 300);
  }, 2200);
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderCatalog();
  updateCartUI();

  // Mobile menu
  const mBtn = document.getElementById('mobileMenuBtn');
  const nav = document.querySelector('.nav-links');
  if (mBtn && nav) {
    mBtn.addEventListener('click', () => {
      const show = nav.style.display === 'flex';
      nav.style.display = show ? 'none' : 'flex';
      if (!show) {
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.top = '72px';
        nav.style.left = '0';
        nav.style.right = '0';
        nav.style.background = '#000000';
        nav.style.padding = '24px';
        nav.style.borderBottom = '1px solid #262626';
      }
    });
  }

  // Close modals on backdrop click
  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
      e.target.classList.remove('active');
    }
  });
});
