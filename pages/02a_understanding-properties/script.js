import { gsap } from "gsap";

gsap.to(".box", {
  y: -100,
  x: -200,
  opacity: 1,
  background: "#ff3e00", // svelte color,
  rotation: 360, // in deg
  duration: 0.75,
  borderRadius: "50%", // changes to circle
  ease: "power1.inOut",
  repeat: -1,
  repeatDelay: 1,
  yoyo: true,
});
