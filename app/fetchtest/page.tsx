export default async function FetchTest(){
    
    const response = await fetch('http://172.18.73.80:3000/api/hello');
    const data = await response.json();

    return (<h1>{data.message}</h1>)
}