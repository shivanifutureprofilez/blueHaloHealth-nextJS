import React, { useState } from 'react'
import AuthLayout from '../layout/AuthLayout';
import { useRouter } from 'next/router';
import { useParams } from 'next/navigation';
import Popup from '@/components/Popup';

function AddAgeGroup({id, item}) {
   const router = useRouter();
        const [items, setItems] = useState({
            title: "",
            description: "chair",
            image: "",
            min_age: "",
            max_age: "",
        })
    // const ShowProductDetails = (id) => {
    //     Api.get(`/product/product-detail/${id}`)
    //         .then((res) => {
    //             console.log("res", res);
    //             if (res.data.status) {
    //                 //toast.success(res.data.message);
    //                 const data = res.data.productData;
    //                 setItems({
    //                     title: data.title || "",
    //                     description: data.description || '',
    //                     brand_name: data.brand_name || '',
    //                     image: data.image || '',
    //                     min_age: data.min_age || '',
    //                     max_age: data.max_age || '',
    //                 })
    //             } else {
    //                 toast.error(res.data.message);
    //             }
    //         })
    //         .catch((error) => {
    //             console.log("error", error);
    //             toast.error("Unable To Fetch Product Details. Try Again Later.");
    //         });
    // };
    // console.log("items" ,items)
    // useEffect(() => {
    //     if (id) {
    //         ShowProductDetails(id);
    //     }
    // }, [id]);
    const editProduct = () => {
        const data = Api.post(`/product/update-product`, items);
        data.then((res) => {
            if (res.data.status) {
                toast.success(res.data.message);
                router.push("/admin");
                navigate("/admin/product");
            } else {
                toast.error(res.data.message)
            }
        })
    }
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setItems(values => ({ ...values, [name]: value }));
    }

    const [loading, setLoading] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (items.title === '' || items.description === '' || items.image === '' || items.min_age === '' || items.max_age === '') {
                toast.error("All fields are required");
                return false;
            }
            setLoading(true)
            const response = await Api.post('/product/add-product', items);
            toast.success(response?.data?.message);
            router.push("/admin/agegroups/list");
            setItems({
                title: "",
                description: "",
                image: "",
                min_age: "",
                max_age: ""
            })
            setLoading(false)
        }
        catch (error) {
            console.log("error :", error);
            toast.error(error.response.data.message || "Something went wrong");
            setLoading(false);
        }
    };
  return (
    <Popup size='max-w-[700px]' bg="" space={'p-6 md:p-8'} btnclasses="button cursor-pointer" btntext="+ Add Age Group">
            <div className=" w-full  flex flex-wrap md:flex-nowrap ">
                <div className="w-full relative ">
                        <h5 className="text-2xl font-medium text-gray-800 mt-2">Add Age Group</h5>
                        <form className="mt-6" onSubmit={handleSubmit}>
                            <div className='grid grid-cols-2 gap-4 mb-4 mt-3'>
                                <div >
                                    <label className="font-medium text-base block mb-2">Title</label>
                                    <input
                                        type="text"
                                        onChange={handleChange}
                                        value={items?.title}
                                        name='name'
                                        placeholder="Enter Age Group Title"
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
                                        name='name'
                                        placeholder="Enter Age Group Description"
                                        className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                                    />
                                </div>
                                <div>
                                    <label className="font-medium text-base block mb-2">Image Url</label>
                                    <input
                                        type="text"
                                        onChange={handleChange}
                                        value={items?.image}
                                        name='image'
                                        placeholder="Type Image URL for Age Group Banner"
                                        className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                                    />
                                </div>
                                <div >
                                    <label className="font-medium text-base block mb-2">Minimum Age</label>
                                    <input
                                        type="number"
                                        onChange={handleChange}
                                        value={items?.min_age}
                                        name='stock'
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
                                        value={items?.max_age}
                                        name='stock'
                                        placeholder="Enter Maximum Age For This Age Group"
                                        className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                                    />
                                </div>   
                                </div> 
                        </form>
                    <button
                        onClick={id ? editProduct : handleSubmit}
                        type="submit"
                        disabled={loading}
                        className="button w-full  mt-6  md:w-32  py-3"
                    >
                        {id ? "Edit" : (loading ? "Loading..." : "Submit")}
                    </button>
                </div>
            </div>
        <div>
        </div>
    </Popup>
  )
}

export default AddAgeGroup;