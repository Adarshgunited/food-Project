import { list } from "postcss";
import { useEffect, useState } from "react";

const Contact = () => {

            const [text,setText] = useState("");
    
    

    // This code block runs after the component has been rendered to the screen.
    useEffect(()=>{
        //const timer =  setInterval(() => {
        //     console.log("setInterval is called");
        // }, 1000);
        // console.log("useEffect");

        // The cleanup function is executed when the component is unmounted or when the dependency array changes.
        return() =>{
            // Cleanup logic can be placed here.
            // For example, clearing intervals, canceling network requests, etc.
            // clearInterval(timer)
            // console.log("useEffect return");
        }

    },[]);// An empty dependency array means this effect runs once after the initial render.

    // console.log("render");
    return (
        <div className="">
            <h1 className="font-bold text-3xl m-4 p-4">Contact Us</h1>
            <form>
                <input
                type="text"
                className="border border-black p-2 m-2 rounded-lg"
                placeholder="name"
                />
                <input type="text" className="border border-black p-2 m-2 rounded-lg" placeholder="message"/>
                <button className="border border-black p-2 m-2 rounded-lg">Submit</button>
            </form>
            

            
        </div>
    );
};

export default Contact;