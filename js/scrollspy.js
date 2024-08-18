document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.dotnav > li');
    const verticalText = document.querySelector('.vertical-text');

    function changeActiveLink() {
        let index = sections.length;

        while (index--) {
            const section = sections[index];
            const rect = section.getBoundingClientRect();
            const offset = window.innerHeight / 2;

            if (rect.top <= offset && rect.bottom >= offset) {
                navLinks.forEach(link => link.classList.remove('active'));
                navLinks[index].classList.add('active');

                // Оновлення тексту в .vertical-text
                verticalText.textContent = section.getAttribute('data-section-number');
                break;
            }
        }
    }

    window.addEventListener('scroll', changeActiveLink);
    window.addEventListener('resize', changeActiveLink);

    // Ініціалізуємо значення при завантаженні сторінки
    changeActiveLink();
});
