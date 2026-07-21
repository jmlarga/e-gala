// SpotDetails.jsx
// NOTE:
// This is a starter template generated from our discussion.
// Replace the fetch/service imports with your project paths.

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTouristSpot } from "../../services/touristSpotService";
import { Link } from "react-router-dom";
import { FaGlobe, FaFacebook, FaPhone } from "react-icons/fa";
import {
  MapPin,
  Clock3,
  Ticket,
  Globe,
  Phone,
  ArrowLeft,ExternalLink 
} from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function SpotDetails({ spot }) {
  const { slug } = useParams();
  const [spots, setSpot] = useState(null);
  const [loading, setLoading] = useState(true);
   const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  
  useEffect(() => {

    async function loadSpot() {

			try {

				const data = await getTouristSpot(slug);

				setSpot(data);

			} catch(err){

				console.error(err);

			} finally {

				setLoading(false);

			}

		}

		loadSpot();

	}, [slug]);
	if (loading) {

		return (
			<div className="py-20 text-center">
				Loading...
			</div>
		);

	}

	if (!spots) {

		return (
			<div className="py-20 text-center">
				Tourist Spot not found.
			</div>
		);

	}
  const heroImage =
    spots?.acf?.featured_image?.url ||
    spots?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "/images/default-spot.jpg";
  const gallery = spots.gallery || [];
console.log(spots.gallery);
  return (
    <div className="bg-gray-50 min-h-screen">
      <section
        className="relative h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="relative z-10 max-w-6xl mx-auto h-full flex items-end px-6 pb-10 text-white text-left">
          <div>
            <span className="bg-emerald-700 px-4 py-1 rounded-full text-sm">
              {spots.acf.category}
            </span>
            <h1 className="text-5xl font-bold mt-3">
              {spots.title.rendered}
            </h1>
            <div className="flex items-center gap-2 mt-2">
              <MapPin size={18} />
              {spots.municipality?.name}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto p-6">
        <Link to="/spots" className="inline-flex items-center gap-2 mb-6">
          <ArrowLeft size={18}/> Back to Spots
        </Link>

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          <Info icon={<Ticket className="mx-auto text-2xl"/>} title="Entrance Fee" value={spots.acf.entrance_fee || "Free"} />
          <Info icon={<Clock3 className="mx-auto text-2xl"/>} title="Opening Hours" value={spots.acf.opening_hours || "-"} />
          <Info icon={<MapPin className="mx-auto text-2xl"/>} title="Location" value={spots.acf.location} />
        </div>

        <h2 className="text-3xl font-bold mb-4">About {spots.title.rendered}</h2>
        <div
          className="text-left text-gray-700 max-w-none mb-12"
          dangerouslySetInnerHTML={{__html: spots.acf.description.replace(/\n/g, "<br />")}}
        />

        {gallery.length > 0 && (
			  <>
				<h2 className="text-3xl font-bold mb-6">Gallery</h2>

				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
				  {gallery.map((img, i) => (
					<img
					  key={i}
					  src={img.url}
					  alt={img.alt || "Alt Text"}
					  className="rounded-xl h-56 w-full object-cover cursor-pointer transition duration-300 hover:scale-105 hover:shadow-xl"
					  onClick={() => {
						setIndex(i);
						setOpen(true);
					  }}
					/>
				  ))}
				</div>
			  </>
			)}
			<Lightbox
		  open={open}
		  close={() => setOpen(false)}
		  index={index}
		  slides={gallery.map(img => ({ src: img.url }))}
		/>
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <div className="grid md:grid-cols-3 gap-4">
		  <a href={spots.acf.facebook_page} target="_blank" rel="noopener noreferrer">{spots.acf.facebook_page && <Contact icon={<FaFacebook className="text-[#1a6859] text-2xl mx-auto mb-3" />} label="Facebook"  value={spots.acf.facebook_page}/>}</a>
			  {spots.acf.website ? ( <a href={spots.acf.website} target="_blank" rel="noopener noreferrer">
				<Contact icon={<FaGlobe className="text-[#1a6859] text-2xl mx-auto mb-3" />} label="Website" value={spots.acf.website}/>
			</a>
			) : (
			<Contact icon={<FaGlobe className="text-[#1a6859] text-2xl mx-auto mb-3" />} label="Website" value="Not Available" />
			)}
			
          {spots.acf.contact_number && <Contact icon={<FaPhone className="text-[#1a6859] text-2xl mx-auto mb-3"/>} label="Contact" value={spots.acf.contact_number}/>}
        </div>
      </div>

      
    </div>
  );
}

function Info({icon,title,value}){
 return <div className="bg-white rounded-2xl shadow p-5">{icon}<p className="text-sm text-gray-500 mt-2">{title}</p><p className="font-semibold">{value}</p></div>
}
function Contact({icon,label,value}){
 return <div className="bg-white rounded-2xl shadow p-5">{icon}<p className="font-semibold mt-2">{label}</p><p className="break-all">{value}</p></div>
}
