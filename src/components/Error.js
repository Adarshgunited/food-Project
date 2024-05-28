import { useRouteError } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const Error = () => {
    const err = useRouteError();
    // You can explore more attributes/keys from err if needed.

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <FaExclamationTriangle className="text-red-600 text-6xl animate-pulse mb-4" />
            <h1 className="text-4xl font-bold text-gray-800">Oops!!!</h1>
            <h2 className="text-2xl font-semibold text-gray-700 mt-2">Something went wrong!!!</h2>
            <h3 className="text-xl text-gray-600 mt-2">{err.status} : {err.statusText}</h3>
            <p className="mt-4 text-gray-600 text-center">
                Please try refreshing the page, or go back to the previous page.
            </p>
            <button 
                onClick={() => window.location.reload()}
                className="mt-6 px-6 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300"
            >
                Refresh Page
            </button>
        </div>
    );
}

export default Error;
