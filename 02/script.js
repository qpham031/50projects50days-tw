// Action buttons
const btnPrev = document.querySelector('[data-action="prev"]');
const btnNext = document.querySelector('[data-action="next"]');
const progressBar = document.querySelector('[data-target="progress-bar"]');
const progressStep = document.querySelectorAll('[data-target="progress-step"]');

const MAX_STEP = progressStep.length - 1;
let step = 0;

// Config
const SHADE_ACTIVE = "blue-400";
const SHADE_DEACTIVE = "gray-200";
const CFG_NEXT = {
  delta: 1,
  addShade: SHADE_ACTIVE,
  remShade: SHADE_DEACTIVE,
};
const CFG_PREV = {
  delta: -1,
  addShade: SHADE_DEACTIVE,
  remShade: SHADE_ACTIVE,
};

// Event handler
function handler() {
  // Set up config
  const isNext = this === btnNext;
  let { delta, addShade, remShade } = isNext ? CFG_NEXT : CFG_PREV;
  const stepBefore = step;
  step += delta;

  // Update if the button reached the edge
  btnPrev.disabled = step === 0;
  btnNext.disabled = step === MAX_STEP;

  // Update progress bar
  progressBar.style.width = `${(step / MAX_STEP) * 100}%`;

  // Update progress step
  const progUpdateStep = isNext ? step : stepBefore;
  const progCircle = progressStep[progUpdateStep];
  progCircle.classList.add(`border-${addShade}`);
  progCircle.classList.remove(`border-${remShade}`);
}

// Add click events
[btnPrev, btnNext].forEach((btn) => btn.addEventListener("click", handler));
