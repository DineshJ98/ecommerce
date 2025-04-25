import Image from "next/image";
import { Product } from "./product-data";
import Link from "next/link";

export default function ProductsList({product}:{product: Product[]}){
    return(
        <div>
            {product.map(product => (
                <Link key={product.id} href={'/products/' + product.id}>
                    <Image src={'/' + product.imageURL} alt={product.name} width={150} height={150}/>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <b>{'$'+ product.price}</b>
                </Link>
            ))}
        </div>
    )
}