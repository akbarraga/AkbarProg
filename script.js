const MenuIcon = document.getElementById("menu-icon");
const MenuList = document.getElementById("menu-list");

MenuIcon.addEventListener("click", () => {
    MenuList.classList.toggle("hidden");
});

function toggleNavbar() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("hidden");
  }

  function closeNotification() {
    document.getElementById('notification').style.display = 'none';
  }
