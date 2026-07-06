import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/e-gala-logo.png";
import MobileMenu from "./MobileMenu";
import { Link } from 'react-router-dom';
export default function Header({
    isMenuOpen,
    setIsMenuOpen
}) {

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-[#7db168]/20 shadow-sm">
			<div className="max-w-[1280px] mx-auto flex justify-between items-center px-4 py-3 ">
				<Link
                            to="./"><img
					src={logo}
					alt="e-Gala"
					className="h-8"
				/>
				 </Link>

				<button
					onClick={() =>
						setIsMenuOpen(!isMenuOpen)
					}
					className="p-2 rounded-xl hover:bg-[#1a6859]/5 transition"
				>
					{
						isMenuOpen
							? <FaTimes size={22}/>
							: <FaBars size={22}/>
					}
				</button>

				<MobileMenu
					isMenuOpen={isMenuOpen}
					setIsMenuOpen={setIsMenuOpen}
				/>
			</div>

        </header>
    );
}