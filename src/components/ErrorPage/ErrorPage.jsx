import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex gap-11 container mx-auto my-7">
            <h1>Oops!!</h1>
            <Link  className='bg-slate-600 p-2 rounded-2xl text-slate-200'to="/">Go back to home</Link>
        </div>
    );
};

export default ErrorPage;