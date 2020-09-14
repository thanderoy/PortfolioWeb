const hamburger = document.querySelector('.hamburger');
const banner = document.querySelector('.banner');
const navi = document.querySelector('.navi');
const navLinks = document.querySelectorAll('.navlink');
let menuOpen = false;

hamburger.addEventListener('click', () => {
    if (!menuOpen) {
        hamburger.classList.add('open');
        banner.classList.add('sidekick');
        navi.classList.add('navi-open');
        menuOpen = true;
    } else {
        hamburger.classList.remove('open');
        banner.classList.remove('sidekick');
        navi.classList.remove('navi-open');
        menuOpen = false;
    }
});

for (const navLink of navLinks) {
    navLink.addEventListener('click', () => {
        if (menuOpen) {
            hamburger.classList.remove('open');
            banner.classList.remove('sidekick');
            navi.classList.remove('navi-open');
            menuOpen = false;
        }
    });
}