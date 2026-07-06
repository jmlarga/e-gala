import diningData from "./diningData";
import InfoCard from "../../components/Cards/InfoCard";

export default function Dining() {

    return (
        <>
            <h2 className="text-xl font-bold mb-4">
                Dining
            </h2>

            <div className="grid gap-4">
                {diningData.map((restaurant) => (
                    <InfoCard
                        key={restaurant.id}
                        item={restaurant}
                    />
                ))}
            </div>
        </>
    );

}