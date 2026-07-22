import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { getAppReviews } from "../services/AppReviewService";
export default function AppReviews() {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

		async function loadReviews() {

			try {

				const data = await getAppReviews();

				setReviews(data);

			} catch (error) {

				console.error(error);

			} finally {

				setLoading(false);

			}

		}

		loadReviews();

	}, []);

    const average =
        reviews.length > 0
            ? (
                  reviews.reduce((sum, item) => sum + item.rating, 0) /
                  reviews.length
              ).toFixed(1)
            : 0;

    return (
        <div className="min-h-screen bg-gray-50">

            <div className="max-w-3xl mx-auto p-4">

                {/* Header */}
                <div className="bg-white rounded-2xl shadow p-8 text-center mb-8">

                    <h1 className="text-3xl font-bold text-[#1a6859]">
                        App Reviews
                    </h1>

                    <p className="text-gray-500 mt-2">
                        See what our users think about e-Gala.
                    </p>

                    <div className="mt-6 flex flex-col items-center">

                        <div className="text-5xl font-bold text-[#1a6859]">
                            {average}
                        </div>

                        <div className="flex mt-2">
                            {[1,2,3,4,5].map((star)=>(
                                <FaStar
                                    key={star}
                                    className={
                                        star <= Math.round(average)
                                            ? "text-[#1a6859]"
                                            : "text-gray-300"
                                    }
                                />
                            ))}
                        </div>

                        <p className="text-sm text-gray-500 mt-2">
                            Based on {reviews.length} review{reviews.length !== 1 && "s"}
                        </p>

                    </div>

                </div>

                {/* Reviews */}

                {loading ? (

                    <div className="text-center py-10 text-gray-500">
                        Loading reviews...
                    </div>

                ) : reviews.length === 0 ? (

                    <div className="bg-white rounded-xl p-8 text-center text-gray-500">
                        No reviews yet.
                    </div>

                ) : (

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {reviews.map((item) => (

                            <div
                                key={item.id}
                                className="bg-white rounded-xl shadow p-6"
                            >

                                <div className="flex items-center justify-between">

                                    <h2 className="font-semibold text-lg">
                                        {item.display_name}
                                    </h2>

                                    <span className="text-sm text-gray-400">
                                        {item.date}
                                    </span>

                                </div>

                                <div className="flex mt-2 mb-3">

                                    {[1,2,3,4,5].map((star)=>(
                                        <FaStar
                                            key={star}
                                            className={
                                                star <= item.rating
                                                    ? "text-[#1a6859]"
                                                    : "text-gray-300"
                                            }
                                        />
                                    ))}

                                </div>

                                <p className="text-gray-700 leading-relaxed">
                                    {item.review}
                                </p>

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </div>
    );
}