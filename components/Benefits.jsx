import React from 'react';
import { FaChild, FaChevronDown } from "react-icons/fa";

function Benefits({ title, description, isOpen, onClick }) {
  if (!title || !description) return null;
  
  return (
    <div className="border-b border-gray-200 mb-5">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-2 py-4 cursor-pointer transition-colors" >
        <div className="flex items-center gap-3">
          <h3 className="text-left text-lg font-bold text-black">{title}</h3>
        </div>
        <FaChevronDown 
          className={`flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      
      <div
        className={`text-start text-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`} >
        <p className=" pb-4 text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default Benefits;