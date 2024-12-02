import { IoSadOutline } from "react-icons/io5";

export default function NotFound()
{
    return <main className="not-found">
        <h1>Not Found</h1>
       
        <p>Unfortunately, we could not find the requested page or resource</p>
        <h1><IoSadOutline size='200px' color="darkorange" /></h1>

    </main>
}