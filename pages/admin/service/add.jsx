import React, { useEffect, useState } from "react";
import AuthLayout from "../layout/AuthLayout";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import AdminRoutes from "@/pages/api/AdminRoutes";
import dynamic from "next/dynamic";
import RoutesLists from "@/pages/api/RoutesLists";
const ServiceEditor = dynamic(() => import("./ServiceEditor"), { ssr: false });

export default function add() {
  const router = useRouter();
  const [editorHtmlContent, setEditorHtmlContent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [ageGroupBenefits, setageGroupBenefits] = useState([{ name: "", benefits: "" }]);
  const [items, setItems] = useState({
    title: "",
    name: "",
    bannerImg: "",
    description: "",
    content: "",
  });

  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const main = new RoutesLists();
      const response = await main.getAgeGroups();
      if (response.data) {
        setData(response.data.ageGroupList);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log("items ", items);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setItems((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      setLoading(true);
      const lists = new AdminRoutes();
      const response = await lists.addservice({
        title: items.title, 
        name: items.name, 
        bannerImg: items.bannerImg, 
        description: items.description, 
        content: items.content, 
        benefits: ageGroupBenefits,
      });
      if (response?.data?.status) {
        toast.success("Service added successfully!");
        router.push("/admin/service/list");
        setItems({
            title: "",
            name: "",
            bannerImg: "",
            description: "",
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

  const handleAgeGroupChange = (index, e) => {
    const { name, value } = e.target;
    const updatedGroups = [...ageGroupBenefits];
    updatedGroups[index][name] = value;
    setageGroupBenefits(updatedGroups);
  };

  const handleAddMore = () => {
    const lastGroup = ageGroupBenefits[ageGroupBenefits.length - 1];
    if (lastGroup.name.trim() && lastGroup.benefits.trim()) {
      setageGroupBenefits([...ageGroupBenefits, { name: "", benefits: "" }]);
      return;
    }
    toast.error("Please fill out all fields before adding another age group");
  };

  return (
    <AuthLayout>
      <div className="w-full flex flex-wrap md:flex-nowrap text-gray-100">
        <div className="w-full relative">
          <h5 className="text-2xl font-semibold text-gray-100 mt-2">
            Add Service
          </h5>

          <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
            {/* Name and Image URL */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
              <label className="font-medium text-sm text-gray-300 block mb-2">
                Title
              </label>
              <input
                onChange={handleChange}
                value={items?.title}
                name="title"
                placeholder="Enter title"
                className="w-full bg-gray-700 border border-gray-600 text-gray-100 text-sm rounded-lg 
                     focus:ring-2 focus:ring-blue-500 focus:border-blue-500 py-3 px-4 
                     placeholder-gray-400 outline-none transition-all duration-200"
              />
            </div>
              <div>
                <label className="font-medium text-sm text-gray-300 block mb-2">
                  Select Age Group
                </label>
                <select
                  name="name" // store selected _id here
                  value={items?.name}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 text-gray-100 text-sm rounded-lg 
               focus:ring-2 focus:ring-blue-500 focus:border-blue-500 py-3 px-4 
               placeholder-gray-400 outline-none transition-all duration-200"
                >
                  <option value="" disabled>
                    Select age group
                  </option>
                  {data &&
                    data?.map((item) => (
                      <option key={item?._id} value={item?._id}>
                        {item?.title}
                      </option>
                    ))}
                </select>
              </div>
              {/* <div>
                <label className="font-medium text-sm text-gray-300 block mb-2">
                  Upload Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setItems((prev) => ({
                      ...prev,
                      bannerImg: e.target.files[0],
                    }))
                  }
                  className="w-full bg-gray-700 border border-gray-600 text-gray-100 text-sm rounded-lg 
               focus:ring-2 focus:ring-blue-500 focus:border-blue-500 py-2 px-3 
               placeholder-gray-400 outline-none transition-all duration-200"
                />
                {items.bannerImg && (
                  <p className="mt-2 text-sm text-gray-300">
                    Selected file: {items.bannerImg.name}
                  </p>
                )}
              </div> */}
              <div>
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
              </div>
            </div>

            {/* Description */}
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
            <div className="grid grid-cols-1 gap-5">
              {ageGroupBenefits &&
                ageGroupBenefits?.map((group, i) => (
                  <div
                    key={i}
                    className="flex flex-col md:flex-row md:space-x-4 mb-4"
                  >
                    {/* Age Group Name */}
                    <div className="flex-1">
                      <label className="font-medium text-sm text-gray-300 block mb-2">
                        Age Group Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={group.name}
                        onChange={(e) => handleAgeGroupChange(i, e)}
                        placeholder="Enter Age Group Title"
                        className="w-full bg-gray-700 border border-gray-600 text-gray-100 text-sm rounded-lg 
                 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 py-3 px-4 
                 placeholder-gray-400 outline-none transition-all duration-200"
                      />
                    </div>

                    {/* Benefits */}
                    <div className="flex-1 mt-4 md:mt-0">
                      <label className="font-medium text-sm text-gray-300 block mb-2">
                        Benefits
                      </label>
                      <input
                        type="text"
                        name="benefits"
                        value={group.benefits}
                        onChange={(e) => handleAgeGroupChange(i, e)}
                        placeholder="Type Age Group Benefits"
                        className="w-full bg-gray-700 border border-gray-600 text-gray-100 text-sm rounded-lg 
                 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 py-3 px-4 
                 placeholder-gray-400 outline-none transition-all duration-200"
                      />
                    </div>
                  </div>
                ))}
            </div>
            <div className="flex items-center gap-4 mt-4">
              <button
                type="button"
                onClick={handleAddMore}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-md transition-all duration-200"
              >
                + Add More
              </button>
            </div>
          </form>

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
            type="submit"
            disabled={loading}
            className="w-full md:w-40 mt-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 cursor-pointer
                 text-white font-medium transition-all duration-300 shadow-md
                 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </div>
      </div>
    </AuthLayout>
  );
}
