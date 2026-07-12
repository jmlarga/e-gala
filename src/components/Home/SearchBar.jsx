import { Search } from "lucide-react";

const SearchBar = ({ query, setQuery, results, onSelect }) => {
    return (
        <section id="search" className="bg-white py-20">
            <div className="max-w-6xl mx-auto px-5">

                <div className="text-center">
                    <h2 className="text-4xl font-bold text-[#1a6859]">
                        Find Your Next Destination
                    </h2>

                    <p className="mt-4 text-gray-600">
                        Search tourist destinations across Marinduque.
                    </p>
                </div>

                <div className="relative mt-10">

                    <div className="bg-white rounded-2xl shadow-xl p-3 flex items-center">

                        <Search className="text-gray-400 ml-3" size={22} />

                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search destinations..."
                            className="w-full py-3 px-4 outline-none"
                        />

                    </div>

                   {query.trim() && (
					<div className="absolute z-50 mt-2 w-full bg-white rounded-2xl shadow-xl overflow-hidden">

						{results.length > 0 ? (

							results.map((spot) => (
								<button
									key={spot.id}
									onClick={() => onSelect(spot)}
									className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 transition text-left"
								>
									<img
										src={
											spot._embedded?.["wp:featuredmedia"]?.[0]?.source_url
										}
										alt={spot.title.rendered}
										className="w-16 h-16 rounded-lg object-cover"
									/>

									<div>
										<h4 className="font-semibold">
											{spot.title.rendered}
										</h4>

										<p className="text-sm text-gray-500">
											{spot.acf?.category}
										</p>
									</div>
								</button>
							))

						) : (

							<div className="p-8 text-center">

								<p className="text-lg font-semibold text-gray-700">
									No destinations found
								</p>

								<p className="text-sm text-gray-500 mt-2">
									Try searching for another tourist spot or category.
								</p>

							</div>

						)}

					</div>
				)}

                </div>

            </div>
        </section>
    );
};

export default SearchBar;