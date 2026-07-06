import { Link } from "react-router-dom";
import heroImage from "../../assets/hero-banner.jpg";
import { Mouse, ChevronDown } from "lucide-react";
const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-180px)] flex items-center justify-center overflow-hidden py-6" id="hero">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Marinduque"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl mx-auto">

          {/* Badge */}
          <span className="inline-flex items-center rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-4 py-2 md:text-sm text-[12px] text-white font-medium">
				Discover the Heart of the Philippines
          </span>

          {/* Heading */}
          <h1 className="md:mt-6 mt-3 text-3xl md:text-4xl font-extrabold text-white leading-tight">
            Explore the Beauty of{" "}
            <span className="text-[#66D19E]">
              Marinduque
            </span>
          </h1>

          {/* Description */}
          <p className="md:mt-6 mt-3 text-md md:text-lg text-gray-200 leading-5 max-w-2xl">
            Experience pristine beaches, breathtaking mountains,
            centuries-old churches, vibrant festivals, and unforgettable
            adventures across the island province of Marinduque.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-7 justify-center">

            <button onClick={() => {
			  document
				.getElementById("search")
				?.scrollIntoView({
				  behavior: "smooth",
				});
			}}
              to="/spots"
              className="px-8 py-4 rounded-xl bg-[#1a6859] hover:bg-[#155448] transition text-white font-semibold shadow-lg md:mx-0 mx-auto"
            >
              Explore Destinations
            </button>

            <Link
              to="/directions"
              className="px-8 py-4 rounded-xl border border-white text-white hover:bg-white hover:text-[#1a6859] transition font-semibold md:mx-0 mx-auto"
            >
              Plan Your Trip
            </Link>

          </div>

          

        </div>
      </div>
    </section>
  );
};

export default Hero;