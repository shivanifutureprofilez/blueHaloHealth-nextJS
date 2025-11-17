import React, { useEffect, useState } from 'react'
import Heading from './Heading';
import Image from 'next/image';
import ResourceCard from './ResourceCard';
import RoutesLists from '@/pages/api/RoutesLists';

function Resource() {
    // const resource = [
    //     {
    //         id: 'start-here',
    //         title: 'Utah Support Guide',
    //         label: 'Resource',
    //         date: 'October 3, 2025',
    //         tags: ['parent', 'care'],
    //         link: 'https://www.egyankosh.ac.in/bitstream/123456789/92699/1/Unit-18.pdf'
    //     },
    //     {
    //         id: 'tennessee-autism-aba-directory',
    //         title: 'Tennessee Autism & ABA Directory Tennessee Autism & ABA DirectoryTennessee Autism & ABA Directory',
    //         label: 'Resource',
    //         date: 'October 3, 2025',
    //         tags: ['parent', 'physician'],
    //         link: 'https://www.egyankosh.ac.in/bitstream/123456789/92699/1/Unit-18.pdf',
    //     },
    //     {
    //         id: 'utah-support-guide',
    //         title: 'Utah Support Guide',
    //         label: 'Resource',
    //         date: 'October 3, 2025',
    //         tags: ['parent', 'care'],
    //         link: 'https://www.egyankosh.ac.in/bitstream/123456789/92699/1/Unit-18.pdf'
    //     },

    // ]
 const [loading, setLoading] = useState(false);
  const [resources, setResources] = useState([]);
      const fetchData = async () => {
    try {
      setLoading(true);
      const lists = new RoutesLists();
      const data = lists.getResources();
      data.then((res) => {
        setResources(res?.data?.resourceList && res?.data?.resourceList.slice(0,3));
        // setFiltred(res?.data?.resourceList || []);
        setLoading(false)
      }).catch((err) => {
        setResources([]);
        console.log("error : ", err);
        setLoading(false);
      })
    } catch (error) {
      setLoading(false);
      setResources([]);
      console.log("error :", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
    return (
      <>
      {resources && resources.length > 0 ? (
        <div className='bg-[#F7F4F0]  py-[40px]  lg:py-[60px] overflow-hidden'>
            <div data-aos="fade-left" className="mx-auto container  px-4 text-center">
                <Heading
                    className="heading text-center poppins text-black tracking-tighter leading-tight font-bold text-3xl md:text-5xl lg:text-5xl mb-3"
                    heading1={"Insights &"}
                    heading2={" Resources for Families"}
                //content={"Stay informed with expert articles, practical tips, and inspiring stories to help families at every stage of life. Our blogs cover child development, parenting strategies, mental health, therapy guidance, and more."}
                />
                <p data-aos="fade-left" className="font-medium text-[15px] text-center mb-6 md:mb-2 text-gray-700  max-w-[600px] mx-auto">
                    Stay informed with expert articles, practical tips, and inspiring stories to help families at every stage of life. Our blogs cover child development, parenting strategies, mental health, therapy guidance, and more.
                </p>
               <div data-aos="fade-left" className=" grid grid-cols-1 mt-10 md:grid-cols-3  gap-5">
              {resources.map((item) => (
                // <a key={item.id} href={item.link} target='_blank' download >
                  <ResourceCard label={item.label} title={item.title} date={item?.date.split('T')[0]} tags={item.tags} />
                // </a>
              ))}
            </div>
            </div>
        </div>
      ) : null}
      </> 
    )
}

export default Resource;