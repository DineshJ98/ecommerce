import ProductsList from "../ProductsList";
import { products } from "../product-data";

export default function ProductsPage() {
    return (
    
        <>
            <h1>Products Page</h1>
            <ProductsList product={products}/>
        </>


    )
}