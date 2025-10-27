import React from 'react';

function ResourceCard({ label = 'Resource', title, date, tags = [] }) {
  return (
    <div 
      className="bg-white rounded-lg p-6 cursor-pointer max-h-[150px] shadow-lg"
    >
      <div className="flex items-center justify-between">
        <span className="text-emerald-600 font-medium text-sm">{label}</span>
        {tags && tags.length > 0 && (
          <span className="text-xs text-gray-500">{tags.join(', ')}</span>
        )}
      </div>

      <h2 className="text-2xl md:text-2xl font-bold mt-2 mb-3">{title}</h2>
      {date && (
        <p className="text-gray-600">{date}</p>
      )}
    </div>
  )
}

export default ResourceCard;
