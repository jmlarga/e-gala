import axios from "axios";

import API from "../config/api";

export const submitAppReview = async (data) => {
    const response = await axios.post(
        `${API}/e-gala/v1/app-review`,
        data
    );

    return response.data;
};