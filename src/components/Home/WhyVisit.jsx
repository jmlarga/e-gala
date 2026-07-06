import {
  Waves,
  Mountain,
  Landmark,
  Utensils,
  Camera,
  HeartHandshake,
} from "lucide-react";

const reasons = [
  {
    icon: Waves,
    title: "Beautiful Beaches",
    description:
      "Relax on pristine white-sand beaches and enjoy crystal-clear waters perfect for swimming and island hopping.",
  },
  {
    icon: Mountain,
    title: "Nature Adventures",
    description:
      "Explore scenic mountains, waterfalls, caves, and breathtaking landscapes for every type of adventurer.",
  },
  {
    icon: Landmark,
    title: "Rich Culture & Heritage",
    description:
      "Discover centuries-old churches, historical landmarks, and experience the famous Moriones Festival.",
  },
  {
    icon: Utensils,
    title: "Local Delicacies",
    description:
      "Taste authentic Marinduqueño cuisine, fresh seafood, and delicacies loved by both locals and visitors.",
  },
  {
    icon: Camera,
    title: "Instagram-worthy Views",
    description:
      "Capture unforgettable moments with stunning coastal scenery, mountain viewpoints, and hidden gems.",
  },
  {
    icon: HeartHandshake,
    title: "Warm Hospitality",
    description:
      "Experience the genuine warmth, friendliness, and hospitality that Marinduqueños proudly share with every visitor.",
  },
];

const WhyVisit = () => {
  return (
    <section className="bg-gray-50 py-12" id="visits">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="text-[#1a6859] font-semibold uppercase tracking-[4px]">
            Why Visit
          </span>

          <h2 className="mt-3 md:text-4xl text-3xl text-2xl font-bold text-gray-800 text-[#1a6859]">
            Discover What Makes Marinduque Special
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
            Whether you're looking for adventure, cultural experiences,
            breathtaking landscapes, or a peaceful island escape,
            Marinduque has something unforgettable waiting for you.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="group bg-white rounded-3xl p-8 shadow hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >

                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto color-[#1a6859]`}
                >
                  <Icon size={44} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-800">
                  {reason.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {reason.description}
                </p>

                <div className="mt-6 h-1 w-16 bg-[#1a6859] rounded-full group-hover:w-full transition-all duration-500"></div>

              </div>
            );
          })}

        </div>
		
      </div>
    </section>
	
  );
};

export default WhyVisit;