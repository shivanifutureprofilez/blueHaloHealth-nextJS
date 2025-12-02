import { useState } from 'react';
import Benefits from "@/components/Benefits";

export default function BenefitsLists({ service }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-[1100px] mx-auto">
      <div className="  rounded-lg  ">
        {service?.benefits?.map((item, index) => (
          <Benefits
            key={item.id || index}
            title={item?.title}
            description={item?.description}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
}