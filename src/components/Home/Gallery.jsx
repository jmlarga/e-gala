
// GalleryV2.jsx
import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getTouristSpots } from "../../services/touristSpotService";
import { motion, AnimatePresence } from "framer-motion";
export default function Gallery(){
 const [spots,setSpots]=useState([]);
 const [loading,setLoading]=useState(true);
 const [selectedCategory,setSelectedCategory]=useState("All");
 const [currentIndex,setCurrentIndex]=useState(0);

 useEffect(()=>{(async()=>{
   const data=await getTouristSpots();
   setSpots(data); setLoading(false);
 })().catch(console.error)},[]);

 const categories=useMemo(()=>["All",...new Set(spots.map(s=>s.acf?.category).filter(Boolean))],[spots]);
 const filtered=useMemo(()=>selectedCategory==="All"?spots:spots.filter(s=>s.acf?.category===selectedCategory),[spots,selectedCategory]);
 useEffect(()=>setCurrentIndex(0),[selectedCategory]);
 if(loading) return <section className="py-20 text-center">Loading gallery...</section>;
 if(!filtered.length) return null;
 const active=filtered[currentIndex];
 const next=()=>setCurrentIndex(i=>(i+1)%filtered.length);
 const prev=()=>setCurrentIndex(i=>(i-1+filtered.length)%filtered.length);
 const img=active._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

 return (
<section className="py-12 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center">
<span className="uppercase tracking-widest text-[#1a6859] font-semibold">Discover</span>
<h2 className="text-4xl font-bold text-[#1a6859] mt-2">Explore Through Photos</h2>
</div>
<div className="flex flex-wrap justify-center gap-3 mt-8">
{categories.map(c=><button key={c} onClick={()=>setSelectedCategory(c)} className={`px-4 py-2 rounded-full border ${selectedCategory===c?"bg-[#1a6859] text-white":"hover:bg-gray-100"}`}>{c}</button>)}
</div>
<div className="relative overflow-hidden rounded-xl h-[520px] mt-10">
<AnimatePresence mode="wait">
    <motion.img
        key={currentIndex}
        src={img}
        alt={active.title.rendered}
        initial={{
            x: 80,
            opacity: 0,
        }}
        animate={{
            x: 0,
            opacity: 1,
        }}
        exit={{
            x: -80,
            opacity: 0,
        }}
        transition={{
            duration: 0.45,
            ease: "easeInOut",
        }}
        className="w-full h-[520px] rounded-xl object-cover absolute inset-0"
    />
</AnimatePresence>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"/>
<button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full"><ChevronLeft/></button>
<button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full"><ChevronRight/></button>
<div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
{filtered.map((_,i)=><button key={i} onClick={()=>setCurrentIndex(i)} className={`w-3 h-3 rounded-full ${i===currentIndex?"bg-white":"bg-white/50"}`}/>)}
</div>


<div className="absolute md:bottom-8 bottom-12 left-0 right-0 px-4 md:px-8">
    <div className="flex flex-col items-center text-center md:flex-row md:justify-between md:items-end md:text-left">

        {/* Left Content */}
        <div className="text-white">
            <span className="inline-block bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm">
                {active.acf?.category}
            </span>

            <h3 className="text-xl md:text-3xl font-bold md:mt-2 mt-1">
                {active.title.rendered}
            </h3>
        </div>

        {/* CTA */}
        <Link
            to={`/spots/${active.slug}`}
            className="inline-flex items-center gap-2 border border-white/70 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full hover:bg-[#1a6859] transition duration-300 md:mt-0 mt-2"
        >
            View Destination →
        </Link>

    </div>
</div>
</div>
<div className="mt-6 flex gap-3 overflow-x-auto pb-2">
{filtered.map((s,i)=>{
 const t=s._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
 return <img key={s.id} src={t} onClick={()=>setCurrentIndex(i)} className={`w-28 h-20 rounded-xl object-cover cursor-pointer border-4 ${i===currentIndex?"border-[#1a6859]":"border-transparent"}`}/>
})}
</div>
<p className="mt-6 text-gray-600 line-clamp-3 text-left" dangerouslySetInnerHTML={{__html:active.acf?.description||""}}/>
<div className="mt-6 text-center">
<Link to="/spots" className="border px-5 py-3 rounded-full inline-block mx-2">View All Destinations</Link>
</div>
</div>
</section>);
}
