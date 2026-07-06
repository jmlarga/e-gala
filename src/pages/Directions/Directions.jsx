import React from "react";
import map from "../../assets/marinduque-route.png";

import {
  Bus,
  Ship,
  MapPin,
  Clock3,
  TriangleAlert,
} from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Bus,
    title: "Travel from Manila to Lucena City or Dalahican Port",
    description:
      "Ride a bus from Metro Manila bound for Lucena City or directly to Dalahican Port. Several bus companies operate daily trips, and some JAC Liner and JAM Liner buses continue all the way to the ferry terminal, allowing you to skip the transfer in Lucena.",
    extra: [
      "DLTB Co.",
      "JAM Liner",
      "JAC Liner",
      "Some JAC & JAM trips continue directly to Dalahican Port",
    ],
    time: "3–4 Hours",
  },
  {
    number: 2,
    icon: MapPin,
    title: "Proceed to Dalahican Port",
    description:
      "If your bus terminates at Lucena Grand Terminal, ride a jeepney or tricycle to Dalahican Port. If your bus goes directly to the port, you may skip this step.",
    extra: [],
    time: "0–20 Minutes",
  },
  {
    number: 3,
    icon: Ship,
    title: "Ride the Ferry",
    description:
      "Board a ferry bound for Balanacan Port (Mogpog) or Cawit Port (Boac), depending on the sailing schedule.",
    extra: [
      "🚢 Montenegro Shipping Lines",
      "🚢 Starhorse Shipping Lines",
    ],
    time: "3–4 Hours",
  },
  {
    number: 4,
    icon: MapPin,
    title: "Continue Your Journey",
    description:
      "Upon arriving in Marinduque, local transportation such as vans, jeepneys, and tricycles are readily available to take you to your hotel or chosen destination.",
    extra: [
      "🚐 Van",
      "🚌 Jeepney",
      "🛺 Tricycle",
    ],
    time: "10–60 Minutes",
  },
];

const DirectionsView = () => {
  return (
    <section className="max-w-6xl mx-auto px-5 py-12">

      {/* Header */}

      <div className="text-center">

        <h1 className="md:text-4xl text-2xl font-bold text-[#1a6859]">
          Getting to Marinduque
        </h1>
	
        <p className="text-gray-600 max-w-3xl mx-auto mt-[30px] text-center">
          Traveling to Marinduque is simple and convenient. Daily buses operate from Metro Manila to Lucena City, while selected JAC Liner and JAM Liner trips continue directly to Dalahican Port, where ferries depart for Marinduque.
        </p>

        <img
          src={map}
          alt="Marinduque Route Map"
          className="rounded-3xl shadow-xl mt-10 mx-auto md:w-[60%] mx-auto"
        />

      </div>

      {/* Timeline */}

      <div className="relative mt-16">

        <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-green-200"></div>

        <div className="space-y-10">

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative md:flex gap-6"
              >
                {/* Circle */}

                <div className="relative z-10 w-16 h-16 rounded-full bg-[#1a6859] text-white flex items-center justify-center shadow-lg shrink-0 md:mx-0 mx-auto mb-0 md:mb-10">

                  <Icon size={28} />

                </div>

                {/* Card */}

                <div className="flex-1 bg-white rounded-3xl shadow-lg border border-gray-100 p-8 hover:-translate-y-1 hover:shadow-2xl transition-all">

                  <div className="flex flex-wrap justify-between items-center gap-4">

                    <h2 className="md:text-2xl text-xl font-bold text-gray-800 md:mx-0 mx-auto">
                      {step.number}. {step.title}
                    </h2>

                    <div className="flex items-center gap-2 bg-green-100 text-[#1a6859] px-4 py-2 rounded-full font-semibold md:mx-0 mx-auto">

                      <Clock3 size={18} />

                      {step.time}

                    </div>

                  </div>

                  <p className="text-gray-600 leading-6 mt-5 md:text-left">
                    {step.description}
                  </p>

                  {step.extra.length > 0 && (
                    <div className="grid md:grid-cols-3 gap-3 mt-6">

                      {step.extra.map((item) => (
                        <div
                          key={item}
                          className={`rounded-xl py-3 px-4 text-center font-medium ${item.includes("directly") ? "bg-green-50 border border-green-300 text-[#1a6859]"    : "bg-gray-100"}`}>
                          {item}
                        </div>
                      ))}

                    </div>
                  )}

                </div>

              </div>
            );
          })}

        </div>

      </div>

      {/* Summary */}

      <div className="bg-[#1a6859] text-white rounded-3xl p-10 mt-16">

        <h2 className="md:text-3xl text-2xl font-bold mb-8">
          Estimated Travel Time
        </h2>

        <div className="grid md:grid-cols-2 gap-5">

          {[
            ["Manila → Lucena", "3–4 hrs"],
            ["Lucena → Dalahican (if needed)", "0–20 mins"],
            ["Ferry to Marinduque", "3–4 hrs"],
            ["Port → Destination", "10–60 mins"],
          ].map(([route, time]) => (
            <div
              key={route}
              className="bg-white/10 rounded-xl p-5 flex justify-between"
            >
              <span>{route}</span>

              <strong>{time}</strong>
            </div>
          ))}

        </div>

        <div className="mt-8 text-center text-2xl font-bold">
          Total Travel Time: 7–9 Hours
        </div>

      </div>

      {/* Tips */}

      <div className="bg-yellow-50 border border-yellow-300 rounded-3xl mt-12 p-8">

        <div className="flex items-center gap-3">

          <TriangleAlert className="text-yellow-600" />

          <h2 className="md:text-3xl text-2xl font-bold">
            Travel Tips
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-6">

          {[
            "Arrive at least one hour before ferry departure.",
            "Check ferry schedules before traveling.",
            "Bring enough cash for transportation and terminal fees.",
            "Book accommodations early during holidays.",
            "Schedules may change because of weather conditions.",
            "Keep your ticket until you reach your destination.",
          ].map((tip) => (
            <div
              key={tip}
             className="bg-white rounded-xl p-4 shadow-sm flex items-start gap-3"
            >
              ✅<>  <span className="text-left">{tip}</span></>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default DirectionsView;