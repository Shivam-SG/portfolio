// JavaScript to toggle responsive navbar
document.getElementById('navbarToggle').addEventListener('click', function() {
    const navbarMenu = document.getElementById('navbarMenu');
    navbarMenu.classList.toggle('active');
});
var menuItems = document.querySelectorAll('.navbar-menu li a');
menuItems.forEach(function(item) {
    item.addEventListener('click', function() {
        const navbarMenu = document.getElementById('navbarMenu');
        navbarMenu.classList.remove('active');
    });
});