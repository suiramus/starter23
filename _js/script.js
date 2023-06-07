
// Navigation
function toggleNav() {
	// Toggle Menu
	var navList = document.getElementById('nav-list');
	navList.classList.toggle('nav-visible');
	// Change Hamburger Icon
	var menuIcon = document.getElementById('menu-icon');
	menuIcon.classList.toggle('menu-icon-close');
}
// On menu click
var menuIcon = document.getElementById('menu-icon');
menuIcon.addEventListener('click', toggleNav);