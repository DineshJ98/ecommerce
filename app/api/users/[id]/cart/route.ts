import { products } from "@/app/product-data"
import { NextRequest } from "next/server"


type ShoppingCart = Record<string,string[]>


const carts: ShoppingCart = {
    '1':['123','345'],
    '2':['124'],
    '3':['123','345','999']
}

type Params = {
    id: string
}

export async function GET( request : NextRequest ,{params } : { params : Params}) {

    const userparam = await params;

    const userId = userparam.id;

    const productIds = carts[userId];

    if(productIds === undefined){
        return new Response(JSON.stringify([]), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }

    const productsInCart = productIds.map( prodId => products.find( product => product.id === prodId));

    return new Response(JSON.stringify(productsInCart), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
}

type CartBody = {
    productId : string;
}

export async function POST( request: NextRequest, {params} : {params : Params}) {
    
    const userParam = await params;
    const userID = userParam.id;
    const body : CartBody = await request.json();

    const productId = body.productId;

    carts[userID] = carts[userID] ?  carts[userID].concat(productId) : [productId]

    const cartProducts = carts[userID].map( id => products.find(product => product.id === id) )

    return new Response(JSON.stringify(cartProducts), {
        status: 201,
        headers: {
            'Content-Type' : 'application/json',
        }
    });
}

export async function DELETE( request : NextRequest, {params} : {params : Params} ) {
    
    const userParam = await params;
    const userID = userParam.id;
    const body : CartBody = await request.json();
    
    const productID = body.productId;

    carts[userID] = carts[userID] ? carts[userID].filter(p => p !== productID) : [];

    const cartProducts = carts[userID].map( id => products.find(product => product.id === id) )

    return new Response(JSON.stringify(cartProducts), {
        status: 202,
        headers: {
            'Content-Type' : 'application/json',
        }
    });
}