import Link from 'next/link';
import React from 'react';
import { IoDownloadOutline } from 'react-icons/io5';
import { MdFileDownload } from 'react-icons/md';
import FormattedDate from './FormattedDate';

function ResourceCard({ label = 'Resource', link, title, date, tags = [] }) {
  console.log("link ", link);
  return (
    <div className="bg-white rounded-[20px] p-4 h-full hover:shadow-md cursor-pointer">
      <div className="flex items-start justify-between">
        <span className="text-[#009C4A] font-medium text-sm">{label}</span>
        {tags && tags.length > 0 && (
          <span className="text-xs text-gray-500 capitalize ">
            {tags.join(', ')}
            {/* {tags} */}
          </span>
        )}
      </div>

      <div className='md:min-h-[80px]'>
            <h2 title={title} className="text-[18px] line-clamp-2 text-start  md:text-[20px] font-bold ">{title}</h2>
            {date && (
              <p className="text-start text-[#373737]"><FormattedDate date={date}/></p>
            )}
      </div>

      <div className="flex pt-3">
        <button
          onClick={() => window.open(link, "_blank")}
          className="flex items-center gap-2 me-3 rounded-full bg-green-100 text-black px-4 py-2 font-medium capitalize shadow-sm hover:bg-green-200 hover:shadow-md cursor-pointer"
        >
          <MdFileDownload className="text-lg" />
          <span>Download</span>
        </button>
      </div>
    </div>
  )
}

export default ResourceCard;





