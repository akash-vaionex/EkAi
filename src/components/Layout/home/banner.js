const stats = [
  {
    id: 1,
    name: 'Penalties for non-compliance within financial Industry has increased by $10 billion, up 160% since 2018',
    value: '$10B',
  },
  {
    id: 2,
    name: 'New Regulations have secured a spot among the top three concerns on the worry-list of CxOs.',
    value: 'CxOs',
  },
  {
    id: 3,
    name: 'Major UK Banks were fined 178m in last 12 Months (June22-June23)',
    value: '$178M',
  },
]

export default function Banner() {
  return (
    <div className="bg-white shadow-lg shadow-white lg:py-24 py-8">
      <div
        className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32  border-2 border-[#2563EB] rounded-xl"
        style={{
          boxShadow: '15px 18px 0px 0px rgba(37,99,235,1)',
        }}
      >
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4 "
            >
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
