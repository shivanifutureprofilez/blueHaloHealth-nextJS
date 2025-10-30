import React from 'react'
import Heading from './Heading';
import Image from 'next/image';
import ResourceCard from './ResourceCard';

function Resource() {
    const resource = [
        {
            id: 'start-here',
            title: 'Utah Support Guide',
            label: 'Resource',
            date: 'October 3, 2025',
            tags: ['parent', 'care'],
            link: 'https://www.egyankosh.ac.in/bitstream/123456789/92699/1/Unit-18.pdf'
        },
        {
            id: 'tennessee-autism-aba-directory',
            title: 'Tennessee Autism & ABA Directory Tennessee Autism & ABA DirectoryTennessee Autism & ABA Directory',
            label: 'Resource',
            date: 'October 3, 2025',
            tags: ['parent', 'physician'],
            link: 'https://www.egyankosh.ac.in/bitstream/123456789/92699/1/Unit-18.pdf',
        },
        {
            id: 'utah-support-guide',
            title: 'Utah Support Guide',
            label: 'Resource',
            date: 'October 3, 2025',
            tags: ['parent', 'care'],
            link: 'https://www.egyankosh.ac.in/bitstream/123456789/92699/1/Unit-18.pdf'
        },

    ]
    return (
        <div className='bg-[#F7F4F0]  py-[40px]  lg:py-[60px]'>
            <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1230px]  px-4 text-center">
                <Heading
                    className="heading text-center poppins text-black tracking-tighter leading-tight font-bold text-4xl md:text-5xl lg:text-5xl mb-3"
                    heading1={"Insights &"}
                    heading2={" Resources for Families"}
                //content={"Stay informed with expert articles, practical tips, and inspiring stories to help families at every stage of life. Our blogs cover child development, parenting strategies, mental health, therapy guidance, and more."}
                />
                <p className="font-medium text-[15px] text-center mb-6 md:mb-2 text-gray-700  max-w-[600px] mx-auto">
                    Stay informed with expert articles, practical tips, and inspiring stories to help families at every stage of life. Our blogs cover child development, parenting strategies, mental health, therapy guidance, and more.
                </p>
               <div className=" grid grid-cols-1 mt-10 md:grid-cols-3  gap-5">
              {resource.map((item) => (
                <a key={item.id} href={item.link} target='_blank' download >
                  <ResourceCard label={item.label} title={item.title} date={item.date} tags={item.tags} />
                </a>
              ))}
            </div>
            </div>
        </div>
    )
}

export default Resource;