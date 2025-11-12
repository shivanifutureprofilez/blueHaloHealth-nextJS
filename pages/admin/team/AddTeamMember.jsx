import Popup from '@/components/Popup';
import AdminRoutes from '@/pages/api/AdminRoutes';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { CiEdit } from 'react-icons/ci';

function AddTeamMember({item, isEdit, fetchData}) {
    const router = useRouter();
    console.log("item ",item);
    const [items, setItems] = useState({
        name: item?.name || "",
        designation: item?.designation || "",
        description: item?.description || "",
        imageLink: item?.imageLink || "",
    })
    useEffect(() => {
        setItems({
            name: item?.name || "",
            designation: item?.designation || "",
            description: item?.description || "",
            imageLink: item?.imageLink || "",
        })
    }, [item]);

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
            // if (!items.name || !items.designation || !items.description || !items.imageLink) {
            //     toast.error("All fields are required");
            //     return false;
            // }
            setLoading(true);
            const lists = new AdminRoutes();
            const data = lists.addMember(items);
            data.then((res) => {
                toast.success(res?.data?.message || "Team Member Data Added Successfully");
                router.push("/admin/team");
                setItems({
                    name: "",
                    designation: "",
                    description: "",
                    imageLink: "",
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
            if (!items.name || !items.designation || !items.description || !items.imageLink) {
                toast.error("All fields are required");
                return false;
            }
            console.log("item : ",item);
            setLoading(true);
            const lists = new AdminRoutes();
            const data =  lists.editTeamMember(item?._id, items);
            data.then((res) => {
                toast.success(res?.data?.message || "Team Member Data edited successfully!");
                router.push("/admin/team");
                setItems({
                    name: "",
                    designation: "",
                    description: "",
                    imageLink: "",
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
    return (
        <Popup btntext={isEdit ? <CiEdit /> : "+ Add Team Members"} size='max-w-[700px]' bg="" space={isEdit ? 'p-6 md:p-4' : "p-6 md:p-8"} action={action} btnclasses={isEdit ? "bg-green-dark p-1.5 rounded-xl cursor-pointer" : "button cursor-pointer"}  >
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
                                    placeholder="Enter Team Member Name"
                                    className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                                focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                                />
                            </div>
                            <div >
                                <label className="font-medium text-base block mb-2">Designation</label>
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    value={items?.designation}
                                    name='designation'
                                    placeholder="Enter his/her Designation"
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
                                    placeholder="Enter his/her Description"
                                    className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                                focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                                />
                            </div>
                            <div>
                                <label className="font-medium text-base block mb-2">Image Link</label>
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    value={items?.imageLink}
                                    name='imageLink'
                                    placeholder="Enter Member's Image Link"
                                    className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                                focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                                />
                            </div>
                        </div>
                    <button
                        onClick={isEdit ? handleEdit : handleSubmit}
                        type="submit"
                        disabled={loading}
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

export default AddTeamMember;