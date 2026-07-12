import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import Hero from "../../components/Home/Hero";
import SearchBar from "../../components/Home/SearchBar";
import FeaturedSpots from "../../components/Home/FeaturedSpots";
import WhyVisit from "../../components/Home/WhyVisit";
import AtGlance from "../../components/Home/AtGlance";
import About from "../../components/Home/About";
import Gallery from "../../components/Home/Gallery";
import ScrollButton from "../../components/Common/ScrollButton";

import { getTouristSpots } from "../../services/touristSpotService";

const Home = () => {
    const navigate = useNavigate();

    const [spots, setSpots] = useState([]);
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState("");

    useEffect(() => {
        async function loadSpots() {
            try {
                const data = await getTouristSpots();
                setSpots(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        loadSpots();
    }, []);

    const searchResults = useMemo(() => {
    if (!query.trim()) return [];

    const search = query.toLowerCase();

    return spots.filter((spot) => {

        return (
            spot.title.rendered
                .toLowerCase()
                .includes(search)

            ||

            spot.acf?.category
                ?.toLowerCase()
                .includes(search)
        );

    }).slice(0,5);

}, [query, spots]);

    return (
        <div className="relative">

            <Hero />

            <SearchBar
                query={query}
                setQuery={setQuery}
                results={searchResults}
                onSelect={(spot) => {
                    navigate(`/spots/${spot.slug}`);
                    setQuery("");
                }}
            />

            <WhyVisit />
			

            <Gallery />
            <AtGlance />

            <About />

            <ScrollButton />

        </div>
    );
};

export default Home;