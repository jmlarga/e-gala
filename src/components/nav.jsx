import React from 'react';
import { FaHome, FaMapMarkedAlt, FaHotel, FaUtensils, FaDirections } from 'react-icons/fa';

const navItems = [
  { name: 'Home', icon: FaHome },
  { name: 'Spots', icon: FaMapMarkedAlt },
  { name: 'Hotels', icon: FaHotel },
  { name: 'Dining', icon: FaUtensils },
  { name: 'Directions', icon: FaDirections }
];

const Nav = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="grid grid-cols-5 gap-1 px-2 py-3 border-t border-[#7db168]/20 animate-[slide-up_0.8s_ease-out] bg-white">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.name;
        
        return (
          <button 
            key={item.name} 
            onClick={() => setActiveTab(item.name)}
            className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-200 ${
              isActive ? 'bg-[#7db168] text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'
            }`}
          >
            {/* React Icons size is usually set via the size prop */}
            <Icon size={20} />
            <span className="text-[9px] font-bold uppercase mt-1 truncate w-full text-center">
              {item.name}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

export default Nav;