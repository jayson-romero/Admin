import {IoIosNotificationsOutline, IoIosSettings} from 'react-icons/io'
import {TbWorld} from 'react-icons/tb'


const TopBar = () => {
  return (
    <>
      <div className="topBar fixed top-0 w-full bg-blue p-3 md:p-5 xl:p-3 z-50 ">
         <div className="topBarWrapper flex justify-center md:justify-between xl:max-w-[1600px] xl:m-auto">
            {/* LOGO */}
            <div className="topLeft text-white font-bold text-[25px] md:text-[30px]">
               <h1>MyLogo</h1>
            </div>

            {/* ICONS && IMAGE  */}
            <div className="topRight hidden md:flex gap-2 text-[25px] xl:gap-4 justify-center">
               <div className='relative pt-2'>
                  <IoIosNotificationsOutline/>
                  <p className="absolute top-1 right-0 bg-red rounded-full w-[13px] h-[13px] text-center p-[1px] text-[9px]">1
                  </p>                
               </div>

               <div className='relative pt-2'>
                  <TbWorld/>
                  <p className="absolute top-1 right-0 bg-red rounded-full w-[13px] h-[13px] text-center p-[1px] text-[9px]">1
                  </p>                
               </div>

               <div className='pt-2'>
                   <IoIosSettings />            
               </div>

               <img className='rounded-full w-[35px] h-[35px]'
               src="https://t3.ftcdn.net/jpg/03/53/11/00/360_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg"
                alt="" />

            </div>
         </div>
      </div>
    </>
  )
}
export default TopBar