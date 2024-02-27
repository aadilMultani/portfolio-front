import axios from "axios";

const BASE_URL = 'http://localhost:5000/';

export const fetchDataFromApi = async (url) => {
    try {
        const data = await axios.get(BASE_URL + url);
        return data;

    } catch (error) {
        return error;
    }
}