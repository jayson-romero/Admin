const PageHeading = ({tittle}) => {
  return (
    <>
      <div className="lg:flex lg:items-center lg:justify-between border-8 border-white w-[100%]">
         <div className="min-w-0 flex-1 pl-10 py-5">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
               {tittle}
            </h2>
            <div  className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
               <div className="mt-2 flex items-center text-sm text-gray-500">
                  Full-time
               </div>
               <div className="mt-2 flex items-center text-sm text-gray-500">
                  Remote
               </div>
               <div className="mt-2 flex items-center text-sm text-gray-500">
                  $120k &ndash; $140k
               </div>
               <div className="mt-2 flex items-center text-sm text-gray-500">
                  Closing on January 9, 2020
               </div>
            </div>
         </div>
      </div>
    </>
  )
}
export default PageHeading