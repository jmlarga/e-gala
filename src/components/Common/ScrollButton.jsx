import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const heroSection = document.getElementById("hero");
    if (!heroSection) return;

    // Create an observer to watch the hero section
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the hero section is intersecting, show the button
        // If it is not intersecting (user scrolled past it), hide it
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when at least 10% of the hero is visible
      }
    );

    observer.observe(heroSection);

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);

  const scrollToSearch = () => {
    const searchSection = document.getElementById("search");
    searchSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Only render if visible
  if (!isVisible) return null;

  return (
   <button
  onClick={scrollToSearch}
  aria-label="Scroll Down"
  className="fixed bottom-[100px] left-1/2 z-50 -translate-x-1/2 rounded-full cursor-pointer border border-white/30 bg-white/10 md:p-3 p-1 text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:scale-110 animate-bounce"
>
  <ArrowDown size={15} strokeWidth={2} />
</button>
  );
};

export default ScrollButton;