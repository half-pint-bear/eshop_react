import axios from "axios";
import axiosInstance from "./AxiosInstance.jsx";

export async function apiClient(endpoint, config) {
    try {
        return await axiosInstance.get(endpoint, config);
    } catch (error) {
        apiErrorHandler(error)
        throw error;
    }
}

function apiErrorHandler(error) {
    if(axios.isAxiosError(error)) {
        if(error.code === 'ERR_CANCELED') {
            console.warn('Request aborted')
        } else {
            console.error('Axios error : ', error.response.data || error.message);
        }
    } else if (error instanceof Error) {
        console.error('Error', error.message);
    } else {
        console.error('Unknown error', error);
    }
}
