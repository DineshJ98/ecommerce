export async function GET () {
    return new Response("Hello this is from NextJs routes!", {
        status:200,
    });
}

export async function POST() {
    return new Response("Thank you for the data!",{
        status:200,
    });
}