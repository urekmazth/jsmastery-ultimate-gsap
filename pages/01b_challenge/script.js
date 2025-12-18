import { gsap } from "gsap";

gsap.to('.card', {
    opacity: 1,
    repeat: -1,
    yoyo: true,
    duration: 0.25,
    boxShadow: "0px 40px 70px 40px red"
})