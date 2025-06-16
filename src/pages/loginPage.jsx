export default function LoginPage() {

    return (
        <div className=" w-full h-screen bg-red-700  bg-[url('/loginbg.jpg')] bg-cover bg-center flex">
            <div className=" w-[50%] h-full">

            </div>
            <div className="w-[50%] h-full flex items-center justify-center">
                <div className="w-[450px] h-[600px] backdrop-blur-3xl shadow-xl rounded-xl flex flex-col items-center justify-center ">
                    <input className="w-[400px] h-[50px] border border-white rounded-xl text-center m-[10px]" type="text" placeholder="Email" />
                    <input className="w-[400px] h-[50px] border border-white rounded-xl text-center m-[10px]" type="password" placeholder="password" />
                    <button className="w-[400px] h-[50px] bg-green-600 text-white rounded-xl cursor-pointer">Login</button>
                </div>
            </div>
        </div>
    )
}
