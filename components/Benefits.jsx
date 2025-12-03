import React from 'react';
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

function Benefits({ title, description, isActive, onClick, index }) {
  if (!title || !description) return null;
  
  return (
    <div
      onClick={onClick}
      className={`relative cursor-pointer transition-all duration-500 ${
        isActive ? 'scale-100' : 'scale-95 opacity-70 hover:opacity-90 hover:scale-98'
      }`}
    >
      {/* Number Badge */}
      <div className={`absolute -top-3 -left-3 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white z-10 transition-all duration-500 ${
        isActive 
          ? 'bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg scale-110' 
          : 'bg-gray-400'
      }`}>
        {index + 1}
      </div>

      <div className={`rounded-2xl overflow-hidden transition-all duration-500 ${
        isActive 
          ? 'bg-gradient-to-br from-blue-500 to-blue-600 shadow-2xl ring-4 ring-blue-200' 
          : 'bg-white shadow-md hover:shadow-lg'
      }`}>
        <div className="p-8">
          <div className="flex items-start gap-4 mb-4">
            <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 ${
              isActive 
                ? 'bg-white/20 backdrop-blur-sm' 
                : 'bg-blue-50'
            }`}>
              <FaCheckCircle className={`text-2xl ${
                isActive ? 'text-white' : 'text-blue-500'
              }`} />
            </div>
            
            <div className="flex-1">
              <h3 className={`font-bold text-xl mb-2 transition-colors duration-500 ${
                isActive ? 'text-white' : 'text-gray-800'
              }`}>
                {title}
              </h3>
            </div>
          </div>

          {/* Description with slide animation */}
          <div className={`transition-all duration-500 ${
            isActive 
              ? 'max-h-96 opacity-100 translate-y-0' 
              : 'max-h-0 opacity-0 -translate-y-4 overflow-hidden'
          }`}>
            <p className="text-white/95 leading-relaxed text-base mb-4">
              {description}
            </p>
            <div className="flex items-center gap-2 text-white font-medium">
              <span>Learn more</span>
              <FaArrowRight className="animate-pulse" />
            </div>
          </div>

          {/* Click to view indicator for inactive cards */}
          {!isActive && (
            <div className="mt-4 flex items-center gap-2 text-blue-500 font-medium text-sm">
              <span>Click to view details</span>
              <FaArrowRight className="text-xs" />
            </div>
          )}
        </div>

        {/* Progress bar at bottom */}
        {isActive && (
          <div className="h-1 bg-white/20">
            <div className="h-full bg-white/60 w-full animate-pulse" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Benefits;