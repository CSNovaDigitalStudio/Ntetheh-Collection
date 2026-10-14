const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    menuToggle.textContent = isOpen ? '×' : '☰';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    menuToggle.textContent = '☰';
  }));
}

document.querySelectorAll('.product-enquire').forEach(link => {
  link.addEventListener('click', () => {
    const product = link.dataset.product;
    const select = document.querySelector('#productSelect');
    if (select && product) select.value = product;
  });
});

const form = document.querySelector('#enquiryForm');
const feedback = document.querySelector('#formFeedback');
if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const product = String(data.get('product') || '').trim();
    const message = String(data.get('message') || '').trim();
    const text = [
      'Hi Ntetheh’s Collection! I would like to make an enquiry.',
      '',
      `Name: ${name}`,
      phone ? `My contact number: ${phone}` : '',
      `Interested in: ${product}`,
      `Enquiry: ${message}`
    ].filter(Boolean).join('\n');
    const url = `https://wa.me/27605058857?text=${encodeURIComponent(text)}`;
    if (feedback) feedback.textContent = 'WhatsApp will open with your message ready to review and send.';
    window.open(url, '_blank', 'noopener,noreferrer');
  });
}
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
