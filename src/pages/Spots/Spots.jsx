import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { getTouristSpots } from "../../services/touristSpotService";
import InfoCard from "../../components/Cards/InfoCard";
import heroImage from "../../assets/spots-hero.jpg";

export default function Spots() {
  const [spots, setSpots] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      try {
        setSpots(await getTouristSpots());
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  const categories = useMemo(() => {
    const set = new Set();
    spots.forEach(s => s.acf?.category && set.add(s.acf.category));
    return ["All", ...Array.from(set)];
  }, [spots]);

  const filtered = useMemo(() => {
    return spots.filter(s => {
      const q = search.toLowerCase();
      const okSearch =
        (s.title?.rendered || "").toLowerCase().includes(q)
      const okCat = category === "All" || s.acf?.category === category;
      return okSearch && okCat;
    });
  }, [spots, search, category]);

  const perPage = 12;
  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const current = filtered.slice((page-1)*perPage, page*perPage);

  useEffect(()=>setPage(1),[search,category]);

  return (
    <div className="max-w-7xl mx-auto md:px-10 px-4 py-6">
      <section
		  className="relative overflow-hidden rounded-3xl mb-8"
		  style={{
			backgroundImage: `url(${heroImage})`,
			backgroundSize: "cover",
			backgroundPosition: "center",
		  }}
		>
		  {/* Dark Overlay */}
		  <div className="absolute inset-0 bg-gradient-to-r from-[#1a6859]/60 to-[#1a6859]/85"></div>

		  {/* Content */}
		  <div className="relative z-10 text-white px-8 py-16 lg:px-14">
			<h1 className="text-4xl lg:text-5xl font-bold">
			  Discover Marinduque
			</h1>

			<p className="mt-3 max-w-2xl text-lg text-gray-100">
			  Explore beaches, mountains, waterfalls and hidden gems.
			</p>

			<div className="mt-8 relative max-w-xl mx-auto">
			  <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-500" />

			  <input
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				placeholder="Search destinations..."
				className="w-full rounded-full bg-white py-3 pl-12 pr-4 text-black shadow-xl focus:outline-none focus:ring-4 focus:ring-white/40"
			  />
			</div>
		  </div>
		</section>


      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(c=>(
          <button key={c} onClick={()=>setCategory(c)}
            className={`px-4 py-2 rounded-full border ${category===c?"bg-[#1a6859] text-white":"bg-white"}`}>
            {c}
          </button>
        ))}
      </div>

      {current.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {current.map(spot=><InfoCard key={spot.id} spot={spot}/>)}
        </div>
      ):<div className="text-center py-16 text-gray-500">No tourist spots found.</div>}

      <div className="flex justify-center gap-2 mt-8">
        <button disabled={page===1} onClick={()=>setPage(page-1)} className="px-4 py-2 border rounded disabled:opacity-50">Previous</button>
        <span className="px-4 py-2">{page} / {totalPages}</span>
        <button disabled={page===totalPages} onClick={()=>setPage(page+1)} className="px-4 py-2 border rounded disabled:opacity-50">Next</button>
      </div>
    </div>
  );
}
