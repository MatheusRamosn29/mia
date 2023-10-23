// Menu
const menuButton = document.querySelector('#menu-button');
const menuList = document.querySelector('#menu-list');

menuButton.addEventListener('click', () => {
    menuList.classList.toggle('active');
})

function leaveMenuMobile() {
    menuList.classList.remove('active');
}