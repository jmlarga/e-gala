import { useEffect, useState } from "react";
import { getTouristSpots } from "../../services/touristSpotService";
import InfoCard from "../../components/Cards/InfoCard";

export default function Spots() {

    const [spots, setSpots] = useState([]);

    useEffect(() => {

        async function loadSpots() {

            try {

                const data = await getTouristSpots();
                setSpots(data);

            } catch (error) {

                console.error(error);

            }

        }

        loadSpots();

    }, []);

    return (
		<div className="max-w-[1280px] mx-auto px-4 py-4">

			<div className="mb-6">
				<h1 className="text-3xl font-bold text-[#1a6859]">
					Tourist Spots
				</h1>

				<p className="text-gray-500 mt-1">
					Discover the best destinations in Marinduque.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
				{spots.map((spot) => (
					<InfoCard
						key={spot.id}
						spot={spot}
					/>
				))}
			</div>

		</div>
	);

}