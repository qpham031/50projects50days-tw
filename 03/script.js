const navItems = document.querySelectorAll('[data-target="nav-item"]');
const navSwitch = document.querySelector('[data-target="nav-switch"]');
const mainContainer = document.querySelector('main');
const navSwitchBtns = document.querySelectorAll('[data-target="nav-switch-btn"]');
let navStatus = false;

const transformSwitch = () => {
  navStatus = !navStatus;
  navSwitch.classList.toggle("-rotate-90");
  mainContainer.classList.toggle("rotate-[-20deg]");
  const value = navStatus ? null : 0;
  navItems.forEach((item) => {
    item.style.translate = value;
    item.style.opacity = value;
    item.classList.toggle('delay-200');
  });
};

navSwitchBtns.forEach((sw) => {
  sw.addEventListener("click", transformSwitch);
});
