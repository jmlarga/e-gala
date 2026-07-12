import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTouristSpot } from "../../services/touristSpotService";

export default function SpotDetails() {
    const { slug } = useParams();

    const [spot, setSpot] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadSpot() {
            try {
                const data = await getTouristSpot(slug);
                setSpot(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        loadSpot();
    }, [slug]);

    if (loading) {
        return (
            <div className="text-center py-20">
                Loading...
            </div>
        );
    }

    if (!spot) {
        return (
            <div className="text-center py-20">
                Tourist spot not found.
            </div>
        );
    }

    const image =
        spot._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

    return (
        <div className="max-w-5xl mx-auto">
				<h1 className="text-3xl font-bold text-[#1a6859] pt-4">
					{spot.title.rendered}
				</h1>
				<span className="bg-white/20 px-3 py-5 rounded-full text-sm">
                                {spot.acf.category}
                            </span>
            {image && (
                <img
                    src={image}
                    alt={spot.title.rendered}
                    className="md:w-[75%] w-full h-auto pt-3 mx-auto object-cover rounded-xl"
                />
            )}

            <div className="mt-6">

                
					
                <div
                    className="mt-4 prose max-w-none text-[#4B5563] text-sm"
                    dangerouslySetInnerHTML={{
                        __html: spot.acf.description
                    }}
                />

            </div>

        </div>
    );
}