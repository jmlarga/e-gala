import hotelsData from "./hotelsData";
import InfoCard from "../../components/Cards/InfoCard";

export default function Hotels() {

    return (
        <>
            <h2 className="text-xl font-bold mb-4">
                Hotels & Resorts
            </h2>

            <div className="grid gap-4">
                {hotelsData.map((hotel) => (
                    <InfoCard
                        key={hotel.id}
                        item={hotel}
                    />
                ))}
            </div>
        </>
    );

}