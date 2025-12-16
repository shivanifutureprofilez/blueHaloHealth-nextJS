import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Popup from '@/components/Popup';
import toast from 'react-hot-toast';
import AdminRoutes from '@/pages/api/AdminRoutes';
import { CiEdit } from "react-icons/ci";

function AddAgeGroup({ id, fetchGroups, isEdit, group }) {
    const [icons, setIcons] = useState(null);
    const router = useRouter();
    const [imgFormat, setImgFormat] = useState('url')
    const [items, setItems] = useState({
        title: group?.title || "",
        description: group?.description || "",
        icon: group?.icon || "",
        // image: group?.image || "",
        // minAge: group?.minAge || "",
        _id: group?._id || "",
        // maxAge: group?.maxAge || "",
        coverImg: group?.coverImg || ""
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
            coverImg: group?.coverImg || ""
        })
    }, [group])

    const [action, setAction] = useState();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setItems(values => ({ ...values, [name]: value }));
    }

    const handleFile = (e) => {
        const file = e.target.files[0]
        setItems((prev) => ({ ...prev, coverImg: file }))
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
            const formdata = new FormData();
            formdata.append("title", items?.title);
            formdata.append("icon", items?.icon);
            formdata.append("description", items?.description);
            formdata.append("coverImg", items?.coverImg);
            const data = lists.addagegroup(formdata);
            data.then((res) => {
                if (res.data.status) {
                    toast.success(res.data.message || "Age Group added successfully!");
                    router.push("/admin/agegroups/list");
                    fetchGroups && fetchGroups();
                    setAction("close")
                }
                else {
                    toast.error(res.data.message || "Unable to add age group")
                }
                setLoading(false);
            })
                .catch((err => {
                    console.log("error ", err);
                }));

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
            const formdata = new FormData();
            formdata.append("_id", items?._id);
            formdata.append("title", items?.title);
            formdata.append("icon", items?.icon);
            formdata.append("description", items?.description);
            formdata.append("coverImg", items?.coverImg);
            const data = lists.editAge(formdata);
            data.then((res) => {
                if (res.data.status) {
                    toast.success(res.data.message || "Mega Service updated successfully!");
                    // router.push("/admin/agegroups/list");
                    // fetchGroups && fetchGroups();
                    // setAction("close")
                    window.location.reload(false)
                } else {
                    toast.error(res.data.message || "Mega Service updated successfully!");
                }
            }).catch((err => {
                console.log("error ", err);
            }));

            setLoading(false);
        } catch (error) {
            console.error("Error:", error);
            toast.error("Something went wrong");
            setLoading(false);
        }
    };
    return (
        <Popup action={action} size='md:max-w-[700px]' bg="" space={isEdit ? 'p-6 md:p-4' : "p-6 md:p-8"} btnclasses={isEdit ? "bg-green-dark p-1.5 rounded-xl cursor-pointer" : "button cursor-pointer"} btntext={isEdit ? <CiEdit /> : "+ Add Categories"} >
            <div className=" w-full  flex flex-wrap md:flex-nowrap ">
                <div className="w-full relative ">
                    <h5 className="text-xl font-medium text-gray-800 mt-2">{isEdit ? "Edit " : "Add Categories"}</h5>
                    <form className="mt-6"
                    // onSubmit={isEdit ? handleEdit : handleSubmit}
                    >
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
                        <div className="flex gap-3 mb-3 ">
                            <button type="button" className={`w-full md:w-40 mt-6 py-2 rounded-lg ${imgFormat == 'url' ? 'bg-blue-600 hover:bg-blue-700' : "bg-gray-600 hover:bg-gray-700"} cursor-pointer
                 text-white text-sm transition-all duration-300 shadow-md
                 `}
                                onClick={() => setImgFormat('url')}>Cover Image URL </button>
                            <button type="button" className={` w-full md:w-40 mt-6 py-2 rounded-lg ${imgFormat == 'file' ? 'bg-blue-600 hover:bg-blue-700' : "bg-gray-600 hover:bg-gray-700"} cursor-pointer
                 text-white text-sm transition-all duration-300 shadow-md
                `}
                                onClick={() => setImgFormat('file')}>Cover Image File</button>
                        </div>
                        {imgFormat == 'url' ? <div>
                            <p className="text-gray-400 text-sm mb-3">Please add a image file url for the cover Image of this category.</p>
                             
                            <input
                                type="text"
                                placeholder="Enter image URL"
                                defaultValue={items.coverImg || ""}
                                value={items.coverImg || ""}
                                name="coverImg"
                                onChange={(e) =>
                                    setItems((prev) => ({
                                        ...prev,
                                        coverImg: e.target.value,
                                    }))
                                }
                                className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                            />
                        </div> :
                            <div>
                                <p className="text-gray-400 text-sm mb-3">Please chhose file from the system for the thumbnail of this category.</p>
                                 
                                <input
                                    type="file"
                                    placeholder="Enter image URL"
                                    onChange={handleFile}
                                    className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                                />
                            </div>}
                        <div className='mt-6'>
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
                        className="button w-full  mt-6 cursor-pointer md:w-32  py-3"
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