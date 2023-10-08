import type { DirectiveBinding } from 'vue'

import defaultImage from '@/assets/default.png';

const lazyImageObserver = new IntersectionObserver((entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const lazyImage: HTMLImageElement = entry.target as HTMLImageElement;
      console.log("loading", lazyImage);

      // set data-srcset as image srcset
      lazyImage.src = lazyImage.getAttribute("data-src") as string;

      // add class after image has loaded
      lazyImage.addEventListener("load", () => {
        lazyImage.classList.add("is-lazyloaded");
      });
      // add class after image has loaded
      lazyImage.addEventListener("error", () => {
        lazyImage.src = defaultImage;
      });      

      // unobserve after
      observer.unobserve(lazyImage);
    }
  });
});

export default {
    mounted(el: HTMLImageElement, binding: DirectiveBinding) {
      console.log("unobserving", el);
      lazyImageObserver.observe(el);
    },
    unmounted(el: HTMLImageElement) {
        console.log("unobserving", el);
        lazyImageObserver.unobserve(el);
    },
}
