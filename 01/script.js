const cards = [...document.querySelectorAll('[data-component="item-card"]')];

function itemClick() {
  const activeCard = cards.find((cardItem) =>
    cardItem.classList.contains("flex-10")
  );
  if (this === activeCard) {
    return;
  }
  [this, activeCard].forEach((item) => {
    const title = item.querySelector('[data-target="card.title"]');
    item.classList.toggle("flex-10");
    item.classList.toggle("flex-1");
    title.classList.toggle("opacity-0");
  });
}

cards.forEach((card) => card.addEventListener("click", itemClick));
