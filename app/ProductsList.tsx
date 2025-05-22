'use client'
import Image from "next/image";
import { Product } from "./product-data";
import Link from "next/link";
import { useState } from "react";

export default function ProductsList({product , initialCartProducts = []}:{product: Product[] , initialCartProducts : Product[]}){
    
    const [cartProcuts, setCartProducts] = useState(initialCartProducts);

    async function addToCart(productId : string) {
        
        const response = await fetch(process.env.NEXT_PUBLIC_SITE_URL + '/api/users/2/cart', {
            method: 'POST',
            body: JSON.stringify({
                productId,
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        
        const updatedCart = await response.json();
        setCartProducts(updatedCart);
    }

    function itemIsInCart( itemId : string) {
        return cartProcuts.some( cp => cp.id === itemId); 
    }

    async function removeFromCart(productId : string) {
        const response = await fetch(process.env.NEXT_PUBLIC_SITE_URL + '/api/users/2/cart', {
            method: 'DELETE',
            body: JSON.stringify({
                productId,
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const updatedCart = await response.json();
        setCartProducts(updatedCart);
    }
    
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {product.map(product => (

                <Link 
                key={product.id} 
                href={'/products/' + product.id}
                className="bg-white text-black rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300"
                >
                    <div className="flex justify-center mb-4 h-48 relative">
                        <Image src={'/' + product.imageURL} alt={product.name} width={150} height={150} className="object-cover ronded-md"/>
                    </div>
                    <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                    <p className="text-gray-600">{'$'+ product.price}</p>
                    {
                        itemIsInCart(product.id) ?
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded w-full" 
                                onClick={(e) => {
                                e.preventDefault();
                                removeFromCart(product.id);
                                }}>
                                Remove from the cart
                            </button>
                        :
                            <button 
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded w-full" 
                                onClick={(e) => {
                                e.preventDefault();
                                addToCart(product.id);
                                }}>
                           Add to Cart 
                        </button>

                    }
                    
                </Link>

            ))}
        </div>
    )
}