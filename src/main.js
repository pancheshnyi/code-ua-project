// 📞 Телефонна маска
const phoneInput = document.getElementById("user-phone");

if (phoneInput) {
  phoneInput.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Видаляємо все, крім цифр

    if (value.length > 12) value = value.slice(0, 12);

    let formatted = "+";
    if (value.length > 0) formatted += value.slice(0, 3);
    if (value.length > 3) formatted += "-" + value.slice(3, 5);
    if (value.length > 5) formatted += "-" + value.slice(5, 8);
    if (value.length > 8) formatted += "-" + value.slice(8, 10);
    if (value.length > 10) formatted += "-" + value.slice(10, 12);

    e.target.value = formatted;
  });
}

// 👤 Заборона цифр та зайвих символів у полі імені (під час вводу)
const nameInput = document.getElementById("user-name");

if (nameInput) {
  nameInput.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^A-Za-zА-Яа-яІіЇїЄєҐґ'\s-]/g, '');
  });
}

// 📧 + 👤 Перевірка перед відправкою форми
const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", function (e) {
    // Перевірка Email
    const emailInput = document.getElementById("user-email");
    const emailValue = emailInput.value.trim();
    const emailPattern = /^([A-Za-z0-9_.-]+)@([A-Za-z0-9_.-]+)\.([A-Za-z]{2,8})$/;

    if (!emailPattern.test(emailValue)) {
      e.preventDefault();
      alert("Будь ласка, введіть коректну email адресу.");
    }

    // Перевірка Імені
    const nameValue = nameInput.value.trim();
    const namePattern = /^[A-Za-zА-Яа-яІіЇїЄєҐґ'\s-]+$/;

    if (!namePattern.test(nameValue)) {
      e.preventDefault();
      alert("Імʼя може містити лише літери, пробіли або дефіси.");
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const openBtn = document.querySelector('.header-mob-menu');
  const closeBtn = document.querySelector('.modal-close-btn');
  const modalMenu = document.querySelector('.mob-menu');
  const menuLinks = document.querySelectorAll('.mob-menu-link');

  if (openBtn && closeBtn && modalMenu) {
    openBtn.addEventListener('click', function (event) {
      event.preventDefault(); // <-- Добавлено сюда
      modalMenu.classList.add('is-open');
    });

    closeBtn.addEventListener('click', function () {
      modalMenu.classList.remove('is-open');
    });

    menuLinks.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        modalMenu.classList.remove('is-open');

        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }
});
