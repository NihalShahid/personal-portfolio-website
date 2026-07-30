'use strict';

/* -------------------------------------------------- */
/* SIDEBAR — mobile "Show Contacts" toggle             */
/* -------------------------------------------------- */

const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');

if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener('click', function () {
    sidebar.classList.toggle('active');
  });
}


/* -------------------------------------------------- */
/* NAVBAR — switch between page articles               */
/* -------------------------------------------------- */

const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

navigationLinks.forEach(function (link) {
  link.addEventListener('click', function () {

    const targetPage = this.innerHTML.trim().toLowerCase();

    pages.forEach(function (page) {
      if (targetPage === page.dataset.page) {
        page.classList.add('active');
      } else {
        page.classList.remove('active');
      }
    });

    navigationLinks.forEach(function (navLink) {
      navLink.classList.remove('active');
    });
    link.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});


/* -------------------------------------------------- */
/* TESTIMONIALS — modal                                */
/* -------------------------------------------------- */

const testimonialsItems = document.querySelectorAll('[data-testimonials-item]');
const modalContainer = document.querySelector('[data-modal-container]');
const modalCloseBtn = document.querySelector('[data-modal-close-btn]');
const overlay = document.querySelector('[data-overlay]');

const modalImg = document.querySelector('[data-modal-img]');
const modalTitle = document.querySelector('[data-modal-title]');
const modalText = document.querySelector('[data-modal-text]');

function toggleModal() {
  if (!modalContainer || !overlay) return;
  modalContainer.classList.toggle('active');
  overlay.classList.toggle('active');
}

testimonialsItems.forEach(function (item) {
  item.addEventListener('click', function () {

    const avatar = this.querySelector('[data-testimonials-avatar]');
    const title = this.querySelector('[data-testimonials-title]');
    const text = this.querySelector('[data-testimonials-text]');

    if (modalImg && avatar) {
      modalImg.src = avatar.src;
      modalImg.alt = avatar.alt;
    }
    if (modalTitle && title) {
      modalTitle.innerHTML = title.innerHTML;
    }
    if (modalText && text) {
      modalText.innerHTML = text.innerHTML;
    }

    toggleModal();
  });
});

if (modalCloseBtn) modalCloseBtn.addEventListener('click', toggleModal);
if (overlay) overlay.addEventListener('click', toggleModal);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && modalContainer && modalContainer.classList.contains('active')) {
    toggleModal();
  }
});


/* -------------------------------------------------- */
/* PORTFOLIO — custom select (mobile filter dropdown)   */
/* -------------------------------------------------- */

const select = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-selecct-value]');
const filterBtns = document.querySelectorAll('[data-filter-btn]');
const filterItems = document.querySelectorAll('[data-filter-item]');

if (select) {
  select.addEventListener('click', function () {
    this.parentElement.classList.toggle('active');
  });
}

function filterProjects(selectedValue) {
  const normalized = selectedValue.toLowerCase();

  filterItems.forEach(function (item) {
    if (normalized === 'all' || normalized === item.dataset.category) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

selectItems.forEach(function (item) {
  item.addEventListener('click', function () {
    const selectedValue = this.innerText;

    if (selectValue) selectValue.innerText = selectedValue;
    if (select && select.parentElement) select.parentElement.classList.remove('active');

    filterProjects(selectedValue);
  });
});

let lastClickedFilterBtn = filterBtns[0];

filterBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    const selectedValue = this.innerText;

    if (selectValue) selectValue.innerText = selectedValue;
    filterProjects(selectedValue);

    if (lastClickedFilterBtn) lastClickedFilterBtn.classList.remove('active');
    this.classList.add('active');
    lastClickedFilterBtn = this;
  });
});


/* -------------------------------------------------- */
/* CONTACT FORM — enable submit only when valid         */
/* -------------------------------------------------- */

const form = document.querySelector('[data-form]');
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');

if (form && formBtn) {
  formInputs.forEach(function (input) {
    input.addEventListener('input', function () {
      const isValid = form.checkValidity();
      formBtn.toggleAttribute('disabled', !isValid);
    });
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Wire this up to your backend / form endpoint of choice.
    // e.g. fetch(form.action, { method: 'POST', body: new FormData(form) });
  });
}