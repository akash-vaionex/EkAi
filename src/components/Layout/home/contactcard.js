import React from 'react'

export function ContactCard() {
  return (
    <div className="py-24">
      <div
        className="mx-auto max-w-7xl
        bg-[#151E2D]
        py-8
        flex sm:flex-row flex-col
        items-center
        justify-between
        rounded-xl
   px-6 lg:px-8"
      >
        <div>
          <h3
            className="text-white
          text-2xl"
          >
            Need a clarity?
          </h3>
          <p
            className="text-white font-light mt-4
          text-sm"
          >
            Unable to locate the desired information? Reach out to our team, or
            engage with our <br />
            chatbot for assistance.
          </p>
        </div>
        <button
          className="bg-white 
        rounded full text-[#2563EB] px-4 py-3"
        >
          Book a Demo
        </button>
      </div>
    </div>
  )
}
