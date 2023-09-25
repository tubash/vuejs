export default {
    mounted(el, binding, vnode) {
        if (!el.parentNode.lazyLoadItemObserver) {
          console.log("creating new observer");
        }
        el.parentNode.lazyLoadItemObserver =
          el.parentNode.lazyLoadItemObserver ||
          new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const lazyImage = entry.target;
                console.log("loading", lazyImage);

                // set data-srcset as image srcset
                lazyImage.src = lazyImage.getAttribute("data-src");

                // add class after image has loaded
                lazyImage.addEventListener("load", () => {
                  lazyImage.classList.add("is-lazyloaded");
                });
                // unobserve after
                el.parentNode.lazyLoadItemObserver.unobserve(lazyImage);
              }
            });
          });
        console.log("observing", el);
        el.parentNode.lazyLoadItemObserver.observe(el);
    },
    unmounted(el) {
        console.log("unobserving", el);
        el.parentNode.lazyLoadItemObserver.unobserve(el);
    },
}
