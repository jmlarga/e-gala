import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeaturedSpots = () => {
  const [spots, setSpots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://e-gala-api.freedev.app/wp-json/wp/v2/tourist_spots?_embed&per_page=6"
    )
      .then((res) => res.json())
      .then((data) => {
        setSpots(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="py-24">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg text-gray-500">
            Loading featured destinations...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-white" id="spots">
      <div className="max-w-7xl mx-auto px-5">

        {/* Header */}

        <div className="text-center mb-16">

          <span className="text-[#1a6859] font-semibold uppercase tracking-widest">
            Discover
          </span>

          <h2 className="md:text-3xl text-2xl font-bold mt-3">
            Featured Destinations
          </h2>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Explore some of Marinduque's most beautiful tourist destinations,
            from white-sand beaches and mountain trails to historic churches
            and breathtaking natural attractions.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {spots.map((spot) => {

            const image =
              spot._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
              "https://placehold.co/600x400";

            return (

              <div
                key={spot.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
              >

                {/* Image */}

                <div className="overflow-hidden">

                  <img
                    src={image}
                    alt={spot.title.rendered}
                    className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
                  />

                </div>

                {/* Body */}

                <div className="p-6">

                  <h3
                    className="text-xl font-bold mt-2"
                    dangerouslySetInnerHTML={{
                      __html: spot.title.rendered,
                    }}
                  />

                  <p
                    className="text-gray-600 mt-3 line-clamp-3"
                    dangerouslySetInnerHTML={{
                      __html:
                        spot.acf.description
                    }}
                  />

                  <Link
                    to={`/spots/${spot.slug}`}
                    className="inline-flex items-center mt-6 font-semibold text-[#1a6859] hover:gap-3 transition-all"
                  >
                    Explore Destination
                    <span className="ml-2">→</span>
                  </Link>

                </div>

              </div>

            );
          })}

        </div>

        {/* Button */}

        <div className="text-center mt-16">

          <Link
            to="/spots"
            className="inline-flex items-center bg-[#1a6859] text-white px-8 py-4 rounded-xl hover:bg-[#155448] transition font-semibold"
          >
            View All Destinations
          </Link>

        </div>

      </div>
    </section>
  );
};

export default FeaturedSpots;
