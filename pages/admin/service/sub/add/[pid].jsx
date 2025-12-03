import AdminRoutes from '@/pages/api/AdminRoutes';
import React, { useState } from 'react'

import { useRouter } from 'next/router';
import dynamic from "next/dynamic";
import toast from 'react-hot-toast';
import AuthLayout from '@/pages/admin/layout/AuthLayout';
const ServiceEditor = dynamic(() => import("../.././ServiceEditor"), { ssr: false });

function add() {
    const router = useRouter();
    const { pid } = router.query;
    console.log("pid",pid);
    const [imgFormat, setImgFormat] = useState('url')
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState({
        name: "",
        description: "",
        bannerImg: "",
        service: pid,
        content: "",
    });
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setItems((values) => ({ ...values, [name]: value }));
    };
    const handleFile = (e) => {
        const file = e.target.files[0]
        setItems((prev) => ({ ...prev, bannerImg: file }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const lists = new AdminRoutes();
            const formdata = new FormData();
            formdata.append("name", items?.name);
            formdata.append("description", items?.description);
            formdata.append("bannerImg", items?.bannerImg);
            formdata.append("content", items?.content);
            formdata.append("service", pid);
            const response = await lists.addSubService(formdata);
            if (response?.data?.status) {
                toast.success("Sub Service added successfully!");
                router.push("/admin/service/list");
                setItems({
                    name: "",
                    description: "",
                    bannerImg: "",
                    content: "",
                });
            } else {
                toast.error(response.data.message);
            }
            setLoading(false);
        } catch (error) {
            console.error("Error:", error);
            toast.error("Something went wrong");
            setLoading(false);
        }
    };
    return (
        <AuthLayout>
            <div className="w-full flex flex-wrap md:flex-nowrap text-gray-100">
                <div className="w-full relative">
                    <h5 className="text-2xl font-semibold text-gray-100 mt-2">
                        Add Sub Service
                    </h5>
                    <div className="mt-6 space-y-6" >
                        {/* Name and Image URL */}
                        <div className="grid grid-cols-1  gap-5">
                            <div>
                                <label className="font-medium text-sm text-gray-300 block mb-2">
                                    Name
                                </label>
                                <input
                                    onChange={handleChange}
                                    value={items?.name}
                                    name="name"
                                    placeholder="Enter title"
                                    className="w-full bg-gray-700 border border-gray-600 text-gray-100 text-sm rounded-lg 
                         focus:ring-2 focus:ring-blue-500 focus:border-blue-500 py-3 px-4 
                         placeholder-gray-400 outline-none transition-all duration-200"
                                />
                            </div>

                        </div>
                        <div>
                            <label className="font-medium text-sm text-gray-300 block mb-2">
                                Description
                            </label>
                            <textarea
                                onChange={handleChange}
                                value={items?.description}
                                name="description"
                                placeholder="Enter Age Group Description"
                                rows={3}
                                className="w-full bg-gray-700 border border-gray-600 text-gray-100 text-sm rounded-lg 
                         focus:ring-2 focus:ring-blue-500 focus:border-blue-500 py-3 px-4 
                         placeholder-gray-400 outline-none transition-all duration-200"
                            />
                        </div>
                        <div className="flex gap-3">
                            <button className={`w-full md:w-40 mt-6 py-2 rounded-lg ${imgFormat == 'url' ? 'bg-blue-600 hover:bg-blue-700' : "bg-gray-600 hover:bg-gray-700"} cursor-pointer
                     text-white text-sm transition-all duration-300 shadow-md
                     `}
                                onClick={() => setImgFormat('url')}>Thumbnail URL </button>
                            <button className={` w-full md:w-40 mt-6 py-2 rounded-lg ${imgFormat == 'file' ? 'bg-blue-600 hover:bg-blue-700' : "bg-gray-600 hover:bg-gray-700"} cursor-pointer
                     text-white text-sm transition-all duration-300 shadow-md
                    `}
                                onClick={() => setImgFormat('file')}>Thumbnail File</button>
                        </div>
                        {imgFormat == 'url' ? <div>
                            <p className="text-gray-400 text-sm mb-3">Please add a image file url for the thumbnail of this service.</p>
                            <label className="font-medium text-sm text-gray-300 block mb-2">
                                Banner Image URL
                            </label>
                            <input
                                type="text"
                                placeholder="Enter image URL"
                                value={items.bannerImg || ""}
                                onChange={(e) =>
                                    setItems((prev) => ({
                                        ...prev,
                                        bannerImg: e.target.value,
                                    }))
                                }
                                className="w-full bg-gray-700 border border-gray-600 text-gray-100 text-sm rounded-lg 
                        focus:ring-2 focus:ring-blue-500 focus:border-blue-500 py-2 px-3 
                        placeholder-gray-400 outline-none transition-all duration-200"
                            />
                        </div> :
                            <div>
                                <p className="text-gray-400 text-sm mb-3">Please chhose file from the system for the thumbnail of this service.</p>
                                <label className="font-medium text-sm text-gray-300 block mb-2">
                                    Banner File
                                </label>
                                <input
                                    type="file"
                                    placeholder="Enter image URL"
                                    onChange={handleFile}
                                    className="w-full bg-gray-700 border border-gray-600 text-gray-100 text-sm rounded-lg 
                        focus:ring-2 focus:ring-blue-500 focus:border-blue-500 py-2 px-3 
                        placeholder-gray-400 outline-none transition-all duration-200"
                                />
                            </div>}
                    </div>
                    <div className="mt-6">
                        <ServiceEditor label="content"
                            desc={items.content}
                            handleBioChange={(val) => {
                                setItems((values) => ({ ...values, content: val }));
                            }}
                        />
                    </div>
                    <button
                        onClick={handleSubmit}

                        // disabled={loading}
                        className="w-full md:w-40 mt-6 py-3 rounded-lg bg-green-600 hover:bg-green-700 cursor-pointer
                     text-white font-medium transition-all duration-300 shadow-md
                     disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        {loading ? "Loading..." : "Submit"}
                    </button>
                </div>
            </div>
        </AuthLayout>
    )
}

export default add