'use client';
import Link from "next/link";
import { useState } from "react";
import { Product } from "../product-data";

export default function ShoppingCartList( { initialCartProducts } : { initialCartProducts : Product[]} ){
    const [cartProducts, setCartProducts] = useState(initialCartProducts);

    async function removeProduct(productId : string){
        const response = await fetch('http://172.18.73.80:3000/api/users/2/cart', {
            method: 'DELETE',
            body: JSON.stringify({
                productId,
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        const updatedCart = await response.json(); 
        setCartProducts(updatedCart);
    }

    return (
    <div className="container mx-auto p-8">
    <h1 className="text-4xl font-bold mb-8">Shopping cart Page</h1>
    <ul className="space-y-4">
        {
            cartProducts.map(product => (
                <li key={product.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300">
                <Link href={ '/products/' + product.id }>
                    <h3 className="text-xl text-black font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600">${product.price}</p>
                    
                    <div
                        className="flex justify-end"
                    >
                        <button
                        className="bg-blue-500 text-white font-bold px-2 py-2 rounded hover:bg-blue-700"
                        onClick={
                            (e) => {
                                e.preventDefault();
                                removeProduct(product.id);
                            }
                        }                       
                    >Remove From Cart</button>
                    </div>      
                </Link>
                </li>
            ))
        }
    </ul>
    </div>
    )
}