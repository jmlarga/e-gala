import Hero from "../../components/Home/Hero";
import SearchBar from "../../components/Home/SearchBar";
import FeaturedSpots from "../../components/Home/FeaturedSpots";
import WhyVisit from "../../components/Home/WhyVisit";
import AtGlance from "../../components/Home/AtGlance";
import About from "../../components/Home/About";
import ScrollButton from "../../components/Common/ScrollButton";

const Home = () => {
  return (
    <>
	  <div className="relative">
      <Hero />
      <SearchBar />
      <FeaturedSpots />
      <WhyVisit />
	  <AtGlance />
	  <About />
      <ScrollButton />
	  </div>
    </>
  );
};

export default Home;