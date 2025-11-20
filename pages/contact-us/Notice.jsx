import React from 'react'

function Notice() {
  return (
    <div>
        <div className="bg-white p-5 md:p-8 rounded-xl shadow mb-8 text-left">
        <h2 className="text-xl font-semibold mb-3">
          Important Privacy & Communication Notice
        </h2>

        <p className="mb-3">
          Blue Halo Health welcomes your inquiries and values your privacy.
        </p>

        <p className="mb-3">
          Please note that email and website forms are for general communication 
          and are not PHIPA-secure. Do not include personal health information or details about 
          your care in these messages.
        </p>

        <p className="mb-3">
          For your safety and confidentiality, all clinical communication, appointment details,
          and therapeutic updates must be shared through our secure JaneApp platform. 
        </p>

        <p className="mb-3">
          Our care providers do not respond to clinical questions by email or phone outside JaneApp.
          Intake staff may collect basic health information by phone only when booking appointments 
          or confirming service needs.
        </p>

        <p className="mb-3">
          By contacting us, you acknowledge and consent to Blue Halo Health collecting and using 
          your contact information solely for administrative and scheduling purposes, 
          in accordance with our Privacy Policy.
        </p>

        <p className="font-semibold">
          Please note this form is not for medical emergencies or urgent clinical concerns.
          If you are in crisis, please contact 911 or your nearest emergency department.
        </p>
      </div>
    </div>
  )
}

export default Notice;