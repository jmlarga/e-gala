import { Link } from "react-router-dom";
import { useState } from "react";
import ReviewModal from "../Rating/ReviewModal";
import {
    FaInfoCircle,
    FaEnvelope,
    FaShieldAlt,
    FaStar,
	FaRegComments
} from "react-icons/fa";

export default function MobileMenu({
    isMenuOpen,
    setIsMenuOpen
}) {
    const close = () => setIsMenuOpen(false);
	const [showReviewModal, setShowReviewModal] = useState(false);
    return (
        <>
            <div
                onClick={close}
                className={`fixed inset-0 bg-black/20 transition-all duration-300 z-40 ${
                    isMenuOpen
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                }`}
            />

            <div
                className={`absolute top-full right-4 mt-2 w-60 bg-white rounded-2xl shadow-2xl border border-[#7db168]/20 overflow-hidden z-50
                transition-all duration-300 ease-out origin-top
                ${
                    isMenuOpen
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 -translate-y-5 scale-95 pointer-events-none"
                }`}
            >
                <div className="border-t border-gray-100" />

                <MenuLink
                    to="/about"
                    icon={<FaInfoCircle />}
                    label="About e-Gala"
                    onClick={close}
                />

                <MenuLink
                    to="/privacy"
                    icon={<FaShieldAlt />}
                    label="Privacy Policy"
                    onClick={close}
                />

                <MenuLink
                    to="/contact"
                    icon={<FaEnvelope />}
                    label="Contact Us"
                    onClick={close}
                />

                <MenuButton
					icon={<FaStar />}
					label="Rate e-Gala"
					onClick={() => {
						close(); // isara ang menu
						setShowReviewModal(true);
					}}
				/>
				<MenuLink
					to="/app-reviews"
					icon={<FaRegComments />}
					label="App Reviews"
					onClick={close}
				/>
            </div>
			<ReviewModal
				isOpen={showReviewModal}
				onClose={() => setShowReviewModal(false)}
			/>
        </>
    );
	
}

function MenuLink({ to, icon, label, onClick }) {
    return (
        <Link
            to={to}
            onClick={onClick}
            className="flex items-center gap-3 w-full px-5 py-4 hover:bg-[#1a6859]/5 transition"
        >
            <span className="text-[#1a6859]">{icon}</span>
            <span>{label}</span>
        </Link>
    );
}

function MenuButton({ icon, label, onClick }) {
    return (
        <button
            onClick={onClick}
            className="flex items-center gap-3 w-full px-5 py-4 hover:bg-[#1a6859]/5 transition text-left"
        >
            <span className="text-[#1a6859]">{icon}</span>
            <span>{label}</span>
        </button>
    );
}