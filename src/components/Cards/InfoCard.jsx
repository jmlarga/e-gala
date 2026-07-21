
import { Link } from "react-router-dom";

export default function InfoCard({ spot }) {

    console.log("Spot:", spot);

    if (!spot) {
        return <div>No spot data</div>;
    }

    const image =
        spot._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

    return (
        <Link to={`/spots/${spot.slug}`}>
            <article className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl hover:-translate-y-1 transition">

                {image && (
                    <img
                        src={image}
                        alt={spot.title.rendered}
                        className="w-full h-56 object-cover"
                    />
                )}

                <div className="p-5">

                    <h3 className="font-bold text-xl">
                        {spot.title.rendered}
                    </h3>
					<p
                    className="text-gray-600 mt-3 line-clamp-3"
                    dangerouslySetInnerHTML={{
                      __html:
                        spot.acf.description
                    }}
                  />
				  
                    Explore Destination
                    <span className="ml-2">→</span>
                  

                </div>

            </article>

        </Link>

    );

}