export interface Product{
    id : string
    imageURL : string
    name : string
    description: string
    price : number
}

export const products : Product [] = [
    {
        id : '123',
        name:'Hat',
        imageURL:'hat.jpg',
        description:'cheer the team on in style hat.',
        price: 24
    },
    {
        id : '124',
        name:'Mug',
        imageURL:'Mug.jpg',
        description:'Your morning coffee mug.',
        price: 30
    },
    {
        id : '345',
        name:'Shirt',
        imageURL:'shirt.jpg',
        description:'Your go to shirt.',
        price: 40
    },
    {
        id : '999',
        name:'Apron',
        imageURL:'apron.jpg',
        description:'Every chef\'s apron.',
        price: 13
    }
]