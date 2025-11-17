import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Popup from '@/components/Popup';
import toast from 'react-hot-toast';
import AdminRoutes from '@/pages/api/AdminRoutes';
import { CiEdit } from "react-icons/ci";

function AddAgeGroup({ id, fetchGroups, isEdit, group }) {
    const [icons, setIcons] = useState(null);
    const router = useRouter();
    const [items, setItems] = useState({
        title: group?.title || "",
        description: group?.description || "",
        icon: group?.icon || "",
        // image: group?.image || "",
        // minAge: group?.minAge || "",
        _id: group?._id || "",
        // maxAge: group?.maxAge || "",
    })
    useEffect(() => {
        setItems({
            title: group?.title || "",
            description: group?.description || "",
            icon: group?.icon || "",
            // image: group?.image || "",
            // minAge: group?.minAge || "",
            _id: group?._id || "",
            // maxAge: group?.maxAge || "",
        })
    }, [group])

    const [action, setAction] = useState();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setItems(values => ({ ...values, [name]: value }));
    }
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!items.title || !items.description || !items.icon) {
                toast.error("All fields are required");
                return false;
            }
            setLoading(true);
            const lists = new AdminRoutes();
            const data = await lists.addagegroup(items);
            toast.success("Age Group added successfully!");
            router.push("/admin/agegroups/list");
            setItems({
                title: "",
                description: "",
                icon: ""
                // image: "",
                // minAge: "",
                // maxAge: "",
            });
            fetchGroups && fetchGroups();
            setAction("close")
            setLoading(false);
        } catch (error) {
            console.error("Error:", error);
            toast.error("Something went wrong");
            setLoading(false);
        }
    };

    const handleEdit = async (e) => {
        e.preventDefault();
        try {
            if (!items.title || !items.description || !items.icon) {
                toast.error("All fields are required");
                return false;
            }
            setLoading(true);
            const lists = new AdminRoutes();
            const data = await lists.editAge(items);
            toast.success("Mega Service added successfully!");
            router.push("/admin/agegroups/list");
            setItems({
                title: "",
                description: "",
                icon: ""
                // image: "",
                // minAge: "",
                // maxAge: "",
            });
            fetchGroups && fetchGroups();
            setAction("close")
            setLoading(false);
        } catch (error) {
            console.error("Error:", error);
            toast.error("Something went wrong");
            setLoading(false);
        }
    };
    return (
        <Popup action={action} size='md:max-w-[700px]' bg="" space={isEdit ? 'p-6 md:p-4' : "p-6 md:p-8"} btnclasses={isEdit ? "bg-green-dark p-1.5 rounded-xl cursor-pointer" : "button cursor-pointer"} btntext={isEdit ? <CiEdit /> : "+ Add Age Group"} >
            <div className=" w-full  flex flex-wrap md:flex-nowrap ">
                <div className="w-full relative ">
                    <h5 className="text-xl font-medium text-gray-800 mt-2">{isEdit ? "Edit " : "Add Age Group"}</h5>
                    <form className="mt-6" onSubmit={handleSubmit}>
                        <div className='grid grid-cols-2 gap-4 mb-4 mt-3'>
                            <div >
                                <label className="font-medium text-base block mb-2">Title</label>
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    value={items?.title}
                                    name='title'
                                    placeholder="Enter Mega Service Title"
                                    className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                                />
                            </div>

                            <div>
                                <label className="font-medium text-base block mb-2">Icon</label>
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    value={items?.icon}
                                    name='icon'
                                    placeholder="Type Icon URL Mega Service"
                                    className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="font-medium text-base block mb-2">
                                Description
                            </label>
                            <textarea
                                onChange={handleChange}
                                value={items?.description}
                                name="description"
                                placeholder="Enter Mega Service Description"
                                rows={3}
                                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                            />
                        </div>
                        {/* <div>
                    <select onChange={(e) => setSelectedService(e.target.value)} className='bg-white rounded-lg border border-gray-300 px-4 py-3 w-full outline-none'>
                      <option  className='text-gray-400' value="" >Choose a Service</option>
                      {ageGroupsLists && ageGroupsLists.map((age, i) => {
                        return <>
                          {age && age?.services.map((s, i) => {
                            return <option value={`${s.name} - (${age.title})`} >{s.name} - ({age.title})</option>
                          })}
                        </>
                      })}
                    </select>
                            <div > */}
                        {/* <label className="font-medium text-base block mb-2">Minimum Age</label>
                                <input
                                    type="number"
                                    onChange={handleChange}
                                    value={items?.minAge}
                                    name='minAge'
                                    placeholder="Enter Minimum Age For This Age Group"
                                    className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                                />
                            </div>
                            <div >
                                <label className="font-medium text-base block mb-2">Maximum Age</label>
                                <input
                                    type="number"
                                    onChange={handleChange}
                                    value={items?.maxAge}
                                    name='maxAge'
                                    placeholder="Enter Maximum Age For This Age Group"
                                    className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                                />
                            </div> */}

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

export default AddAgeGroup;