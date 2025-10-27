import React from 'react';

function ResourceCard({ label = 'Resource', title, date, tags = [] }) {
  return (
    <div 
      className="bg-white rounded-[20px] p-4 cursor-pointer max-h-[150px] "
    >
      <div className="flex items-center justify-between">
        <span className="text-[#009C4A] font-medium text-sm">{label}</span>
        {tags && tags.length > 0 && (
          <span className="text-xs text-gray-500 capitalize ">{tags.join(', ')}</span>
        )}
      </div>

      <h2 className="text-[18px] md:text-[22px] font-bold">{title}</h2>
      {date && (
        <p className="text-[#373737]">{date}</p>
      )}
    </div>
  )
}

export default ResourceCard;
