// Hamburger menu toggle function
function toggleHamburgerMenu() {
  const menu = document.getElementById('nav-menu');
  menu.classList.toggle('active');
}

// Add event listener to hamburger icon
document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('nav-menu').classList.toggle('active');
});