import ProductsList from "../ProductsList";

export default async function ProductsPage() {

    const response = await fetch('http://172.18.73.80:3000/api/products');
    const products = await response.json();
    const response2 = await fetch('http://172.18.73.80:3000/api/users/2/cart', {
        cache: 'no-cache',
    });
    const cartProducts = await response2.json();

    return (
    
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-8">Products</h1>
            <ProductsList product={products} initialCartProducts={cartProducts}/>
        </div>


    )
}