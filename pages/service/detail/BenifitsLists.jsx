import { useState, useEffect } from 'react';
import Benefits from "@/components/Benefits";

export default function BenefitsLists({ service }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => 
        (prev + 1) % (service?.benefits?.length || 1)
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [service?.benefits?.length]);

  return (
    <div className="max-w-[1100px] mx-auto px-4 py-8">
      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mb-8">
        {service?.benefits?.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              activeIndex === index 
                ? 'w-12 h-3 bg-blue-500' 
                : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {service?.benefits?.map((item, index) => (
          <Benefits
            key={item.id || index}
            title={item?.title}
            description={item?.description}
            isActive={activeIndex === index}
            onClick={() => setActiveIndex(index)}
            index={index}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={() => setActiveIndex((prev) => 
            prev === 0 ? service?.benefits?.length - 1 : prev - 1
          )}
          className="px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-x-1 font-medium text-gray-700"
        >
          ← Previous
        </button>
        <button
          onClick={() => setActiveIndex((prev) => 
            (prev + 1) % service?.benefits?.length
          )}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:shadow-lg transition-all hover:translate-x-1 font-medium"
        >
          Next →
        </button>
      </div>
    </div>
  );
}