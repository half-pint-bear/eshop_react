import useAllProducts from "../hooks/useAllProducts.jsx";

export default function HomePage() {

    const {products} = useAllProducts();

    return (
        <>
            <h1>Let's find a catchy sentence later</h1>
            <ul>
                {products && products.map((product) => (
                    <li key={product.id}>{product.title}</li>
                ))}
            </ul>
        </>
    )
}
