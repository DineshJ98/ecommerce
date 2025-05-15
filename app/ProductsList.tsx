'use client'
import Image from "next/image";
import { Product } from "./product-data";
import Link from "next/link";
import { useState } from "react";

export default function ProductsList({product , initialCartProducts = []}:{product: Product[] , initialCartProducts : Product[]}){
    
    const [cartProcuts, setCartProducts] = useState(initialCartProducts);

    async function addToCart(productId : string) {
        
        const response = await fetch('http://172.18.73.80:3000/api/users/2/cart', {
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
                    <button onClick={() => addToCart(product.id)}>Add to cart</button>
                </Link>
            ))}
        </div>
    )
}