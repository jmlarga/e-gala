import React, { useState, useEffect } from "react";
import {Routes, Route } from "react-router-dom";
import Header from "./components/Navigation/Header";
import BottomNav from "./components/Navigation/BottomNav";
import LoadingScreen from "./components/Loading/LoadingScreen";

import Home from "./pages/Home/Home";
import Spots from "./pages/Spots/Spots";
import SpotDetails from "./pages/Spots/SpotDetails";
import Hotels from "./pages/Hotels/Hotels";
import Dining from "./pages/Dining/Dining";
import Directions from "./pages/Directions/Directions";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Contact from "./pages/Contact";

function App() {
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("Home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <LoadingScreen />;
    }

    const pages = {
		Home: <Home />,
		Spots: <Spots />,
		Hotels: <Hotels />,
		Dining: <Dining />,
		Directions: <Directions />
	};

    return (
        <div className="h-dvh w-full flex flex-col bg-white text-[#1a6859] overflow-hidden">

            <Header
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
            />

		 <main className="flex-1 overflow-y-auto py-4">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/spots" element={<Spots />} />
                <Route path="/spots/:slug" element={<SpotDetails />} />
                <Route path="/hotels" element={<Hotels />} />
                <Route path="/dining" element={<Dining />} />
                <Route path="/directions" element={<Directions />} />
				<Route path="/about" element={<About />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </main>
		

            <BottomNav />
        </div>
    );

}

export default App;