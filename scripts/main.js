// Пример массива товаров
const products = [
    {
        name: 'Куртаи сабук',
        description: 'Барои сафар ва рӯзҳои гарм.',
        price: '350 сом',
        image: 'https://via.placeholder.com/200x150?text=Kurta'
    },
    {
        name: 'Сумкаи роҳат',
        description: 'Барои сафарҳои кӯтоҳ.',
        price: '220 сом',
        image: 'https://via.placeholder.com/200x150?text=Bag'
    },
    {
        name: 'Айнаки офтобӣ',
        description: 'Муҳофизат аз офтоб ва услуб.',
        price: '120 сом',
        image: 'https://via.placeholder.com/200x150?text=Glasses'
    }
];

function renderProducts() {
    const list = document.getElementById('product-list');
    list.innerHTML = '';
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="price">${product.price}</div>
        `;
        list.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    // Обработка формы
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
        form.reset();
    });
});

// Прозрачность header при скролле
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('header--transparent');
    } else {
        header.classList.remove('header--transparent');
    }
});

// Мобильное меню бургер
const burger = document.querySelector('.burger');
const mobileNav = document.querySelector('.mobile-nav');
burger.addEventListener('click', function() {
    burger.classList.toggle('active');
    mobileNav.classList.toggle('active');
    const expanded = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', !expanded);
});

// Кнопка закрытия мобильного меню
const closeBtn = document.querySelector('.close-btn');
if (closeBtn && mobileNav && burger) {
    closeBtn.addEventListener('click', function() {
        mobileNav.classList.remove('active');
        burger.classList.remove('active');
        burger.setAttribute('aria-expanded', 'false');
    });
} 