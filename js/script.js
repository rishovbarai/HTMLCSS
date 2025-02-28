document.getElementById('burger-menu').addEventListener('click', function() {
    var nav = document.getElementById('nav');
    var burgerMenu = document.getElementById('burger-menu');
    nav.classList.toggle('open');
    burgerMenu.classList.toggle('open');
});

// Close menu when clicking on a menu item
document.querySelectorAll('.nav ul li a').forEach(function(menuItem) {
    menuItem.addEventListener('click', function() {
        var nav = document.getElementById('nav');
        var burgerMenu = document.getElementById('burger-menu');
        nav.classList.remove('open');
        burgerMenu.classList.remove('open');
    });
});