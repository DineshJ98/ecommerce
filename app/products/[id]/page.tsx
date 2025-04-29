import NotFoundPage from "@/app/not-found";
import { products } from "@/app/product-data";

export default async function ProductsDetailsPage({ params }:{ params : { id : string }}) {
    
    const { id } = await params;

    const product = products.find( p => p.id === id);

    if (!product){
        return <NotFoundPage/>
    }

    return (
    <>
    <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
    <p className="text-2xl text-gray-600 mb-6">${product.price}</p>
    <h3>Description</h3>
    <p>{product.description}</p>
    </>
)
}