import ShoppingCartList from "./ShoppingCartList";

export const dynamic = 'force-dynemic';

export default async function ProductsCartPage() {
    
    const response = await fetch(process.env.NEXT_PUBLIC_SITE_URL + '/api/users/2/cart', {
        cache: 'no-cache',
    });
    const products = await response.json();

    return (
        <ShoppingCartList initialCartProducts={products} />
    )
}