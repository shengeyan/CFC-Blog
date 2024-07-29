import "../../styles/wave.scss";
import { Directive } from "vue";

const waveDirective: Directive = {
  mounted(el: any, binding: any) {
    el.addEventListener(
      "click",
      (e: MouseEvent) => {
        const customOpts = { ...binding.value };
        const opts = {
          ele: el,
          type: "hit",
          color: "rgba(98,123,245,0.1)",
          ...customOpts
        };

        const target = opts.ele as HTMLElement;
        if (target) {
          target.style.position = "relative";
          target.style.overflow = "hidden";
          const rect = target.getBoundingClientRect();
          let ripple = target.querySelector(".wave-ripple") as HTMLElement | null;
          if (!ripple) {
            ripple = document.createElement("span");
            ripple.className = "wave-ripple";
            ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + "px";
            target.appendChild(ripple);
          } else {
            ripple.className = "wave-ripple";
          }
          switch (opts.type) {
            case "center":
              ripple.style.top = `${rect.height / 2 - ripple.offsetHeight / 2}px`;
              ripple.style.left = `${rect.width / 2 - ripple.offsetWidth / 2}px`;
              break;
            default:
              ripple.style.top = `${e.pageY - rect.top - ripple.offsetHeight / 2 - window.scrollY}px`;
              ripple.style.left = `${e.pageX - rect.left - ripple.offsetWidth / 2 - window.scrollX}px`;
          }
          ripple.style.backgroundColor = opts.color;
          ripple.className = "wave-ripple z-active";
          return false;
        }
      },
      false
    );
  }
};

export default waveDirective;
