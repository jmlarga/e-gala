import API from "../config/api";

export async function getAppReviews() {

    const response = await fetch(
        `${API}/e-gala/v1/app-reviews`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch reviews.");
    }

    return await response.json();
}