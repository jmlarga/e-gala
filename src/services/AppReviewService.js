import axios from "axios";

import API from "../config/api";

export const submitAppReview = async (data) => {
    const response = await axios.post(
        `${API}/e-gala/v1/app-review`,
        data
    );

    return response.data;
};

export async function getAppReviews() {

    const response = await fetch(
        `${API}/e-gala/v1/app-reviews`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch reviews.");
    }

    return await response.json();
}