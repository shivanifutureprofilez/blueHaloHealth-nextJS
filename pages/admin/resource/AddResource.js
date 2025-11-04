import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Popup from '@/components/Popup';
import toast from 'react-hot-toast';
import AdminRoutes from '@/pages/api/AdminRoutes';
import { CiEdit } from "react-icons/ci";

function AddResource({ fetchData, isEdit, item }) {
    const router = useRouter();
    const [items, setItems] = useState({
        title: item?.title || "",
        date: item?.date || "",
        tags: item?.tags || "",
        link: item?.link || "",
    })
    useEffect(() => {
        setItems({
            title: item?.title || "",
            date: item?.date || "",
            tags: item?.tags || "",
            link: item?.link || "",
        })
    }, [item])

    const [action, setAction] = useState();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setItems(values => ({ ...values, [name]: value }));
    }



    const [tag, setTags] = useState([]);
    const changeTags = (value) => {
        let tmp;

        if (tag.includes(value)) {
            // Remove the value
            tmp = tag.filter((t) => t !== value);
        } else {
            // Add the value
            tmp = [...tag, value];
        }

        setTags(tmp); // update tag state
        setItems({ ...items, tags: tmp }); // update items state
    };
    console.log("items",items);






    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        try {
            e.preventDefault();
            if (!items.title || !items.date || !items.link || !items.tags) {
                toast.error("All fields are required");
                return false;
            }
            setLoading(true);
            const lists = new AdminRoutes();
            const data = lists.addresource(items);
            data.then((res) => {
                toast.success(res?.data?.message || "Resource Added Successfully");
                router.push("/admin/resource");
                setItems({
                    title: item?.title || "",
                    date: item?.date || "",
                    tags: item?.tags || "",
                    link: item?.link || "",
                })
                fetchData && fetchData();
                setLoading(false);
                setAction("close")
            }).catch((err) => {
                console.error("Error:", err);
                toast.error("Something went wrong");
                setLoading(false);
            });
        } catch (error) {
            console.error("Error:", error);
            toast.error("Something went wrong");
            setLoading(false);
        }
    };
    const handleEdit = async (e) => {
        try {
            e.preventDefault();
           if (!items.title || !items.date || !items.link || !items.tags) {
                toast.error("All fields are required");
                return false;
            }
            setLoading(true);
            const lists = new AdminRoutes();
            const data = lists.editResource(item?._id, items);
            data.then((res) => {
                toast.success(res?.data?.message || "Resource edited successfully!");
                router.push("/admin/resource");
                setItems({
                    title:  "",
                    date: "",
                    tags: "",
                    link: "",
                });
                fetchData && fetchData();
                setAction("close")
                setLoading(false);
            }).catch((err) => {
                console.error("Error:", err);
                toast.error("Something went wrong");
                setLoading(false);
            });

        } catch (error) {
            console.error("Error:", error);
            toast.error("Something went wrong");
            setLoading(false);
        }
    };
    console.log("item ", item);
    console.log("items ", items);

    return (
        <Popup action={action} size='max-w-[700px]' bg="" space={isEdit ? 'p-6 md:p-4' : "p-6 md:p-8"} btnclasses={isEdit ? "bg-green-dark p-1.5 rounded-xl cursor-pointer" : "button cursor-pointer"} btntext={isEdit ? <CiEdit /> : "+ Add Resource"} >
            <div className=" w-full  flex flex-wrap md:flex-nowrap ">
                <div className="w-full relative ">
                    <h5 className="text-2xl font-medium text-gray-800 mt-2">{isEdit ? "Edit " : "Add Age Group"}</h5>
                    <form className="mt-6" onSubmit={isEdit ? handleEdit : handleSubmit}>
                        <div className='grid grid-cols-1 gap-4 mb-4 mt-3'>
                            <div >
                                <label className="font-medium text-base block mb-2">Title</label>
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    value={items?.title}
                                    name='title'
                                    placeholder="Enter Resource Title"
                                    className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                                />
                            </div>
                            
                            <div >
                                <label className="font-medium text-base block mb-2">Publish Date</label>
                                <input
                                    type="date"
                                    onChange={handleChange}
                                    value={items?.date ? items.date.split("T")[0] : ""}
                                    name='date'
                                    placeholder="Enter Publish Date For Resource"
                                    className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                                />
                            </div>


                            <div>
                                <label className="font-medium text-base block mb-2">Link</label>
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    value={items?.link}
                                    name='link'
                                    placeholder="Enter Resource Link"
                                    className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                                />
                            </div>
                        </div>
                        <div >
                            <label className="font-medium mt-2 text-base block mb-2">Resource Tags</label>

                            <div>
                                <button type="button" onClick={()=>changeTags("parent")} className={`${tag.includes("parent") ? 'opacity-[0.9] bg-green-600 text-white' : 'bg-gray-100'} me-3  text-black rounded-[30px] px-3 py-2 capitalize`}>Parent</button>
                                <button type="button" onClick={()=>changeTags("physician")} className={`${tag.includes("physician") ? 'opacity-[0.9] bg-green-600 text-white' : 'bg-gray-100'} me-3   text-black rounded-[30px] px-3 py-2 capitalize`}>Physician</button>
                                <button type="button" onClick={()=>changeTags("blueHaloHealth")} className={`${tag.includes("blueHaloHealth") ? 'opacity-[0.9] bg-green-600 text-white' : 'bg-gray-100'} me-3 b text-black rounded-[30px] px-3 py-2 capitalize`}>BlueHaloHealth</button>
                            </div>
                        </div>
                        <button 
                            type="submit"
                            className="button w-full  mt-6  md:w-32  py-3"
                        >
                            {loading ? "Loading..." : "Submit"}
                        </button>
                    </form>
                </div>
            </div>
            <div>
            </div>
        </Popup>
    )
}

export default AddResource;