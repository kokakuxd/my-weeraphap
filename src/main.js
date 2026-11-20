import './style.css';

const dishes = [
  // --- อาหารฝรั่งเศส (FRENCH DISHES) ---
  {
    id: 1,
    country: 'france',
    originLabel: 'ฝรั่งเศส',
    name: 'Boeuf Bourguignon',
    thaiName: 'สตูว์เนื้อตุ๋นไวน์แดง',
    category: 'อาหารจานหลัก',
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=900&q=80',
    shortDesc: 'เนื้อวัวตุ๋นไฟอ่อนในไวน์แดงเบอร์กันดีจนเปื่อยนุ่ม หอมกลิ่นสมุนไพรและเบคอนรมควัน',
    fullDesc: 'อาหารพื้นเมืองระดับตำนานจากแคว้นเบอร์กันดี นำเนื้อวัวส่วนติดมันมาเคี่ยวช้าๆ กับไวน์แดง น้ำสต็อกเนื้อ เห็ดแชมปิญอง หอมหัวใหญ่เล็ก และช่อสมุนไพรจนได้ซอสที่เข้มข้นเงางาม',
    ingredients: 'เนื้อวัว, ไวน์แดงเบอร์กันดี, เบคอน, เห็ดแชมปิญอง, แครอท, กระเทียม, ใบไทม์',
    recommendation: 'ควรทานตอนร้อนๆ คู่กับมันบดเนื้อเนียน (Mashed Potatoes) หรือขนมปังบาแก็ตอบกรอบ เพื่อใช้ซับน้ำซอสไวน์แดงที่เข้มข้นให้หมดจาน'
  },
  {
    id: 2,
    country: 'france',
    originLabel: 'ฝรั่งเศส',
    name: 'Duck Confit',
    thaiName: 'กงฟีขาเป็ดหนังกรอบ',
    category: 'อาหารจานหลัก',
    image: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&w=900&q=80',
    shortDesc: 'ขาเป็ดหมักเกลือและสมุนไพร ตุ๋นในน้ำมันเป็ดด้วยไฟอ่อน แล้วนำมาย่างจนหนังกรอบเนื้อนุ่ม',
    fullDesc: 'เทคนิคการถนอมอาหารโบราณของฝรั่งเศสตะวันตกเฉียงใต้ ทำให้เนื้อเป็ดด้านในนุ่มชุ่มฉ่ำแทบละลายในปาก ตัดกับหนังด้านนอกที่กรอบเกรียม',
    ingredients: 'ขาเป็ดติดสะโพก, ไขมันเป็ด, เกลือทะเล, กระเทียม, ใบกระวาน, โรสแมรี่',
    recommendation: 'แนะนำให้ทานคู่กับมันฝรั่งผัดกระเทียม (Pommes Sarladaises) และสลัดผักรสเปรี้ยวอมหวานเล็กน้อย เพื่อช่วยตัดความมันและชูรสชาติของหนังเป็ดกรอบ'
  },
  {
    id: 3,
    country: 'france',
    originLabel: 'ฝรั่งเศส',
    name: 'Ratatouille',
    thaiName: 'ราตาตูยสตูว์ผักรวม',
    category: 'อาหารเพื่อสุขภาพ',
    image: 'https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?auto=format&fit=crop&w=900&q=80',
    shortDesc: 'ผักสดหลากสีจากแคว้นโพรวองซ์ อบรวมกับซอสมะเขือเทศและสมุนไพรหอมกรุ่น',
    fullDesc: 'เมนูผักขึ้นชื่อจากเมืองนีซ นำมะเขือม่วง ซูกินี พริกหวาน และมะเขือเทศมาฝานบางเรียงสลับสี ราดด้วยซอสมะเขือเทศปรุงรสด้วยน้ำมันมะกอกและสมุนไพร',
    ingredients: 'มะเขือม่วง, ซูกินี, มะเขือเทศ, พริกหวาน, น้ำมันมะกอก, สมุนไพรโพรวองซ์',
    recommendation: 'สามารถทานเป็นจานหลักสำหรับสายมังสวิรัติ หรือสั่งเป็นเครื่องเคียงทานคู่กับสเต็กเนื้อย่างและปลาย่างเพื่อเพิ่มความสดชื่น'
  },
  {
    id: 4,
    country: 'france',
    originLabel: 'ฝรั่งเศส',
    name: 'Crème Brûlée',
    thaiName: 'เครมบรูว์เล',
    category: 'ของหวาน',
    image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?auto=format&fit=crop&w=900&q=80',
    shortDesc: 'คัสตาร์ดวานิลลาเนื้อเนียนนุ่ม ด้านบนเคลือบด้วยน้ำตาลไหม้กรุบกรอบ',
    fullDesc: 'ขนมหวานสุดคลาสสิกที่สร้างความแตกต่างของเนื้อสัมผัสอย่างลงตัว ระหว่างหน้าคาราเมลกรอบบางกับเนื้อครีมคัสตาร์ดเย็นฉ่ำหอมฝักวานิลลาแท้',
    ingredients: 'วิปปิ้งครีม, ไข่แดง, ฝักวานิลลา, น้ำตาลทรายแดง',
    recommendation: 'ใช้หลังช้อนเคาะหน้าคาราเมลให้แตกออกก่อนตักทานพร้อมเนื้อคัสตาร์ดเย็นด้านล่าง แนะนำให้ทานคู่กับชาเอิร์ลเกรย์ร้อนหรือเอสเปรสโซ'
  },

  // --- อาหารอิตาลี (ITALIAN DISHES) ---
  {
    id: 5,
    country: 'italy',
    originLabel: 'อิตาลี',
    name: 'Spaghetti alla Carbonara',
    thaiName: 'สปาเกตตีคาโบนาราต้นตำรับ',
    category: 'พาสต้า',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=900&q=80',
    shortDesc: 'เส้นพาสต้าคลุกเคล้าซอสครีมมี่จากไข่แดง ชีสเปโคริโน และแก้มหมูเค็มกรอบ',
    fullDesc: 'สูตรดั้งเดิมจากกรุงโรมที่ไม่ได้ใช้วิปปิ้งครีม แต่เกิดความเข้มข้นจากการตีไข่แดงผสมกับชีส Pecorino Romano น้ำต้มเส้นพาสต้า และไขมันหอมๆ จากแก้มหมูหมักเกลือ',
    ingredients: 'เส้นสปาเกตตี, ไข่แดง, ชีส Pecorino Romano, แก้มหมู Guanciale, พริกไทยดำ',
    recommendation: 'ควรทานทันทีที่เสิร์ฟร้อนๆ เพื่อให้ซอสไข่แดงและชีสเคลือบเส้นพาสต้าแบบ Al Dente อย่างพอดี และโรยพริกไทยดำบดใหม่เพิ่มความหอม'
  },
  {
    id: 6,
    country: 'italy',
    originLabel: 'อิตาลี',
    name: 'Pizza Margherita',
    thaiName: 'พิซซ่ามาร์เกริตา',
    category: 'พิซซ่าเตาถ่าน',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=80',
    shortDesc: 'พิซซ่าแป้งบางขอบฟูสไตล์เนเปิลส์ หน้าซอสมะเขือเทศ ชีสมอสซาเรลลาสด และใบโหระพา',
    fullDesc: 'ตัวแทนสีธงชาติอิตาลี (แดง ขาว เขียว) อบในเตาฟืนอุณหภูมิสูงเพียง 90 วินาที จนขอบแป้งพองกรอบและมีจุดไหม้เกรียมหอมกลิ่นควัน',
    ingredients: 'แป้งพิซซ่าหมักยีสต์, มะเขือเทศซานมาร์ซาโน, มอสซาเรลลาชีสสด, ใบโหระพา, น้ำมันมะกอก',
    recommendation: 'สไตล์เนเปิลส์แท้จะใช้มีดและส้อมตัดแบ่งเป็นชิ้น แล้วพับปลายแหลมเข้าหากันก่อนทาน เพื่อให้ซอสมะเขือเทศและชีสเยิ้มๆ ไม่หก'
  },
  {
    id: 7,
    country: 'italy',
    originLabel: 'อิตาลี',
    name: 'Risotto alla Milanese',
    thaiName: 'รีซอตโต้หญ้าฝรั่นสไตล์มิลาน',
    category: 'ข้าวอิตาเลียน',
    image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=900&q=80',
    shortDesc: 'ข้าวอาร์โบริโอเคี่ยวกับน้ำซุปจนเนื้อครีมมี่ สีเหลืองทองอร่ามจากหญ้าฝรั่นแท้',
    fullDesc: 'เมนูขึ้นชื่อจากทางตอนเหนือของอิตาลี ใช้ข้าวเมล็ดสั้นสายพันธุ์ Arborio ค่อยๆ เติมน้ำสต็อกร้อนทีละน้อยพร้อมคนตลอดเวลา ปรุงกลิ่นและสีด้วยหญ้าฝรั่น',
    ingredients: 'ข้าว Arborio, หญ้าฝรั่น (Saffron), น้ำสต็อก, ไวน์ขาว, ชีส Parmigiano-Reggiano, เนย',
    recommendation: 'ความอร่อยอยู่ที่เมล็ดข้าวที่นุ่มนอกแต่ยังมีความหนึบตรงแกนกลางเล็กน้อย นิยมเสิร์ฟเป็นจานแรก (Primo) หรือทานคู่กับขาหมูตุ๋น Ossobuco'
  },
  {
    id: 8,
    country: 'italy',
    originLabel: 'อิตาลี',
    name: 'Tiramisu',
    thaiName: 'ทีรามิสุ',
    category: 'ของหวาน',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=900&q=80',
    shortDesc: 'ขนมหวานรสกาแฟเอสเปรสโซ สลับชั้นกับครีมชีสมาสคาร์โปเนเนื้อเบาและผงโกโก้',
    fullDesc: 'ทำจากบิสกิตเลดี้ฟิงเกอร์จุ่มกาแฟเอสเปรสโซเข้มข้น วางสลับชั้นกับครีมมาสคาร์โปเนตีฟู โรยหน้าด้วยผงโกโก้รสขมนิดๆ ตัดความหวาน',
    ingredients: 'ชีสมาสคาร์โปเน, บิสกิต Savoiardi, กาแฟเอสเปรสโซ, ไข่, น้ำตาล, ผงโกโก้',
    recommendation: 'ตักให้ลึกถึงชั้นล่างสุดในคำเดียว เพื่อให้ได้รสสัมผัสครบทั้งผงโกโก้ ครีมมาสคาร์โปเน และบิสกิตชุ่มกาแฟเอสเปรสโซ'
  }
];

// ==========================================
// 1. DARK / LIGHT THEME TOGGLE
// ==========================================
const htmlEl = document.documentElement;
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeText = document.getElementById('theme-text');

function applyTheme(isDark) {
  if (isDark) {
    htmlEl.classList.add('dark');
    if (themeIcon) themeIcon.textContent = '☀️';
    if (themeText) themeText.textContent = 'โหมดสว่าง';
  } else {
    htmlEl.classList.remove('dark');
    if (themeIcon) themeIcon.textContent = '🌙';
    if (themeText) themeText.textContent = 'โหมดมืด';
  }
}

const savedTheme = localStorage.getItem('theme');
applyTheme(savedTheme === 'dark');

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const isCurrentlyDark = htmlEl.classList.contains('dark');
    const nextDark = !isCurrentlyDark;
    applyTheme(nextDark);
    localStorage.setItem('theme', nextDark ? 'dark' : 'light');
  });
}

// ==========================================
// 2. PAGE NAVIGATION (HOME VS GALLERY)
// ==========================================
const pageHome = document.getElementById('page-home');
const pageGallery = document.getElementById('page-gallery');
const navPageBtns = document.querySelectorAll('.nav-page-btn');
const navPageLinks = document.querySelectorAll('.nav-page-link');

function switchPage(pageName) {
  if (pageName === 'gallery') {
    pageHome.classList.add('hidden');
    pageGallery.classList.remove('hidden');
  } else {
    pageGallery.classList.add('hidden');
    pageHome.classList.remove('hidden');
  }

  navPageBtns.forEach((btn) => {
    if (btn.dataset.page === pageName) {
      btn.classList.add('text-amber-600', 'bg-amber-50', 'dark:bg-amber-500/10', 'dark:text-amber-400');
      btn.classList.remove('text-stone-600', 'dark:text-stone-300');
    } else {
      btn.classList.remove('text-amber-600', 'bg-amber-50', 'dark:bg-amber-500/10', 'dark:text-amber-400');
      btn.classList.add('text-stone-600', 'dark:text-stone-300');
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

navPageBtns.forEach((btn) => {
  btn.addEventListener('click', () => switchPage(btn.dataset.page));
});

navPageLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    switchPage(link.dataset.page);
  });
});

// ==========================================
// 3. RENDER HOME MENU GRID
// ==========================================
const grid = document.getElementById('dish-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('dish-modal');
const closeModalBtn = document.getElementById('close-modal');

function renderDishes(filter = 'all') {
  if (!grid) return;
  const filtered = filter === 'all' ? dishes : dishes.filter((d) => d.country === filter);

  grid.innerHTML = filtered
    .map((dish) => {
      const badgeStyle =
        dish.country === 'france'
          ? 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-500/15 dark:text-blue-300 dark:border-blue-500/30'
          : 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/15 dark:text-emerald-300 dark:border-emerald-500/30';

      return `
        <article class="flex flex-col justify-between rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-amber-500 dark:border-stone-800 dark:bg-stone-900/80 dark:hover:border-amber-500/50">
          <div>
            <div class="flex items-center justify-between gap-2">
              <span class="rounded border px-2.5 py-0.5 text-xs font-medium ${badgeStyle}">
                ${dish.originLabel}
              </span>
              <span class="text-xs text-stone-500">${dish.category}</span>
            </div>
            <h3 class="font-serif-title mt-4 text-2xl font-bold text-stone-900 dark:text-white">${dish.name}</h3>
            <p class="text-xs font-medium text-amber-600 dark:text-amber-400">${dish.thaiName}</p>
            <p class="mt-3 text-sm leading-relaxed text-stone-600 dark:text-stone-400">${dish.shortDesc}</p>
          </div>
          <button
            data-id="${dish.id}"
            class="detail-btn mt-6 w-full rounded-lg border border-stone-300 bg-stone-50 py-2 text-xs font-medium text-stone-700 transition hover:border-amber-600 hover:bg-amber-600 hover:text-white dark:border-stone-700 dark:bg-stone-800/60 dark:text-stone-200 dark:hover:border-amber-500 dark:hover:bg-amber-500 dark:hover:text-stone-950"
          >
            ดูรายละเอียดวัตถุดิบ
          </button>
        </article>
      `;
    })
    .join('');

  document.querySelectorAll('.detail-btn').forEach((btn) => {
    btn.addEventListener('click', () => openDishModal(Number(btn.dataset.id)));
  });
}

// ==========================================
// 4. RENDER GALLERY PAGE (OPPOSITE SIDES)
// ==========================================
function renderGallerySection(country, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const items = dishes.filter((d) => d.country === country);

  container.innerHTML = items
    .map((dish, index) => {
      const isImageRight = index % 2 === 1;
      const accentColor =
        country === 'italy'
          ? 'text-emerald-600 dark:text-emerald-400 border-emerald-500'
          : 'text-blue-600 dark:text-blue-400 border-blue-500';

      return `
        <div class="grid items-center gap-8 md:grid-cols-2 lg:gap-12">
          <!-- Image Box -->
          <div class="${isImageRight ? 'md:order-2' : 'md:order-1'} overflow-hidden rounded-2xl border border-stone-200 bg-stone-100 shadow-md dark:border-stone-800 dark:bg-stone-900">
            <img
              src="${dish.image}"
              alt="${dish.name}"
              loading="lazy"
              class="h-72 w-full object-cover transition duration-500 hover:scale-105 md:h-80"
            />
          </div>

          <!-- Recommendation Text Box (Opposite to Image) -->
          <div class="${isImageRight ? 'md:order-1' : 'md:order-2'} space-y-4">
            <div class="flex items-center gap-3">
              <span class="text-xs font-semibold tracking-wider uppercase ${accentColor.split(' ').slice(0, 2).join(' ')}">
                ${dish.category}
              </span>
              <span class="text-stone-300 dark:text-stone-700">•</span>
              <span class="text-xs text-stone-500">${dish.originLabel}</span>
            </div>

            <div>
              <h3 class="font-serif-title text-3xl font-bold text-stone-900 md:text-4xl dark:text-white">
                ${dish.name}
              </h3>
              <p class="text-sm font-medium text-amber-600 dark:text-amber-400">${dish.thaiName}</p>
            </div>

            <p class="text-sm leading-relaxed text-stone-600 md:text-base dark:text-stone-300">
              ${dish.fullDesc}
            </p>

            <!-- Serving Recommendation Callout -->
            <div class="rounded-xl border-l-4 ${accentColor.split(' ')[2]} bg-stone-100/80 p-4 dark:bg-stone-900/90">
              <h4 class="text-xs font-semibold tracking-wider text-stone-800 uppercase dark:text-stone-200">
                คำแนะนำการทาน (Serving Tip)
              </h4>
              <p class="mt-1 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                ${dish.recommendation}
              </p>
            </div>

            <p class="text-xs text-stone-500 dark:text-stone-400">
              <strong class="text-stone-700 dark:text-stone-300">วัตถุดิบหลัก:</strong> ${dish.ingredients}
            </p>
          </div>
        </div>
      `;
    })
    .join('');
}

// ==========================================
// 5. MODAL & FILTER EVENTS
// ==========================================
function openDishModal(id) {
  const dish = dishes.find((d) => d.id === id);
  if (!dish || !modal) return;

  const originEl = document.getElementById('modal-origin');
  originEl.textContent = `${dish.originLabel} • ${dish.category}`;
  originEl.className =
    dish.country === 'france'
      ? 'rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-500/20 dark:text-blue-300'
      : 'rounded bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-300';

  document.getElementById('modal-title').textContent = dish.name;
  document.getElementById('modal-subtitle').textContent = dish.thaiName;
  document.getElementById('modal-desc').textContent = dish.fullDesc;
  document.getElementById('modal-ingredients').textContent = dish.ingredients;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

if (closeModalBtn) {
  closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  });
}

if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  });
}

filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterBtns.forEach((b) => {
      b.classList.remove('bg-amber-600', 'text-white', 'dark:bg-amber-500', 'dark:text-stone-950');
      b.classList.add('border', 'border-stone-300', 'bg-white', 'text-stone-600', 'dark:border-stone-700', 'dark:bg-stone-900', 'dark:text-stone-300');
    });
    btn.classList.remove('border', 'border-stone-300', 'bg-white', 'text-stone-600', 'dark:border-stone-700', 'dark:bg-stone-900', 'dark:text-stone-300');
    btn.classList.add('bg-amber-600', 'text-white', 'dark:bg-amber-500', 'dark:text-stone-950');

    renderDishes(btn.dataset.filter);
  });
});

// Initialize Renders
renderDishes();
renderGallerySection('italy', 'italy-gallery-list');
renderGallerySection('france', 'france-gallery-list');