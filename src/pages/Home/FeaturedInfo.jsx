
const stats = [
   { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
   { id: 2, name: 'Assets under holding', value: '$119 trillion' },
   { id: 3, name: 'New users annually', value: '46,000' },
 ]

const FeaturedInfo = () => {
  return (
    <>
      <div className="px-5 py-5 flex justify-center">
         <div className="bg-light-blue px-6  lg:px-8 md:px-6">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center , md:flex lg:grid lg:grid-cols-3">
               {stats.map((stat) => (
                  <div key={stat.id} className="flex max-w-xs flex-col gap-y-4 shadow-lg shadow-indigo-500/40 p-10 bg-white">
                  <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                     {stat.value}
                  </dd>
                  </div>
               ))}
            </dl>
         </div>
      </div>
    </>
  )
}
export default FeaturedInfo