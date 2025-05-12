import {apiClient} from "../ApiClient.jsx";

export default async function getAllProducts() {
    return apiClient('/products');
}
