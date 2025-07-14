import axios from "axios";
import { useEffect, useState } from "react";

export default function AdminProductsPage() {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        axios.get(import.meta.env.VITE_BACKEND_URL + "/api/product")
            .then((response) => {
                console.log("Products:", response.data);
                setProducts(response.data);
            });
    }, []);



    return (
        <div className="w-full h-full bg-red-500 rounded-lg">
            {
                products.map(
                    (product, index) => (
                        <div key={index} className="bg-white p-4 m-2 rounded shadow">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-bold">{product.name}</h2>
                                <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                            </div>
                            <div className="flex items-center">
                                <p className="text-green-600">${product.price}</p>

                            </div>
                        </div>
                    ))
            }
        </div>
    );
}