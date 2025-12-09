import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { MdOutlineArrowRightAlt } from 'react-icons/md';
import RoutesLists from '@/pages/api/RoutesLists';

function SimilarService({ pageID, ageId, categoryTitle }) {
    const [list, setLists] = useState([]);
    const searchParams = useSearchParams();
    const activeAgeGroup = searchParams.get('agegroup');
    const [ageGroup, setAgeGroup] = useState(activeAgeGroup);
    const [loading, setLoading] = useState(true);
    
    const toSlug = (str) => {
        if (str) {
            return str
                .toLowerCase()
                .trim()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/^-+|-+$/g, "");
        } else {
            return ''
        }
    };
    
    const [serviceList, setServiceList] = useState([]);
    
    const fetchServices = async () => {
        const lists = new RoutesLists();
        const data = lists.getServices(ageId);
        data
            .then((res) => {
                if (pageID) {
                    const temp = res?.data?.allServices.filter((i) => i._id !== pageID);
                    setServiceList(temp);
                } else {
                    setServiceList(res?.data?.allServices || []);
                }
                setLoading(false)
            })
            .catch((err) => {
                setServiceList([]);
                console.log("err ", err);
                setLoading(false)
            });
    };
    
    useEffect(() => {
        if (ageId) {
            fetchServices();
        }
    }, [pageID, ageId]);
    
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:mt-4 md:mb-8">
                {serviceList && serviceList.map((item, i) => {
                    return (
                        <div 
                            key={i}
                            className="bg-[#e5dfd73d] shadow-sm hover:shadow-md hover:bg-[#F7F4F0] transition-shadow duration-200 rounded-xl overflow-hidden  "
                        >
                            <Link href={`/service/detail/${toSlug(item?._id)}`}>
                                <div className="flex p-3 gap-2">
                                    <div className="rounded-lg w-[60px] h-[60px] flex-shrink-0 overflow-hidden bg-gray-50">
                                        <img
                                            src={item?.bannerImg}
                                            alt={item?.name}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <h2 className="font-semibold text-[17px] ps-3 text-gray-800 flex items-center">
                                        {item?.name}
                                    </h2>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default SimilarService;