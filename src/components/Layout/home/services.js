import Chip from '@/components/Common/Chip'
import React from 'react'
import {
  MessagesSquare,
  Heart,
  PenSquare,
  Trash2,
  CheckCircle,
  CheckCircle2,
} from 'lucide-react'

const features = [
  {
    name: 'Precision-Calibrated Insights',
    description:
      "EKAI's LLMs are meticulously calibrated for industry-specific policies, regulations, and terminology, enhancing data comprehension and value extraction.",
    icon: '/ruler.svg',
  },
  {
    name: 'Custom Deployment Flexibility',
    description:
      'Offering versatile deployment options, EKAI ensures data privacy, allowing on-premise installations or cloud-based solutions tailored to your security needs.',
    icon: '/paint.svg',
  },
]

export function Services() {
  return (
    <div>
      <div className="mx-auto py-24 sm:pt-24">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <Chip text="The Solution" />
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Over 75% cost reduction in
            <br />
            implementing AI Stack with EKAI
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 font-normal">
            Our advanced AI platform empowers businesses to engage with and
            extract meaningful insights from their <br /> data, ensuring
            comprehensive understanding while prioritizing security and privacy.
          </p>
        </div>
        <div className="bg-[url('/icons/background.svg')]">
          <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 sm:pb-32 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-12 lg:px-8 lg:pt-32 lg:gap-y-36 gap-y-12">
            <div
              className="bg-white shadow-2xl shadow-white"
              style={{
                boxShadow: '0px 0px 102px 0px rgba(255,255,255,1)',
              }}
            >
              <Chip text={'Ready to launch'} />
              <p className="mt-4 text-4xl font-bold tracking-tight text-gray-900">
                Industry Fine-Tuned
              </p>
              <p className="mt-4 text-gray-500">
                Our LLM seamlessly integrates business-aligned insights,
                <br />
                transforming complex data into actionable intelligence for{' '}
                <br />
                optimal compliance and decision-making.
              </p>

              <dl className="col-span-2 grid grid-cols-1 gap-x-16 gap-y-16 sm:grid-cols-1 mt-4">
                {features.map((feature) => (
                  <div key={feature.name} className="flex justify-between">
                    <img
                      className="h-10 w-10 text-white mr-4"
                      src={feature.icon}
                      aria-hidden="true"
                      color="white"
                    />
                    <div>
                      <dt className="text-base font-semibold leading-7 text-gray-900">
                        {feature.name}
                      </dt>
                      <dd className="mt-1 text-base leading-7 text-gray-600">
                        {feature.description}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
            <div className="bg-[#2563EB]/10 w-full h-[516px] p-12 rounded-2xl">
              <div
                className="bg-white w-full h-full justify-center 
              rounded-2xl border-2 border-[#2563EB] p-12"
                style={{
                  boxShadow: '-15px 18px 0px 0px rgba(37,99,235,1)',
                }}
              >
                <img src="/icons/services_1.svg" className="mx-auto" />
                <div className="w-full bg-[#2563EB]/10 mx-auto flex px-3 py-2 rounded-full mt-8">
                  <CheckCircle2 className="text-[#2563EB] mr-3" /> LLM in a Box
                </div>
              </div>
            </div>

            <div className="bg-[#2563EB]/10 w-full h-[516px] p-12 rounded-2xl">
              <div
                className="bg-white w-full h-full justify-center 
              rounded-2xl border-2 border-[#2563EB] p-12"
                style={{
                  boxShadow: '-15px 18px 0px 0px rgba(37,99,235,1)',
                }}
              >
                <img src="/icons/services_2.svg" className="mx-auto" />
                <div className="w-full bg-[#2563EB]/10 mx-auto flex px-3 py-2 rounded-full mt-8">
                  <CheckCircle2 className="text-[#2563EB] mr-3" /> Secure and
                  Expandable AI
                </div>
              </div>
            </div>

            <div
              className="bg-white shadow-2xl shadow-white"
              style={{
                boxShadow: '0px 0px 102px 0px rgba(255,255,255,1)',
              }}
            >
              {' '}
              <Chip text={'Governanace and Explainability'} />
              <p className="mt-4 text-4xl font-bold tracking-tight text-gray-900">
                Industry Fine-Tuned
              </p>
              <p className="mt-4 text-gray-500">
                Our LLM seamlessly integrates business-aligned insights,
                <br />
                transforming complex data into actionable intelligence for{' '}
                <br />
                optimal compliance and decision-making.
              </p>
              <dl className="col-span-2 grid grid-cols-1 gap-x-16 gap-y-16 sm:grid-cols-1 mt-4">
                {features.map((feature) => (
                  <div key={feature.name} className="flex justify-between">
                    <img
                      className="h-10 w-10 text-white mr-4"
                      src={feature.icon}
                      aria-hidden="true"
                      color="white"
                    />
                    <div>
                      <dt className="text-base font-semibold leading-7 text-gray-900">
                        {feature.name}
                      </dt>
                      <dd className="mt-1 text-base leading-7 text-gray-600">
                        {feature.description}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
            <div
              className="bg-white shadow-2xl shadow-white"
              style={{
                boxShadow: '0px 0px 102px 0px rgba(255,255,255,1)',
              }}
            >
              {' '}
              <Chip text={'From KYC to UYC'} />
              <p className="mt-4 text-4xl font-bold tracking-tight text-gray-900">
                Industry Fine-Tuned
              </p>
              <p className="mt-4 text-gray-500">
                Our LLM seamlessly integrates business-aligned insights,
                <br />
                transforming complex data into actionable intelligence for{' '}
                <br />
                optimal compliance and decision-making.
              </p>
              <dl className="col-span-2 grid grid-cols-1 gap-x-16 gap-y-16 sm:grid-cols-1 mt-4">
                {features.map((feature) => (
                  <div key={feature.name} className="flex justify-between">
                    <img
                      className="h-10 w-10 text-white mr-4"
                      src={feature.icon}
                      aria-hidden="true"
                      color="white"
                    />
                    <div>
                      <dt className="text-base font-semibold leading-7 text-gray-900">
                        {feature.name}
                      </dt>
                      <dd className="mt-1 text-base leading-7 text-gray-600">
                        {feature.description}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
            <div className="bg-[#2563EB]/10 w-full h-[516px] p-12 rounded-2xl">
              <div
                className="bg-white w-full h-full justify-center 
              rounded-2xl border-2 border-[#2563EB] p-12"
                style={{
                  boxShadow: '-15px 18px 0px 0px rgba(37,99,235,1)',
                }}
              >
                <img src="/icons/services_3.svg" className="mx-auto" />
                <div className="w-full bg-[#2563EB]/10 mx-auto flex px-3 py-2 rounded-full mt-8">
                  <CheckCircle2 className="text-[#2563EB] mr-3" /> Improved
                  Customer Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
