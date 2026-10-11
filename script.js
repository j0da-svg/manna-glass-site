const siteData = {
  stats: [
    { label: 'تاريخ التأسيس', value: '13/04/2003' },
    { label: 'موظف متخصص', value: '+350' },
    { label: 'عميل راضٍ', value: '+120000' },
    { label: 'فرع', value: '20' },
    { label: 'سنة خبرة', value: '20' }
  ],
  filters: ['الكل', 'أمان', 'عزل', 'ديكور'],
  products: [
    {
      name: 'زجاج مصفح',
      description: 'مناسب للتطبيقات التي تتطلب مستوى أمان أعلى وتماسكاً أفضل عند الكسر.',
      use: 'الأبواب والواجهات والمناطق الحساسة',
      tags: ['أمان']
    },
    {
      name: 'زجاج سيكوريت',
      description: 'زجاج معالج حرارياً يناسب الاستخدامات اليومية ويُستخدم كثيراً في الأبواب والقواطع.',
      use: 'الأبواب والقواطع الداخلية',
      tags: ['أمان']
    },
    {
      name: 'زجاج مزدوج',
      description: 'حل مناسب لتحسين الأداء في العزل بين الطبقات الزجاجية.',
      use: 'الواجهات والنوافذ',
      tags: ['عزل']
    },
    {
      name: 'زجاج ملون',
      description: 'خيارات ألوان متعددة لدعم الهوية الجمالية للمساحات.',
      use: 'الديكور والواجهات الداخلية',
      tags: ['ديكور']
    },
    {
      name: 'زجاج عاكس',
      description: 'يُستخدم في المشاريع التي تحتاج مظهراً خارجياً مميزاً وتحكماً أفضل بالوهج.',
      use: 'الواجهات الخارجية',
      tags: ['عزل', 'ديكور']
    },
    {
      name: 'مرايات ألمنيوم',
      description: 'مرايا متعددة المقاسات للاستخدام المنزلي والتجاري.',
      use: 'الحمامات والممرات وصالات العرض',
      tags: ['ديكور']
    },
    {
      name: 'مرايات معتقة',
      description: 'مظهر جمالي كلاسيكي يناسب التصاميم الداخلية الخاصة.',
      use: 'الديكور الداخلي',
      tags: ['ديكور']
    },
    {
      name: 'رش رمل',
      description: 'تشطيب زجاجي يساعد على تعزيز الخصوصية مع الحفاظ على الإضاءة.',
      use: 'القواطع الداخلية والمكاتب',
      tags: ['ديكور', 'أمان']
    }
  ],
  advisor: [
    {
      key: 'الأمان',
      recommendation: 'غالباً ما يناسبك الزجاج المصفح أو السيكوريت بحسب موقع التركيب.'
    },
    {
      key: 'الخصوصية',
      recommendation: 'يمكن البدء بخيارات رش الرمل أو الزجاج الملون حسب درجة الخصوصية المطلوبة.'
    },
    {
      key: 'العزل',
      recommendation: 'الزجاج المزدوج أو العاكس من الخيارات الشائعة لتحسين الأداء.'
    },
    {
      key: 'الديكور',
      recommendation: 'المرايا والزجاج الملون والمعتق خيارات مناسبة لإبراز الهوية البصرية.'
    }
  ],
  branches: [
    { city: 'الرياض', title: 'حي بدر طريق الإمام مالك', phones: ['0559289100', '0549020039'], hours: '7:00 ص-5:00 م' },
    { city: 'الرياض', title: 'طريق المدينة المنورة، الفيصلية', phones: ['0556232100'], hours: '7:00 ص-5:00 م' },
    { city: 'الخرج', title: 'المدينة الصناعية', phones: ['0562723714', '0558393100'], hours: '7:00 ص-5:00 م' },
    { city: 'الرياض', title: 'صناعية النسيم', phones: ['0557142100'], hours: '7:00 ص-5:00 م' },
    { city: 'الرياض', title: 'مصنع سيكوريت الرياض، الصناعية الثانية، طريق الخرج', phones: ['0506565676', '0537290208'], hours: '7:00 ص-5:00 م' },
    { city: 'وادي الدواسر', title: 'حي صناعية الشرفاء', phones: ['0558508100'], hours: '7:00 ص-5:00 م' },
    { city: 'الرياض', title: 'المقاولات والتركيب، طريق المدينة المنورة', phones: ['0557749100'], hours: '7:00 ص-5:00 م' },
    { city: 'الدمام', title: 'الخضرية', phones: ['0505787593', '0552300125'], hours: '7:00 ص-5:00 م' },
    { city: 'الجبيل', title: 'صناعية العريفي', phones: ['0549167422'], hours: '7:00 ص-5:00 م' },
    { city: 'الطائف', title: 'صناعية الطائف', phones: ['0554653100', '0557935100'], hours: '7:00 ص-5:00 م' },
    { city: 'مكة المكرمة', title: 'صناعية الدواس الجديدة', phones: ['0599885092', '0554219100'], hours: '7:00 ص-5:00 م' },
    { city: 'جدة', title: 'حي النخيل', phones: ['0557118100'], hours: '7:30 ص-5:30 م' },
    { city: 'جدة', title: 'مصنع سيكوريت جدة، حي المنار', phones: ['0551917100', '0558517100'], hours: '7:00 ص-5:00 م' },
    { city: 'جدة', title: 'المقاولات والتركيب، حي المنار', phones: ['0551807100'], hours: '7:00 ص-5:00 م' },
    { city: 'المدينة المنورة', title: 'الصادقية', phones: ['0506565396', '0535350161'], hours: '7:00 ص-5:00 م' },
    { city: 'خميس مشيط', title: 'خميس مشيط', phones: ['0546077909'], hours: '7:00 ص-5:00 م' }
  ],
  warehouses: [
    { city: 'جدة', title: 'مستودع جدة - الحمدانية', phones: ['0557118100'] },
    { city: 'الدمام', title: 'مستودع الدمام - طريق الظهران الجبيل السريع', phones: ['0536969761'] },
    { city: 'الرياض', title: 'مستودع الرياض - طريق الإمام مالك حي بدر', phones: ['0551503100'] },
    { city: 'المدينة المنورة', title: 'مستودع المدينة - الصادقية حي العيون', phones: ['0506565396', '0535350161'] },
    { city: 'خميس مشيط', title: 'مستودع خميس مشيط', phones: ['0546077909'] }
  ]
};

const statsGrid = document.getElementById('stats-grid');
const productFilters = document.getElementById('product-filters');
const productsGrid = document.getElementById('products-grid');
const productSelect = document.getElementById('product-select');
const useCaseButtons = document.getElementById('use-case-buttons');
const advisorResult = document.getElementById('advisor-result');
const branchesGrid = document.getElementById('branches-grid');
const warehousesGrid = document.getElementById('warehouses-grid');

function phoneLinks(phones) {
  return phones
    .map((phone) => `<a href="tel:${phone}">${phone}</a>`)
    .join(' • ');
}

function renderStats() {
  statsGrid.innerHTML = siteData.stats
    .map(
      (item) => `
        <article class="stat">
          <strong>${item.value}</strong>
          <span>${item.label}</span>
        </article>
      `
    )
    .join('');
}

function renderProducts(filter = 'الكل') {
  const list = filter === 'الكل' ? siteData.products : siteData.products.filter((item) => item.tags.includes(filter));
  productsGrid.innerHTML = list
    .map(
      (item) => `
        <article class="product-card">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <p class="branch-meta">الاستخدام: ${item.use}</p>
          <p class="product-tag">${item.tags.join(' • ')}</p>
        </article>
      `
    )
    .join('');
}

function renderProductFilters() {
  productFilters.innerHTML = siteData.filters
    .map(
      (filter, index) => `<button class="chip ${index === 0 ? 'active' : ''}" type="button" data-filter="${filter}">${filter}</button>`
    )
    .join('');

  productFilters.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-filter]');
    if (!button) return;
    [...productFilters.querySelectorAll('button')].forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    renderProducts(button.dataset.filter);
  });
}

function renderAdvisor() {
  useCaseButtons.innerHTML = siteData.advisor
    .map((item) => `<button class="chip" type="button" data-use-case="${item.key}">${item.key}</button>`)
    .join('');

  useCaseButtons.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-use-case]');
    if (!button) return;

    [...useCaseButtons.querySelectorAll('button')].forEach((item) => item.classList.remove('active'));
    button.classList.add('active');

    const found = siteData.advisor.find((item) => item.key === button.dataset.useCase);
    advisorResult.textContent = found ? found.recommendation : 'يرجى اختيار استخدام من الخيارات المتاحة.';
  });
}

function renderBranches(query = '') {
  const normalized = query.trim();
  const list = !normalized ? siteData.branches : siteData.branches.filter((branch) => branch.city.includes(normalized));

  branchesGrid.innerHTML = list
    .map(
      (branch) => `
        <article class="branch-card">
          <h3>${branch.city}</h3>
          <p>${branch.title}</p>
          <p class="branch-meta">ساعات العمل: ${branch.hours}</p>
          <p>${phoneLinks(branch.phones)}</p>
        </article>
      `
    )
    .join('');

  if (!list.length) {
    branchesGrid.innerHTML = '<p class="note">لا توجد نتائج لهذه المدينة.</p>';
  }
}

function renderWarehouses() {
  warehousesGrid.innerHTML = siteData.warehouses
    .map(
      (item) => `
        <article class="branch-card">
          <h3>${item.city}</h3>
          <p>${item.title}</p>
          <p>${phoneLinks(item.phones)}</p>
        </article>
      `
    )
    .join('');
}

function populateProductSelect() {
  productSelect.innerHTML = ['<option value="">اختر</option>']
    .concat(siteData.products.map((item) => `<option value="${item.name}">${item.name}</option>`))
    .join('');
}

function setupQuoteForm() {
  const form = document.getElementById('quote-form');
  const status = document.getElementById('form-status');
  const submit = document.getElementById('quote-submit');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      status.textContent = 'يرجى تعبئة جميع الحقول المطلوبة بشكل صحيح.';
      return;
    }

    const data = new FormData(form);
    const message = [
      'مرحباً، أود طلب عرض سعر.',
      `الاسم: ${data.get('name')}`,
      `الجوال: ${data.get('phone')}`,
      `المدينة: ${data.get('city')}`,
      `نوع المنتج: ${data.get('product')}`,
      `المقاس التقريبي: ${data.get('size')}`,
      `هل يحتاج تركيب: ${data.get('installation')}`
    ].join('\n');

    const url = `https://wa.me/966554348100?text=${encodeURIComponent(message)}`;
    submit.disabled = true;
    submit.textContent = 'جارٍ تجهيز الرسالة...';

    setTimeout(() => {
      submit.disabled = false;
      submit.textContent = 'إنشاء رسالة واتساب';
      window.open(url, '_blank', 'noopener');
      status.textContent = 'تم تجهيز الرسالة، يمكنك إكمال الإرسال عبر واتساب.';
    }, 250);
  });
}

function setupMenuToggle() {
  const button = document.querySelector('.menu-toggle');
  const links = document.getElementById('nav-links');

  button.addEventListener('click', () => {
    const opened = links.classList.toggle('open');
    button.setAttribute('aria-expanded', String(opened));
  });
}

function setupBranchSearch() {
  const input = document.getElementById('branch-search');
  input.addEventListener('input', () => renderBranches(input.value));
}

function setYear() {
  document.getElementById('year').textContent = new Date().getFullYear();
}

renderStats();
renderProductFilters();
renderProducts();
renderAdvisor();
renderBranches();
renderWarehouses();
populateProductSelect();
setupQuoteForm();
setupMenuToggle();
setupBranchSearch();
setYear();
