import { useState } from "react";
import { FaStar, FaTimes } from "react-icons/fa";
import { submitAppReview } from "../../services/AppReviewService";
import toast from "react-hot-toast";

export default function ReviewModal({ isOpen, onClose }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [name, setName] = useState("");
    const [review, setReview] = useState("");
	const handleSubmit = async () => {

    if (!rating) {
        toast.error("Please select a rating.");
        return;
    }

    if (!review.trim()) {
        toast.error("Please write your review.");
        return;
    }

    try {

        await submitAppReview({
            display_name: name,
            rating,
            review
        });

        toast.success("Thank you for your feedback!");
		
        setName("");
        setRating(0);
        setHover(0);
        setReview("");

        onClose();

    } catch (error) {
        toast.error("Something went wrong.");
        console.error(error);
    }
};
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 p-4"
            onClick={onClose}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="max-w-md rounded-2xl bg-white shadow-2xl overflow-hidden"
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b">
                    <h2 className="text-xl font-bold text-[#1a6859]">
                        ⭐ Rate e-Gala
                    </h2>

                    <button
                        type="button"
                        onClick={onClose}
                        className="text-gray-500 hover:text-red-500 transition"
                    >
                        <FaTimes size={18} />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6">

                    <p className="text-sm text-gray-600 mb-5 text-left">
                        We'd love to hear your feedback to improve e-Gala.
                    </p>

                    {/* Display Name */}
                    <div className="py-2">
                        
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Display name"
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1a6859]"
                        />
                    </div>
					  {/* Review */}
                    <div className="py-2">
                       

                        <textarea
                            rows={4}
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            placeholder="Review"
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#1a6859]"
                        />
                    </div>
                    {/* Rating */}
                    <div className="mb-6 text-left">
                        <label className="block text-sm font-medium mb-2">
                            Your Rating
                        </label>

                        <div className="flex items-center gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    onClick={() => {
                                        console.log("Rating:", star);
                                        setRating(star);
                                    }}
                                    onMouseEnter={() => setHover(star)}
                                    onMouseLeave={() => setHover(0)}
                                    className="transition-transform hover:scale-110"
                                >
                                    <FaStar
										size={34}
										style={{
											fill: star <= (hover || rating) ? "#1a6859" : "#ffffff",
											stroke: star <= (hover || rating) ? "#1a6859" : "#9ca3af",
											strokeWidth: 25,
										}}
										className="transition-all duration-200"
									/>
                                </button>
                            ))}
                        </div>
                    </div>

                  

                    {/* Footer */}
                    <div className="flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-5 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
                        >
                            Cancel
                        </button>

                        <button
							type="button"
							onClick={handleSubmit}
							className="px-5 py-2 rounded-lg bg-[#1a6859] text-white hover:bg-[#155347] transition"
						>
							Submit Review
						</button>
                    </div>

                </div>
            </div>
        </div>
    );
}