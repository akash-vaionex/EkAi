import React from 'react'
import Chip from '@/components/Common/Chip'
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'

// const scrollTo = (amount) => {
//   const container = sliderRef.current
//   container.scrollLeft += amount
// }

function Testimonial() {
  return (
    <div className="bg-[#151E2D] mt-4">
      <div className="max-w-7xl mx-auto py-16 sm:pt-8 md:pb-24">
        <div className=" sm:mb-8 sm:flex sm:justify-center text-white">
          AI-Driven Imperatives
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-4xl">
            What Industry Leaders are Saying!
          </h1>
          <p className="mt-6 text-lg leading-8 text-white font-normal">
            Unstructured data, artificial intelligence, and machine learning are
            fast becoming business requirements.
          </p>
        </div>
        <div className="py-8 sm:py-24">yo</div>

        <div className="mx-auto flex justify-center">
          <div className="w-[115px] h-1.5 rounded-full bg-[#2563EB] cursor-pointer mr-2"></div>
          <div className="w-[115px] h-1.5 rounded-full bg-gray-500 mr-2 cursor-pointer"></div>
          <div className="w-[115px] h-1.5 rounded-full bg-gray-500 cursor-pointer"></div>
        </div>
      </div>
    </div>
  )
}
export default Testimonial
