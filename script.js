import { animate, scroll } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm"

document.querySelectorAll("[data-animate]").forEach((el) => {
  scroll(
    animate(el, { opacity: [0, 1], y: [24, 0] }, { duration: 0.6, easing: "ease-out" }),
    { target: el, offset: ["start 90%", "start 55%"] }
  )
})
