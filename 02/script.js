const MAX_STEP = 3;
let step = 0;

// Tailwind step classes
// w-[calc((100%-var(--circle))*0/3)]
// w-[calc((100%-var(--circle))*1/3)]
// w-[calc((100%-var(--circle))*2/3)]
// w-[calc((100%-var(--circle))*3/3)]
const stepClass = (step) => `w-[calc((100%-var(--circle))*${step}/3)]`;

// Config
const SHADE_ACTIVE = "blue-400";
const SHADE_DEACTIVE = "gray-200";
const DATA_NEXT = {
  delta: 1,
  addShade: SHADE_ACTIVE,
  remShade: SHADE_DEACTIVE,
};
const DATA_PREV = {
  delta: -1,
  addShade: SHADE_DEACTIVE,
  remShade: SHADE_ACTIVE,
};

// Action buttons
const btnPrev = document.querySelector('[data-action="prev"]');
const btnNext = document.querySelector('[data-action="next"]');
const progressBar = document.querySelector('[data-target="progress-bar"]');
const progressStep = document.querySelectorAll('[data-target="progress-step"]');

// Event handler
function handler() {
  // Set up config
  const isNext = this === btnNext;
  let { delta, addShade, remShade } = isNext ? DATA_NEXT : DATA_PREV;
  const stepBefore = step;
  step += delta;

  // Update if the button reached the edge
  btnPrev.disabled = step === 0;
  btnNext.disabled = step === MAX_STEP;

  // Update progress bar
  progressBar.classList.remove(stepClass(stepBefore));
  progressBar.classList.add(stepClass(step));

  // Update progress step
  const progUpdateStep = isNext ? step : stepBefore;
  progressStep[progUpdateStep].classList.add(`border-${addShade}`);
  progressStep[progUpdateStep].classList.remove(`border-${remShade}`);
}

// Add click events
[btnPrev, btnNext].forEach((btn) => btn.addEventListener("click", handler));
