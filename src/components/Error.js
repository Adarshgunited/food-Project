import { useRouteError } from "react-router-dom";

const Error = () => {
     
    
    const err = useRouteError();
    //provide more information about error. u get more attributes/key and u can use it.
    // console.log(err);

    return (
        <div>
        <h1>Oops!!!</h1>
        <h2>Something went wrong!!!</h2>
        <h3>{err.status} : {err.statusText}</h3>
        </div>
    );
}

export default Error;