import heroMain from "../../assets/hero-main.png";
import card1 from "../../assets/hero-card1.png";
import heroBg from "../../assets/hero-bg.jpg";
import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
 <section
  id="hero"
  className="relative min-h-[calc(100vh-160px)] overflow-hidden"
  style={{
    backgroundImage: `
      linear-gradient(
        rgba(26,104,89,0.85),
        rgba(26,104,89,0.85)
      ),
      url(${heroBg})
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>

      {/* Blur Background */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-emerald-300/20 blur-3xl"></div>
	  <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-teal-300/15 blur-3xl"></div>

      <div className="mx-auto grid min-h-[calc(100vh-180px)] max-w-7xl grid-cols-1 items-center gap-12 px-6  lg:px-12">

        <div className="grid w-full lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}

          <div>

            <span className="uppercase tracking-[6px] text-white/70 text-sm">
              Discover the Heart of the Philippines
            </span>

            <h1 className="mt-6 md:text-5xl sm:text-4xl text-3xl font-black leading-none text-white">

             Explore the Beauty of 

              <span className="block text-amber-300">
               Marinduque
              </span>

            </h1>

            <p className="mt-8 max-w-lg text-blue-100 mx-auto">
              Experience pristine beaches, breathtaking mountains, centuries-old churches, vibrant festivals, and unforgettable adventures across the island province of Marinduque.
            </p>

            <div className="mt-10 md:flex gap-4 justify-center">

              <button  onClick={() => {
			  document
				.getElementById("search")
				?.scrollIntoView({
				  behavior: "smooth",
				});
			}}
              to="/spots"
              className="flex md:mx-0 md:mt-0 -mt-4 md:mb-0 mb-10 mx-auto items-center gap-2 rounded-full bg-yellow-400 px-8 py-4 font-semibold text-[#1a6859] cursor-pointer transition hover:scale-105">

                Explore Now

                <ArrowRight size={18} />

              </button>

              <Link
              to="/directions" className="md:inline-block rounded-full border border-white/30 px-8 py-4 text-white hover:bg-white/10 transition hover:scale-105">Plan your trip</Link>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative hidden self-stretch lg:block ">

            {/* Main Card */}

            <div className="w-[45%] absolute left-6 top-0 rotate-[-7deg] rounded-sm bg-white p-[5px] shadow-xl">

              <img
                src={heroMain}
                alt="Palad Sand Bar"
                className=""
              />

            </div>

            {/* Bottom Card */}

            <div className="w-[45%] absolute bottom-14 right-0 rotate-[8deg] rounded-sm bg-white p-[5px] shadow-xl">

              <img
                src={card1}
                alt="Rock Formation"
                className="rounded-sm"
              />

            </div>


            {/* Floating Badge */}

            <div className="absolute right-12 -top-5 rounded-2xl bg-white px-8 py-6 shadow-xl">

              <p className="text-sm text-gray-500">
                Discover 20+
			</p>
              <p className="font-semibold">
                Tourist Spots
              </p>

            </div>

            {/* Floating Card */}

            <div className="absolute left-8 bottom-10 flex items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-lg">

              <div>

                <p className="font-semibold">
                  Hidden Gems
                </p>

                <p className="text-sm text-gray-500">
                  Across Marinduque, Philippines
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}