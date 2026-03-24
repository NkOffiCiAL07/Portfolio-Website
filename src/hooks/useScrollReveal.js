import { useEffect, useRef } from "react";

/**
 * Custom hook that reveals elements when they scroll into view.
 * Uses IntersectionObserver for performance.
 *
 * @param {Object} options
 * @param {number} options.threshold - visibility ratio to trigger (default 0.15)
 * @param {string} options.rootMargin - margin around root (default "0px 0px -50px 0px")
 * @returns {React.RefObject} ref to attach to the container element
 */
const useScrollReveal = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: options.threshold || 0.15,
        rootMargin: options.rootMargin || "0px 0px -50px 0px",
      }
    );

    // Observe the container and all children with data-reveal
    const revealElements = node.querySelectorAll("[data-reveal]");
    revealElements.forEach((el) => observer.observe(el));

    // Also observe the container itself if it has data-reveal
    if (node.hasAttribute("data-reveal")) {
      observer.observe(node);
    }

    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return ref;
};

export default useScrollReveal;
