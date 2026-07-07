
export async function getTouristSpots() {
    const response = await fetch(`${API_URL}?_embed`);

    if (!response.ok) {
        throw new Error("Failed to fetch tourist spots.");
    }

    return await response.json();
}

export async function getTouristSpot(slug) {
    const response = await fetch(
        `${API_URL}?slug=${slug}&_embed`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch tourist spot.");
    }

    const data = await response.json();

    if (data.length === 0) {
        throw new Error("Tourist spot not found.");
    }

    return data[0];
}