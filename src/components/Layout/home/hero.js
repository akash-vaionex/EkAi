import Banner from './banner'

export function Hero() {
  return (
    <main>
      <div className="relative px-6 lg:px-8 bg-[url('/icons/background.svg')]">
        <div className="mx-auto  py-32 sm:py-32">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-4 ring-[#155EEF]/10 hover:ring-[#155EEF]/20 bg-white text-[#155EEF]">
              Introducing EKAI
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Your AI Shield Against
              <span className="text-[#2563EB]"> Regulatory Fines</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 font-normal">
              Harness the power of AI to navigate complex regulations, ensure
              robust compliance, and shield <br /> your business from costly
              regulatory penalties. With EKAI, turn compliance challenges into
              competitive <br /> strength.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-[#2563EB] px-6 py-4 text-sm font-semibold text-white shadow-sm hover:bg-[#2563EB]/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </div>
        <Banner />
        {/* <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <svg
            className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
          >
            <path
              fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9089FC" />
                <stop offset={1} stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div> */}
      </div>
    </main>
  )
}
