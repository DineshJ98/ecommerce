import ShoppingCartList from "./ShoppingCartList";

export default async function ProductsCartPage() {
    
    const response = await fetch('http://172.18.73.80:3000/api/users/2/cart', {
        cache: 'no-cache',
    });
    const products = await response.json();

    return (
        <ShoppingCartList initialCartProducts={products} />
    )
}