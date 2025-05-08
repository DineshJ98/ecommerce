import { NextRequest } from "next/server";
import { connectToDB } from "../../db";

type Params = {
    id : string;
}

export async function GET( request : NextRequest , { params } : {params : Params}) {
    
    const { db } = await connectToDB();

    const getparams = await params;

    const productId = getparams.id;

    const product = await db.collection('products').findOne({ id : productId});

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