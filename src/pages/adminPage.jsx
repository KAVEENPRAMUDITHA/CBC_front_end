import { Link, Route, Routes } from "react-router-dom";
import { FaPlaneDeparture, FaUsers, FaWarehouse } from "react-icons/fa";
import AdminProductsPage from "./admin/products";

export default function AdminPage() {
    return (
        <div className="w-full h-screen bg-gray-200 flex p-2">
            <div className="w-[300px] h-full ">
                <Link to="/admin/users" className="flex m-2 p-2 items-center"><FaUsers className="mr-2" /> Users</Link>
                <Link to="/admin/orders" className="flex  m-2 p-2 items-center"><FaPlaneDeparture className="mr-2" />Orders</Link>
                <Link to="/admin/products" className="flex m-2 p-2 items-center"><FaWarehouse className="mr-2" />Products</Link>

            </div>
            <div className="h-full bg-white w-[calc(100vw-300px)] rounded-b-xl">
                <Routes path="/*" >
                    <Route path="/products" element={<AdminProductsPage />} />
                    <Route path="/orders" element={<h1>Orders</h1>} />
                    <Route path="/users" element={<h1>Users</h1>} />
                    <Route path="/*" element={<h1>404 not found</h1>} />
                </Routes>
            </div>

        </div>
    )
}