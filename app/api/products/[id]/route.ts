import { products } from "@/app/product-data";
import { NextRequest } from "next/server";

type Params = {
    id : string;
}

export async function GET( request : NextRequest , { params } : {params : Params}) {
    
    const getparams = await params;

    const product = products.find(p => p.id === getparams.id);

    if(!product){
        return new Response('product not found!',{
            status:404,
        });
    }

    return new Response(JSON.stringify(product), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });

}