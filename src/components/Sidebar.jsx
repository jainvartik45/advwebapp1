import React from 'react'
import { Link,NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel} from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import {links} from '../data/dummy';

import { useStateContext } from '../context/ContextProvider';

const Sidebar = () => {
 
  const {activemenu,setActiveMenu,handlesidebar,currentcolor} = useStateContext();

  

  const activeLink='flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-light-gray text-md m-2';
  const normalLink='flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activemenu && <>
      <div className='flex justify-between items-center '>
        <Link to='/' onClick={() =>setActiveMenu(false)} className='items-center flex gap-3 ml-3 mt-5 text-xl font-extrabold tracking-tight dark:text-white'>
          <SiShopware/> <span>DashData</span>
        </Link>
        {/* <TooltipComponent content='close' position='BottomCenter' className='mt-5'>
           <button type='button' onClick={()=>
            setActiveMenu((prevActivemenu) => !prevActivemenu)}
           className='text-xl rounded-full p-3 hover:bg-light-gray block '>
             <MdOutlineCancel/>
           </button>
        </TooltipComponent> */}
      </div>
      <div className='mt-10'>
        {links.map((item)=>(
          <div key={item.title}>
            <p className='text-gray-400 m-3 mt-4 uppercase'>
            {item.title}
            </p>
            {item.links.map((Link)=>(
              <NavLink
               to={`/${Link.name}`}
               key={Link.name}


               style={({isActive})=>({
               backgroundColor: isActive? currentcolor:''
               
               })}


               onClick={handlesidebar}
               className={({isActive})=>
               isActive ? activeLink : normalLink}
               >
               {Link.icon}
               <span className='capitalize'>
                 {Link.name}
               </span>

              </NavLink>
            ))}
          </div>
        ))}
      </div>

      </>}
     
      </div>
  )
}

export default Sidebar
