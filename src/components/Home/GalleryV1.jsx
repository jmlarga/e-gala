import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { getTouristSpots } from "../../services/touristSpotService";

export default function Gallery() {
    const [spots, setSpots] = useState([]);
    const [loading, setLoading] = useState(true);

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [active, setActive] = useState(null);

    useEffect(() => {
        async function loadSpots() {
            try {
                const data = await getTouristSpots();

                setSpots(data);

                if (data.length > 0) {
                    setActive(data[0]);
                }
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        loadSpots();
    }, []);

    const categories = useMemo(() => {
        return [
            "All",
            ...new Set(
                spots
                    .map((spot) => spot.acf?.category)
                    .filter(Boolean)
            ),
        ];
    }, [spots]);

    const filtered = useMemo(() => {
        if (selectedCategory === "All") return spots;

        return spots.filter(
            (spot) =>
                spot.acf?.category === selectedCategory
        );
    }, [spots, selectedCategory]);
		useEffect(() => {
			if (filtered.length > 0) {
				setActive(filtered[0]);
			}
		}, [filtered]);
    if (loading) {
        return (
            <section className="py-20 text-center">
                Loading gallery...
            </section>
        );
    }

    if (!active) return null;

    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-6">
				<span className="text-[#1a6859] font-semibold uppercase tracking-widest">
            Discover
          </span>
                <h2 className="text-4xl font-bold text-center text-[#1a6859]">
                    Explore Through Photos
                </h2>

                <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
					Explore some of Marinduque's most beautiful tourist destinations,
					from white-sand beaches and mountain trails to historic churches
					and breathtaking natural attractions.
				  </p>


                <div className="flex flex-wrap justify-center gap-3 mt-8">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() =>
                                setSelectedCategory(category)
                            }
                            className={`px-4 py-2 rounded-full border transition ${
                                selectedCategory === category
                                    ? "bg-[#1a6859] text-white"
                                    : "bg-white hover:bg-gray-100"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid lg:grid-cols-2 gap-6 mt-10">

                    {/* Featured Image */}

                    <div className="relative overflow-hidden rounded-3xl h-[500px] group">

                        <img
                            src={
                                active._embedded?.["wp:featuredmedia"]?.[0]
                                    ?.source_url
                            }
                            alt={active.title.rendered}
                            className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                        <div className="absolute bottom-0 p-8 text-white w-full">

                            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                                {active.acf?.category}
                            </span>

                            <h3 className="text-3xl font-bold mt-3">
                                {active.title.rendered}
                            </h3>

                        </div>

                    </div>

                    {/* Thumbnail List */}

                    <div className="space-y-4">

                        {filtered.map((spot) => (

                            <button
                                key={spot.id}
                                onClick={() => setActive(spot)}
                                className="w-full flex gap-4 p-3 bg-white rounded-2xl shadow hover:shadow-lg transition text-left"
                            >

                                <img
                                    src={
                                        spot._embedded?.[
                                            "wp:featuredmedia"
                                        ]?.[0]?.source_url
                                    }
                                    alt={spot.title.rendered}
                                    className="w-24 h-24 rounded-xl object-cover"
                                />

                                <div>

                                    <p className="text-xs text-[#1a6859] font-semibold">
                                        {spot.acf?.category}
                                    </p>

                                    <h4 className="font-semibold">
                                        {spot.title.rendered}
                                    </h4>

                                    <p
										className="text-gray-600 mt-3 line-clamp-3"
										dangerouslySetInnerHTML={{
										  __html:
											spot.acf.description
										}}
									  />

                                </div>

                            </button>

                        ))}

                    </div>
				
                </div>
				<div className="w-full justify-center mt-12">
					<Link
						to="/spots"
						className="inline-flex mx-auto items-center gap-2 bg-[#1a6859] text-white px-6 py-3 rounded-full hover:bg-[#145246] transition"
					>
						View All Destinations →
					</Link>
				</div>

            </div>
        </section>
    );
}