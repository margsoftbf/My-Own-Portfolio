const sections = document.querySelectorAll('.section');
const navItems = document.querySelectorAll('.nav-item-desc');

navItems.forEach(navItem => {
    navItem.addEventListener('click', function (e) {
        e.preventDefault();

        navItems.forEach(
            item => item.classList.remove('active')
        );
        sections.forEach(
            section => section.classList.remove('show')
        );

        this.classList.add('active');

        const target = this.getAttribute('href');
        document.querySelector(target)?.classList.add('show');
    });
});