// Отримуємо елементи
const contactLink = document.querySelector('a[href="#contact"]'); // Кнопка "Contact"
const modal = document.getElementById('contactModal'); // Модальне вікно
const closeBtn = modal.querySelector('.close'); // Хрестик для закриття

// Відкриття модального вікна
contactLink.addEventListener('click', (e) => {
    e.preventDefault(); // Щоб сторінка не стрибала
    modal.style.display = 'block'; // Показуємо модальне вікно
});

// Закриття модального вікна (хрестик)
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'; // Ховаємо модальне вікно
});

// Закриття модального вікна, якщо клацнути поза ним
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none'; // Ховаємо модальне вікно
    }
});
