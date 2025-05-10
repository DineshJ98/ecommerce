import { connectToDB } from "@/app/api/db"
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

    const { db } = await connectToDB();

    const userparam = await params;

    const userId = userparam.id;

    const userCart = await db.collection('carts').findOne({ userId : userId });

    if(!userCart){
        return new Response(JSON.stringify([]), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }


    const cartIds = userCart.cartIds;
    const productsInCart = await db.collection('products').find({ id : { $in : cartIds} }).toArray();

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
    
    const { db } = await connectToDB();
    const userParam = await params;
    const userId = userParam.id;
    const body : CartBody = await request.json();

    const productId = body.productId;

    const updatedCart = await db.collection('carts').findOneAndUpdate(
        { userId : userId},
        { $push : { cartIds : productId} },
        { upsert : true, returnDocument: 'after' },
    );

    const cartProducts = await db.collection('products').find({id : { $in : updatedCart.cartIds}}).toArray();

    return new Response(JSON.stringify(cartProducts), {
        status: 201,
        headers: {
            'Content-Type' : 'application/json',
        }
    });
}

export async function DELETE( request : NextRequest, {params} : {params : Params} ) {

    const { db } = await connectToDB();
    const userParam = await params;
    const userId = userParam.id;
    const body : CartBody = await request.json();
    
    const productID = body.productId;

    const updatedCart = await db.collection('carts').findOneAndUpdate(
        {userId : userId},
        { $pull : {cartIds : productID}},
        { upsert : true , returnDocument : "after"},
    );

    const cartProducts = await db.collection('products').find({ id : { $in : updatedCart.cartIds } }).toArray();

    return new Response(JSON.stringify(cartProducts), {
        status: 202,
        headers: {
            'Content-Type' : 'application/json',
        }
    });
}