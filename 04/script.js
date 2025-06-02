const searchInp = document.querySelector('[data-target="search-input"]');
const searchBtn = document.querySelector('[data-target="search-button"]');

searchBtn.addEventListener("click", () => {
  searchInp.classList.toggle("scale-x-0");
  searchBtn.classList.toggle("-translate-x-24");
  searchInp.focus();
});
