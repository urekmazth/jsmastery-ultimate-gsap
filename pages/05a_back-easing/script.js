import { gsap } from "gsap";

const tabs = document.querySelectorAll(".tab");
const indicator = document.querySelector(".indicator");
const tabRow = document.querySelector(".tab-row");

const updateIndicator = (target) => {
  const tabBounds = target.getBoundingClientRect();
  const rowBounds = tabRow.getBoundingClientRect();

  // the  width of the indicator
  const width = tabBounds.width;
  // moves the indicator to match the tab position
  const offset = tabBounds.left - rowBounds.left;

  gsap.to(indicator, {
    width: 0,
    x: offset,
    duration: 0,
    onComplete: () => {
      gsap.to(indicator, {
        width,
        ease: "back.out(1.7)",
        duration: 0.4
      });
    },
  });
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // remove active class from all tabs
    tabs.forEach((t) => t.classList.remove('active'));

    updateIndicator(tab);

    tab.classList.add('active')
  });
});


updateIndicator(document.querySelector('.tab.active'))