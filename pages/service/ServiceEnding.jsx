import Popup1 from "@/components/Popup1";

export default function ServiceEnding() {
  return (
    <section className=" pt-4 ">
   
          
          <h3 className="text-[24px]  font-semibold text-gray-900 mb-4">
            One Pathway — Many Supports
          </h3>

          <p className="text-gray-700 leading-relaxed mb-4">
            Services are offered and billed individually, but your loved one's overall plan feels unified because you have access to multiple experts who can align care when appropriate and with consent.
          </p>
          
          <p className="font-semibold text-gray-900 mb-6">
            You get clarity — without extra work on your part.
          </p>

          <div className='flex pt-4'>
            <Popup1 
              classes={`button bg-[#009C4A] flex justify-center cursor-pointer w-full md:w-[230px]`} 
              content={`Thank you so much but we are not available right now`} 
            />
        
      </div>
    </section>
  );
}