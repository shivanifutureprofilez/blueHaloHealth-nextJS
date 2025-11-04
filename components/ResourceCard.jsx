import React from 'react';
import { IoDownloadOutline } from 'react-icons/io5';

function ResourceCard({ label = 'Resource', link, title, date, tags = [] }) {
  return (
    <div
      className="bg-white rounded-[20px] p-4   h-full  "
    >
      <div className="flex items-start justify-between">
        <span className="text-[#009C4A] font-medium text-sm">{label}</span>
        {tags && tags.length > 0 && (
          <span className="text-xs text-gray-500 capitalize ">
            {tags.join(', ')}
            {/* {tags} */}
          </span>
        )}
      </div>

      <h2 title={title} className="text-[18px] line-clamp-2 text-start  md:text-[20px] font-bold">{title}</h2>
      {date && (
        <p className="text-start text-[#373737]">{date}</p>
      )}
      <div className='flex pt-3 '>
      <a
        href={link}
        download
        className="flex items-center gap-2 me-3 rounded-full bg-green-100 text-black px-4 py-2 font-medium capitalize shadow-sm  hover:bg-green-200 hover:shadow-md "
      >
        <IoDownloadOutline className="text-lg" />
        <span>Download</span>
      </a>
      </div>
    </div>
  )
}

export default ResourceCard;
