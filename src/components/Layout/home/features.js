import { MessagesSquare, Heart, PenSquare, Trash2 } from 'lucide-react'

const features = [
  {
    name: 'Security & Compliance:',
    description:
      'Enterprises rely on public APIs to access generative AI models and xGPT solutions, leaving them vulnerable to data leaks and privacy concerns, jeopardizing enterprise IP and knowledge ownership of highly sensitive enterprise data shared with third parties.',
    icon: '/icons/feature_icon_1.svg',
  },
  {
    name: 'Performance & Cost:',
    description:
      "Enterprises encounter issues with GPT's set performance metrics and related costs. While 8% see this as a minor concern, a notable 32.8% consider it a major challenge, highlighting the need for better performance-to-cost optimization.",
    icon: '/icons/feature_icon_2.svg',
  },
  {
    name: 'Governance:',
    description:
      'Organizations prioritize managing access to sensitive data. This ensures only authorized personnel handle critical information, highlighting the need for strict data governance and access controls within businesses.',
    icon: '/icons/feature_icon_3.svg',
  },
  {
    name: 'Data:',
    description:
      'The ability to preserve company knowledge, generate AI models, and maintain a competitive edge with corporate IP protection.',
    icon: '/icons/feature_icon_4.svg',
  },
  {
    name: 'Customizations & Flexibility',
    description:
      'Organizations value the ability to adapt AI models using their unique datasets. This ensures tailored and relevant AI solutions, allowing businesses to keep their models updated and aligned with changing objectives.',
    icon: '/icons/feature_icon_5.svg',
  },
  {
    name: 'Build or Buy',
    description:
      'Organisations are contemplating if they should build AI stack internally or buy it. One research found out that building AI internally costs 3x more than buying it in the first year alone.',
    icon: '/icons/feature_icon_6.svg',
  },
]

export function Features() {
  return (
    <div className="bg-[#2563EB]/10 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <span className="relative rounded-full py-1 px-3 text-sm leading-6 ring-1 ring-[#155EEF]/10 hover:ring-[#155EEF]/20 bg-white text-blue-700">
          Problems
        </span>
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-16 leading-8 mt-3">
          Key Problems in Embracing Generative AI,{' '}
          <br className="hidden sm:block" />
          LLMs, and xGPT
        </h2>
        <dl className="col-span-2 grid grid-cols-1 gap-x-16 gap-y-16 sm:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg ">
                  <img
                    className="h-10 w-10 text-white"
                    src={feature.icon}
                    aria-hidden="true"
                    color="white"
                  />
                </div>
                {feature.name}
              </dt>
              <dd className="mt-1 text-base leading-7 text-gray-600">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      {/* </div> */}
    </div>
  )
}
