import { Compass, MapPinned, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Compass,
    title: "Explore with Confidence",
    description:
      "Discover Marinduque's hidden gems through curated destinations, interactive guides, and reliable travel information.",
  },
  {
    icon: MapPinned,
    title: "Plan Your Journey",
    description:
      "Find attractions, learn how to get there, and make the most of your visit with easy-to-follow travel resources.",
  },
  {
    icon: HeartHandshake,
    title: "Support Local Tourism",
    description:
      "e-Gala promotes Marinduque's culture, heritage, local businesses, and communities by making tourism information more accessible.",
  },
];

const About = () => {
  return (
    <section className="bg-gray-50 pt-12" id="about">
      <div className="max-w-7xl mx-auto px-5">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <span className="text-[#1a6859] font-semibold uppercase tracking-[4px]">
              About Marinduque
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              The Heart of the
              <span className="text-[#1a6859]">
                {" "}Philippines
              </span>
            </h2>
			<p className="mt-8 text-lg text-gray-600 leading-8">
			  Known as the <strong>"Heart of the Philippines,"</strong> Marinduque is a
			  beautiful island province renowned for its pristine beaches, lush mountains,
			  historic landmarks, and vibrant cultural traditions.
			</p>

			<p className="mt-6 text-lg text-gray-600 leading-8">
			  Whether you're exploring natural wonders, experiencing the famous Moriones
			  Festival, or simply enjoying the warmth of the locals, Marinduque promises an
			  unforgettable island adventure for every traveler.
			</p>

          </div>

          {/* Right */}

          <div className="space-y-6">

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="sm:flex gap-5 bg-gray-50 rounded-3xl p-6 shadow-sm hover:shadow-lg transition"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#1a6859]/10 flex items-center justify-center flex-shrink-0  sm:mx-0 mx-auto sm:mb-0 mb-3">
                    <Icon
                      size={30}
                      className="text-[#1a6859]"
                    />
                  </div>

                  <div>

                    <h3 className="text-xl font-bold text-gray-800 sm:text-left">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-gray-600 leading-7 sm:text-left">
                      {feature.description}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>
	  <div className="w-full mx-auto px-5 bg-gray-600 mt-12 py-4">
		<p className="text-xs text-white"><strong>Disclaimer:</strong> e-Gala is an independent personal project and is not affiliated with any government agency, LGU, tourism office, or private organization. Information is provided for general reference only.</p>
      </div>
    </section>
	
  );
};

export default About;