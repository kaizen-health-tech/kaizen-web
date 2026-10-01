import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-24 right-8 z-[99] lg:bottom-8">
      {isVisible && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-midnight text-white shadow-[0_12px_30px_rgba(40,27,85,0.25)] ring-1 ring-white/10 transition duration-500 ease-out-soft hover:-translate-y-0.5 hover:bg-light-plum active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M12 19V5M6 11l6-6 6 6" />
          </svg>
        </button>
      )}
    </div>
  );
}
