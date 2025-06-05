const boxesParent = document.querySelector('[data-target="boxes"]');
const boxes = boxesParent.querySelectorAll("*");

window.addEventListener("scroll", slidingBoxes);
slidingBoxes();

function slidingBoxes() {
  const screenHeight = window.innerHeight;
  boxes.forEach((box) => {
    const objBottom = box.getBoundingClientRect().bottom;
    const func = objBottom <= screenHeight ? (x) => box.classList.remove(x) : (x) => box.classList.add(x);
    ["translate-x-96", "even:-translate-x-96", "opacity-0"].forEach(func);
  });
}
