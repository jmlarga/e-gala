const AtGlance = () => {
  return (
    <section className="bg-white py-12" id="glance">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="text-center mb-16">

          <h2 className="mt-3 md:text-4xl text-3xl text-2xl font-bold text-gray-800 text-[#1a6859]">
            Marinduque at Glance
          </h2>
		 <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
			  Discover the island at a glance through key highlights that showcase its natural beauty, rich heritage, and welcoming communities.
			</p>
		</div>
        {/* Cards */}

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8">

			<div className="text-center">
				<h2 className="text-5xl font-bold text-[#1a6859]">20+</h2>
				<p className="mt-2 text-gray-600">Tourist Destinations</p>
			</div>

			<div className="text-center">
				<h2 className="text-5xl font-bold text-[#1a6859]">6</h2>
				<p className="mt-2 text-gray-600">Municipalities</p>
			</div>

			<div className="text-center">
				<h2 className="text-5xl font-bold text-[#1a6859]">365</h2>
				<p className="mt-2 text-gray-600">Days to Explore</p>
			</div>

			<div className="text-center">
				<h2 className="text-5xl font-bold text-[#1a6859]">100%</h2>
				<p className="mt-2 text-gray-600">Local Experience</p>
			</div>

		</div>
		
      </div>
    </section>
	
  );
};

export default AtGlance;