import { Search, MapPinned, Trees, Church, UtensilsCrossed, Camera } from "lucide-react";



const SearchBar = () => {
  return (
    <section id="search" className="bg-gray-50 py-20">

      <div className="max-w-6xl mx-auto px-5">

        {/* Heading */}

        <div className="text-center">

          <h2 className="text-4xl font-bold text-[#1a6859]">
            Find Your Next Destination
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Search tourist destinations, restaurants, churches, beaches,
            mountains, and more throughout Marinduque.
          </p>

        </div>

        {/* Search */}

        <div className="mt-10 bg-white rounded-2xl shadow-xl p-3 flex flex-col md:flex-row gap-3">

          <div className="flex-1 flex items-center px-4">

            <Search
              className="text-gray-400 mr-3"
              size={22}
            />

            <input
              type="text"
              placeholder="Search destinations..."
              className="w-full outline-none py-3 text-lg"
            />

          </div>

          <button className="bg-[#1a6859] hover:bg-[#155448] text-white px-8 py-4 rounded-xl transition font-semibold">
            Search
          </button>

        </div>

        {/* Categories */}

        

      </div>

    </section>
  );
};

export default SearchBar;