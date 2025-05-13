export async function GET () {
    return new Response(JSON.stringify({ message : "Hello this is from NextJs routes!"}), {
        status:200,
    });
}

export async function POST() {
    return new Response("Thank you for the data!",{
        status:200,
    });
}