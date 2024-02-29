import axios from "axios";

const BASE_URL = 'https://backend-n9tp.onrender.com/api/v1/';

export const fetchDataFromApi = async (url) => {
    try {
        const data = await axios.get(BASE_URL + url);
        return data;

    } catch (error) {
        return error;
    }
}

export const addDataInApi = async (url, formData) => {
    try {
        const data = await axios.post(BASE_URL + url, formData);
        return data;

    } catch (error) {
        return error;
    }
}