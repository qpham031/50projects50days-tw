const background = document.querySelector('[data-target="background"]');
const percentage = document.querySelector('[data-target="percentage"]');

let load = 0;
const intUpPer = setInterval(updatePercentage, 30);

function updatePercentage() {
  load++;

  // Mark as full load
  if (load > 99) {
    clearInterval(intUpPer);
    load = 100; // just in case
  }

  // Update content and styles
  percentage.innerText = `${load}%`;
  background.style.filter = `blur(${scale(load, [30, 100], [24, 0])}px)`
  percentage.style.opacity = `${scale(load, [30, 100], [1, 0])}`;
};


const scale = (val, rngIn, rngOut) => {
  // Delay until first range min hit
  if (val <= rngIn[0]) {
    return rngOut[0];
  }
  // Compute value changed by rate
  const rate = (rngOut[1] - rngOut[0]) / (rngIn[1] - rngIn[0]);
  const diff = val - rngIn[0];
  return diff * rate + rngOut[0];
};
