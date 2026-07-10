import {
    FaHome,
    FaMapMarkedAlt,
    FaHotel,
    FaUtensils,
    FaDirections
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

const navItems = [
    {
        name: "Home",
        path: "/",
        icon: FaHome
    },
    {
        name: "Spots",
        path: "/spots",
        icon: FaMapMarkedAlt
    },
    {
        name: "Hotels",
        path: "/hotels",
        icon: FaHotel
    },
    {
        name: "Dining",
        path: "/dining",
        icon: FaUtensils
    },
    {
        name: "Directions",
        path: "/directions",
        icon: FaDirections
    }
];

export default function BottomNav() {

    return (
        <nav className="border-t border-[#7db168]/20 bg-white">

            <div className="grid grid-cols-5 gap-1 px-2 py-3 max-w-[1280px] mx-auto">

                {navItems.map((item) => {

                    const Icon = item.icon;

                    return (

                        <NavLink
                            key={item.name}
                            to={item.path}
                            end={item.path === "/"}
                            className={({ isActive }) =>
                                `flex flex-col items-center justify-center p-2 rounded-xl transition-all ${
                                    isActive
                                        ? "bg-[#1a6859] text-white shadow-md"
                                        : "text-gray-500 hover:bg-gray-50"
                                }`
                            }
                        >
                            <Icon size={20} />

                            <span className="text-[9px] font-bold uppercase mt-1">
                                {item.name}
                            </span>

                        </NavLink>

                    );

                })}

            </div>

        </nav>
    );
}