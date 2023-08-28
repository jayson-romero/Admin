import SideBar from "../components/sidebar/SideBar"
import TopBar from "../components/topbar/TopBar"
import { Outlet } from "react-router-dom"


const Home = () => {
  return (
    <>
      <TopBar/>
      <div className="w-full absolute">
         <div 
          className=" fixed h-full top-[60px] w-[60px] lg:w-[300px]
          transition-all duration-500 hover:w-[300px] z-50">
            <SideBar/>
         </div>

         <div className="bg-light-blue h-full ml-[60px] lg:ml-[300px]  mt-[65px] md:mt-[85px] lg:mt-[70px]">
           <Outlet/>
          </div>

      </div>
    </>
  )
}
export default Home  

