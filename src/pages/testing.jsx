import { useState } from "react";

export default function Testing() {
    const [number, setNumber] = useState(0,)

    function increament() {
        let newValue = number + 1;
        setNumber(newValue)
    }

    function decreament() {
        let newValue = number - 1;
        setNumber(newValue)
    }

    return (
        <div className="w-full h-screen bg-amber-200 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold">{number}</span>
            <div className="w-full flex items-center justify-center">
                <button onClick={increament} className="bg-blue-600 text-white p-2 rounded-lg w-[50px] cursor-pointer">+</button>
                <button onClick={decreament} className="bg-blue-600 text-white p-2 rounded-lg w-[50px] cursor-pointer">-</button>
            </div>
        </div>
    )
}
