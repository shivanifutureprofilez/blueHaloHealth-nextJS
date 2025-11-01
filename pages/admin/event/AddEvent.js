import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Popup from '@/components/Popup';
import toast from 'react-hot-toast';
import AdminRoutes from '@/pages/api/AdminRoutes';
import { CiEdit } from "react-icons/ci";

function AddEvent({  fetchData, isEdit, item }) {
    const router = useRouter();
    const [items, setItems] = useState({
        name: item?.name || "",
        description: item?.description || "",
        link: item?.link || "",
        linkText: item?.linkText || "",
        startDate: item?.startDate || "",
        endDate: item?.endDate || "",
    })
    useEffect(() => {
        setItems({
            name: item?.name || "",
            description: item?.description || "",
            link: item?.link || "",
            linkText: item?.linkText || "",
            startDate: item?.startDate || "",
            endDate: item?.endDate || "",
        })
    }, [item])

    const [action, setAction] = useState();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setItems(values => ({ ...values, [name]: value }));
    }
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        try {
            e.preventDefault();
            if (!items.name || !items.description || !items.link || !items.linkText || !items.startDate || !items.endDate) {
                toast.error("All fields are required");
                return false;
            }
            setLoading(true);
            const lists = new AdminRoutes();
            const data = lists.addEvent(items);
            data.then((res) => {
                toast.success(res?.data?.message || "Event Added Successfully");
                router.push("/admin/event");
                setItems({
                    name: "",
                    description: "",
                    link: "",
                    linkText: "",
                    startDate: "",
                    endDate: "",
                });
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
            // if (!name || !description || !link || !linkText || !startDate || !endDate) {
            //     toast.error("All fields are required");
            //     return false;
            // }
            setLoading(true);
            const lists = new AdminRoutes();
            const data =  lists.editEvent(item?._id, items);
            data.then((res) => {
                toast.success(res?.data?.message || "Event added successfully!");
                router.push("/admin/event");
                setItems({
                    name: "",
                    description: "",
                    link: "",
                    linkText: "",
                    startDate: "",
                    endDate: "",
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
    console.log("item ",item);
    console.log("items ",items);

    return (
        <Popup action={action} size='max-w-[700px]' bg="" space={isEdit ? 'p-6 md:p-4' : "p-6 md:p-8"} btnclasses={isEdit ? "bg-green-dark p-1.5 rounded-xl cursor-pointer" : "button cursor-pointer"} btntext={isEdit ? <CiEdit /> : "+ Add Event"} >
            <div className=" w-full  flex flex-wrap md:flex-nowrap ">
                <div className="w-full relative ">
                    <h5 className="text-2xl font-medium text-gray-800 mt-2">{isEdit ? "Edit " : "Add Age Group"}</h5>
                    <form className="mt-6" onSubmit={handleSubmit}>
                        <div className='grid grid-cols-2 gap-4 mb-4 mt-3'>
                            <div >
                                <label className="font-medium text-base block mb-2">Name</label>
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    value={items?.name}
                                    name='name'
                                    placeholder="Enter Event Name"
                                    className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                                />
                            </div>
                            <div >
                                <label className="font-medium text-base block mb-2">Description</label>
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    value={items?.description}
                                    name='description'
                                    placeholder="Enter Event Description"
                                    className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                                />
                            </div>
                            <div >
                                <label className="font-medium text-base block mb-2">Start Date</label>
                                <input
                                    min={new Date().toISOString().split("T")[0]}
                                    type="date"
                                    onChange={handleChange}
                                    value={items?.startDate ? items.startDate.split("T")[0] : ""}
                                    name="startDate"
                                    placeholder="Enter Start Date Of The Event"
                                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                                        focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                                />

                            </div>
                            <div >
                                <label className="font-medium text-base block mb-2">End Date</label>
                                <input
                                    type="date"
                                    onChange={handleChange}
                                    value={items?.endDate ? items.endDate.split("T")[0] : ""}
                                    name='endDate'
                                    placeholder="Enter End Date Of The Event"
                                    className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                                />
                            </div>
                            <div>
                                <label className="font-medium text-base block mb-2">Link Text</label>
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    value={items?.linkText}
                                    name='linkText'
                                    placeholder="Enter Event Link Text (Like Learn More or Register)"
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
                                    placeholder="Enter Event Link"
                                    className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                                />
                            </div>
                        </div>
                    </form>
                    <button
                        onClick={isEdit ? handleEdit : handleSubmit}
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

export default AddEvent;