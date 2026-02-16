import Image from 'next/image';
import Popup1 from "@/components/Popup1";
import Heading from '@/components/Heading';

export default function HowItWorks() {
  const steps = [
    {
      image: '/step1.png',
      title: 'Request an Intake Appointment',
      description: 'Tell us about your concerns using our secure form or contact request. This is an inquiry only — you are not yet a Blue Halo Health patient and no clinical advice is provided at this stage.'
    },
    {
      image: '/step33.png',
      title: 'Complete Registration & Forms',
      description: 'We review your information, verify caregiver identity, and collect required consents and agreements. A clinical relationship has not started yet.'
    },
    {
      image: '/step2.png',
      title: 'Confirm Intake Assessment',
      description: 'Your intake appointment is confirmed after forms are completed and payment is received. This first meeting is an assessment session, not therapy or treatment.'
    },
    {
      image: '/step4.png',
      title: 'Assessment & Care Plan',
      description: 'A clinician evaluates your needs and determines whether our services are appropriate. Ongoing services begin only after the intake process is completed and you are formally accepted into care.'
    }
  ];

  return (
    <div className=" px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="rounded-2xl overflow-hidden">
          <div>
            <Heading
              className="text-black text-center text-2xl md:text-3xl mb-10"
              heading1={"How It"}
              heading2={" Works"}
            />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300 text-center flex flex-col h-full"
                >
                  <div className="relative mb-6">
                    <div className="absolute top-3 left-3 w-10 h-10 bg-[#009C4A] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                      {index + 1}
                    </div>
                    <div className="bg-gradient-to-br from-green-50 rounded-2xl to-emerald-50  p-6 flex items-center justify-center min-h-[200px]">
                      <Image
                        src={step.image}
                        alt={step.title}
                        className="object-contain w-full max-w-[160px] h-auto"
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                  <p className='font-semibold text-gray-800 leading-snug'>
                    {step.title}
                  </p>
                  <p className='font-normal text-[15px] text-gray-600 leading-snug'>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-12 max-w-3xl mx-auto text-center">
              <p className="text-xs text-gray-500 leading-relaxed">
                Contacting Blue Halo Health or booking an intake appointment does not create
                a therapeutic relationship. Services begin only after completion of the intake
                and acceptance process.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}