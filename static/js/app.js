const hamburger = document.querySelector('.hamburger');
const banner = document.querySelector('.banner');
const navi = document.querySelector('.navi');
const navLinks = document.querySelectorAll('.navlink');
const body = document.querySelector('.body');
let menuOpen = false;

hamburger.addEventListener('click', () => {
    if (!menuOpen) {
        openNav();
    } else {
        closeNav();
    }
});

for (const navLink of navLinks) {
    navLink.addEventListener('click', () => {
        if (menuOpen) {
            closeNav();
        }
    });
}

function openNav() {
    hamburger.classList.add('open');
    banner.classList.add('sidekick');
    navi.classList.add('navi-open');
    body.classList.add('lock-scroll');
    menuOpen = true;
}

function closeNav() {
    hamburger.classList.remove('open');
    banner.classList.remove('sidekick');
    navi.classList.remove('navi-open');
    body.classList.remove('lock-scroll');
    menuOpen = false;
}