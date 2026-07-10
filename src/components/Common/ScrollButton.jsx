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
      aria-label="Scroll to Search"
      className="fixed bottom-[100px] right-6 p-2 md:right-10 z-[999] cursor-pointer rounded-xs bg-yellow-400 text-[##1a6859] text-xs shadow-xl hover:scale-105 transition-all duration-300 animate-bounce"
    >
      <span class="md:block hidden">Explore More</span>
	   <ArrowDown size={24} strokeWidth={2} className="mx-auto" />
    </button>
  );
};

export default ScrollButton;