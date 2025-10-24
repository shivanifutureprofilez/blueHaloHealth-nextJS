import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Popup from '@/components/Popup';
import toast from 'react-hot-toast';
import AdminRoutes from '@/pages/api/AdminRoutes';
import dynamic from 'next/dynamic';
const ServiceEditor = dynamic(() => import('./ServiceEditor'), { ssr: false });


function AddService({ id, item, }) {

    const router = useRouter();
    const [editorHtmlContent, setEditorHtmlContent] = useState(null);
    const [items, setItems] = useState({
        name: "",
        bannerImg: "",
        description: "",
        benefits: "",
        content:editorHtmlContent
    });
    
    console.log("items ", items)
    const handleChange = (e) => {r
        const name = e.target.name;
        const value = e.target.value;
        setItems(values => ({ ...values, [name]: value }));
    }
    const [loading, setLoading] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // if (!items.name || !items.provider || !items.bannerImg) {
            //     toast.error("All fields are required");
            //     return false;
            // }
            setLoading(true);
            const lists = new AdminRoutes();
            const data = await lists.addservice({...items, content:editorHtmlContent});
            toast.success("Service added successfully!");
            router.push("/admin/service/list");
            setItems({
                name: "",
                provider: "",
                bannerImg: "",
            });
            setLoading(false);
        } catch (error) {
            console.error("Error:", error);
            toast.error("Something went wrong");
            setLoading(false);
        }
    };
    return (
        <Popup size='max-w-[700px]' bg="" space={'p-6 md:p-8'} btnclasses="button cursor-pointer" btntext="+ Add Services">
            <div className=" w-full  flex flex-wrap md:flex-nowrap ">
                <div className="w-full relative ">
                    <h5 className="text-2xl font-medium text-gray-800 mt-2">Add Service</h5>
                    <form className="mt-6" onSubmit={handleSubmit}>
                        <div className='grid grid-cols-2 gap-4 mb-4 mt-3'>
                            <div >
                                <label className="font-medium text-base block mb-2">Name</label>
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    value={items?.name}
                                    name='name'
                                    placeholder="Enter Age Group Title"
                                    className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                                />
                            </div>
                            <div>
                                <label className="font-medium text-base block mb-2">Image Url</label>
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    value={items?.bannerImg}
                                    name='bannerImg'
                                    placeholder="Type Image URL for Age Group Banner"
                                    className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                                />
                            </div>
                        </div>
                            <div >
                                <label className="font-medium text-base block mb-2">Description</label>
                                <textarea type="text"
                                    onChange={handleChange}
                                    value={items?.description}
                                    name='description' placeholder="Enter Age Group Description" rows={3} className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 py-3 px-4" />
                        
                            </div>
                            
                            
                            
                        {/* </div> */}
                         <div className='grid grid-cols-2 gap-4 mb-4 mt-3'>
                            <div >
                                <label className="font-medium text-base block mb-2">Age Group Name</label>
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    value={items?.name}
                                    name='name'
                                    placeholder="Enter Age Group Title"
                                    className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                                />
                            </div>
                            <div>
                                <label className="font-medium text-base block mb-2">Benefits</label>
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    value={items?.benefits}
                                    name='bannerImg'
                                    placeholder="Type Age Group Benefits"
                                    className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                                />
                            </div>
                             <div >
                                <label className="font-medium text-base block mb-2">Age Group Name</label>
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    value={items?.name}
                                    name='name'
                                    placeholder="Enter Age Group Title"
                                    className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                                />
                            </div>
                            <div>
                                <label className="font-medium text-base block mb-2">Benefits</label>
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    value={items?.benefits}
                                    name='bannerImg'
                                    placeholder="Type Age Group Benefits"
                                    className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                                />
                            </div>
                             <div >
                                <label className="font-medium text-base block mb-2">Age Group Name</label>
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    value={items?.name}
                                    name='name'
                                    placeholder="Enter Age Group Title"
                                    className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                                />
                            </div>
                            <div>
                                <label className="font-medium text-base block mb-2">Benefits</label>
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    value={items?.benefits}
                                    name='bannerImg'
                                    placeholder="Type Age Group Benefits"
                                    className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                                />
                            </div>
                             <div >
                                <label className="font-medium text-base block mb-2">Age Group Name</label>
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    value={items?.name}
                                    name='name'
                                    placeholder="Enter Age Group Title"
                                    className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                                />
                            </div>
                            <div>
                                <label className="font-medium text-base block mb-2">Benefits</label>
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    value={items?.benefits}
                                    name='bannerImg'
                                    placeholder="Type Age Group Benefits"
                                    className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                                />
                            </div>

                         </div>
                    </form>
                    <ServiceEditor setEditorHtmlContent={setEditorHtmlContent}  />

                    <button
                        onClick={handleSubmit}
                        type="submit"
                        disabled={loading}
                        className="button w-full  mt-6  md:w-32  py-3"
                    >
                        {loading ? "Loading..." : "Submit"}
                    </button>
                </div>
            </div>
            <div>
            </div>
        </Popup>
    )
}

export default AddService;