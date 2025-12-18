import { gsap } from "gsap";

const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const resume = document.querySelector(".resume");
const restart = document.querySelector(".restart");
const reverse = document.querySelector(".reverse");
const kill = document.querySelector(".kill");
const yoyo = document.querySelector(".yoyo");
const repeat = document.querySelector(".repeat");

const state = {
    isYoyo: false,
    isRepeat: false,
}

const animation = gsap.to(".box", {
  opacity: 1,
  rotation: 360,
  borderRadius: "50%",
  scale: 1.25,
  duration: 2,
});

play.addEventListener("click", () => {
    // play the animation from the 0 start time mark
  animation.play(0);
});

pause.addEventListener("click", () => {
  animation.pause();
});

resume.addEventListener("click", () => {
  animation.resume();
});

restart.addEventListener("click", () => {
  animation.restart();
});

reverse.addEventListener("click", () => {
  animation.reverse();
});

kill.addEventListener("click", () => {
  animation.kill();
});

yoyo.addEventListener("click", () => {
    state.isYoyo = !state.isYoyo;

  animation.yoyo(state.isYoyo);

  gsap.to('.yoyo', {
    boxShadow: state.isYoyo ? "0 16px 32px 0 red" : ""
  })
});

repeat.addEventListener("click", () => {
    state.isRepeat = !state.isRepeat
    animation.repeat(state.isRepeat ? 2 : undefined); // animation will run 03 times

    gsap.to('.repeat', {
    boxShadow: state.isRepeat ? "0 16px 32px 0 red" : ""
  })
})
