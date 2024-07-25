import { list } from "postcss";
import { useEffect, useState } from "react";

const Contact = () => {

    const [text,setText] = useState("");
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });


      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to server)
        console.log("Form data submitted:", formData);
        // Reset form after submission
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      };
    

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
            {/* old */}
            {/* <h1 className="font-bold text-3xl m-4 p-4">Contact Us</h1>
            <form>
                <input
                type="text"
                className="border border-black p-2 m-2 rounded-lg"
                placeholder="name"
                />
                <input type="text" className="border border-black p-2 m-2 rounded-lg" placeholder="message"/>
                <button className="border border-black p-2 m-2 rounded-lg">Submit</button>
            </form> */}
            {/* new */}
            <div className="min-h-screen p-6 bg-gray-100 text-gray-900">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
          <p className="text-lg mb-4">
            We would love to hear from you! Please fill out the form below to get in touch with us.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Message:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-400 rounded-lg text-white font-bold transition duration-300 hover:bg-green-600"
            >
              Send Message
            </button>
          </form>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
            <ul className="list-disc pl-5 mb-4">
              <li>Email: support@foodiehaven.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: 123 Foodie St, Food Town, FT 12345</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

            
        </div>
    );
};

export default Contact;