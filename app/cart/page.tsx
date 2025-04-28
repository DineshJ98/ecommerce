'use client';
import { useState } from "react";
import { products } from "../product-data";
import Link from "next/link";


export default function ProductsCartPage() {
    
    const [cartID] = useState(['123','345']);

    const cartProducts = cartID.map(id => products.find( prod => prod.id === id)!);


    return (<>
    <h1>Shopping cart Page</h1>
    {
        cartProducts.map(product => (
            <Link key={product.id} href={ '/products/' + product.id }>
                <h1>{product.name}</h1>
                <p>${product.price}</p>
            </Link>
        ))}
    </>)
}