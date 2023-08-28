import {AiOutlineHome, AiOutlineMail, AiOutlineMessage} from 'react-icons/ai'
import {TbBrandGoogleAnalytics, TbReportSearch} from 'react-icons/tb'
import {DiGoogleAnalytics} from 'react-icons/di'
import {FiUsers} from 'react-icons/fi'
import {BiStore, BiBriefcase} from 'react-icons/bi'
import {GrTransaction} from 'react-icons/gr'
import {MdOutlineFeedback} from 'react-icons/md'
import { NavLink} from 'react-router-dom'

const navigation =
 {
  dashboard: [
    { name: 'Home', href: '/', icon: <AiOutlineHome className='w-[30px] h-[30px]'/> },
    { name: 'Analytics', href: '/other', icon: <TbBrandGoogleAnalytics className='w-[30px] h-[30px]'/>},
    { name: 'Sales', href: '/test', icon: <DiGoogleAnalytics className='w-[30px] h-[30px]'/>}
  ],
  menu: [
    { name: 'users', href: '/userlist', icon: <FiUsers className='w-[30px] h-[30px]'/> },
    { name: 'Products', href: '/test', icon: <BiStore className='w-[30px] h-[30px]'/> },
    { name: 'Transactions', href: '/test', icon: <GrTransaction className='w-[30px] h-[30px]'/> },
    { name: 'Reports', href: '/test', icon: <TbReportSearch className='w-[30px] h-[30px]'/> }
  ],
  notifications: [
    { name: 'Mail', href: '/test', icon: <AiOutlineMail className='w-[30px] h-[30px]'/> },
    { name: 'Feedback', href: '/test', icon: <MdOutlineFeedback className='w-[30px] h-[30px]'/> },
    { name: 'Messages', href: '/test', icon: <AiOutlineMessage className='w-[30px] h-[30px]'/> }
  ],
  staff: [
    { name: 'Mail', href: '/test', icon: <BiBriefcase className='w-[30px] h-[30px]'/> },
    { name: 'Analytics', href: '/test', icon: <DiGoogleAnalytics className='w-[30px] h-[30px]'/> },
    { name: 'Reports', href: '/test', icon: <TbReportSearch className='w-[30px] h-[30px]'/> }
  ],
}  
  

const SideBar = () => {
  return (
    <>
      <div className=" group sideBar bg-blue h-[100%] pt-5 z-10">
        <div className="sideBarWrapper p-2 overflow-hidden z-10">

              <div className="dashboard ">
                <h1 className="header text-[10px] lg:text-[12px]  group-hover:block group-hover:text-[12px]  ">Dashboard</h1>

                  {navigation.dashboard.map((nav)=> (
                    <NavLink  
                        key={nav.name}
                        className={({ isActive }) => isActive 
                        ? "bg-accent rounded-full flex items-left px-2 my-2" 
                        : "hover:bg-dark-blue rounded-full flex items-left px-2 my-2"}
                        to={nav.href}
                        onClick={prev => !prev}
                    > 
                      <div className='flex items-center'>
                        {nav.icon}
                        <p className='ml-4'>{nav.name}</p>
                      </div>
                    </NavLink>
                 
                  ))}
                 
              </div>

              <div className="menu">
              <h1 className="header text-[12px] group-hover:block lg:block mt-3">Menu</h1>
                {navigation.menu.map((nav)=> (
                      <NavLink  
                          key={nav.name}
                          className={({ isActive }) => isActive 
                          ? "bg-accent rounded-full flex items-left px-2 my-2" 
                          : "hover:bg-dark-blue rounded-full flex items-left px-2 my-2"}
                          to={nav.href}
                          onClick={prev => !prev}
                      > 
                        <div className='flex items-center'>
                          {nav.icon}
                          <p className='ml-4'>{nav.name}</p>
                        </div>
                      </NavLink>
                  
                    ))}
              </div>

              <div className="notifications">
                <h1 className="header text-[9px] group-hover:block lg:text-[12px] mt-3 group-hover:text-[12px] ">Notifications</h1>
                {navigation.notifications.map((nav)=> (
                      <NavLink  
                          key={nav.name}
                          className={({ isActive }) => isActive 
                          ? "bg-accent rounded-full flex items-left px-2 my-2" 
                          : "hover:bg-dark-blue rounded-full flex items-left px-2 my-2"}
                          to={nav.href}
                          onClick={prev => !prev}
                      > 
                        <div className='flex items-center'>
                          {nav.icon}
                          <p className='ml-4'>{nav.name}</p>
                        </div>
                      </NavLink>
                  ))}
                </div>
              <div className="staff">
              <h1 className="header text-[12px]  group-hover:block lg:block mt-3">Staff</h1>
                {navigation.staff.map((nav)=> (
                      <NavLink  
                          key={nav.name}
                          className={({ isActive }) => isActive 
                          ? "bg-accent rounded-full flex items-left px-2 my-2" 
                          : "hover:bg-dark-blue rounded-full flex items-left px-2 my-2"}
                          to={nav.href}
                          onClick={prev => !prev}
                      > 
                        <div className='flex items-center'>
                          {nav.icon}
                          <p className='ml-4'>{nav.name}</p>
                        </div>
                      </NavLink>
                  ))}
              </div>
        </div>
      </div>
    </>
  )
}
export default SideBar