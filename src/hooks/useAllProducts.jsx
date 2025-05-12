import {useEffect, useState} from "react";
import getAllProducts from "../services/products/getAllProducts.jsx";

export default function useAllProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const payload = async () => {
            try {
            const response = await getAllProducts("/products");
            console.log(response);
            setProducts(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        payload();
    }, []);

    return products;
}
