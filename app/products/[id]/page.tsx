import { products } from "@/app/product-data"

export default function ProductsDetailsPage({ params }:{ params : { id : string }}) {
    
    const product = products.find(p => p.id === params.id);
    return <h1>Products Details Page {product?.name}</h1>
}