import React , { useEffect} from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import {FiSettings} from 'react-icons/fi'
import {TooltipComponent} from '@syncfusion/ej2-react-popups'
import './App.css'

import { Navbar,footer,Sidebar,Themesettings } from "./components";
import { Ecommerce,Orders,Calender,Employee,Stacked,Pyramid,Customer,Kanban,Area,Bar,Pie,Financial,ColorPicker,Line,ColorMapping,Editor  } from "./pages";
import { Cart ,Chat , Notification} from './components'
import { useStateContext } from './context/ContextProvider';

const App = () => {
  const {activemenu,activesettings,setActivesettings,currentcolor,currentmode,activecart,chat,notify} = useStateContext();


  return (
    <div className={currentmode==='Dark' ? 'dark':''}>
       <BrowserRouter>

       <div className='flex relative dark:bg-main-dark-bg'>
       <div className='fixed right-4 bottom-4' style={{zIndex: '1000'}}>
         <TooltipComponent content="Settings" position='Top'>
           <button type ="button" className='text-3xl p-3 hover:text-black hover:drop-shadow-xl hover:bg-light-gray ' style={{backgroundColor:currentcolor, borderRadius:'50%', color:'white'}} onClick={()=>setActivesettings(true)}
          
           >
             <FiSettings />
           </button>
         </TooltipComponent>
         </div>
       
        {activemenu?(
          <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg  bg-white'>
           <Sidebar/> 
          </div>
        ):(
          <div className='w-0 dark:bg-secondry-dark-bg'>
           <Sidebar/>
          </div>
        )}
        <div className={
       activemenu?
          'dark:bg-main-dark-bg  bg-main-bg min-h-screen w-full md:ml-72'
          :'dark:bg-main-dark-bg  bg-main-bg min-h-screen w-full flex-2'
       }>
         <div className='fixed md:static bg-main-bg dark:bg-secondary-dark-bg navbar w-full '>
         <Navbar/>
         </div>
         
        
        <div>
          {activesettings?(
          <div className='w-400'>
          <Themesettings/>
          </div>):(
                 <div className='w-0'>
                  <Themesettings/>
                </div>
          )
}
             <div>
               {activecart && <>
               <Cart/>
               </>}
               </div>
             
               <div>
               {chat && <>
               <Chat/>
               </>}
               </div>

               <div>
               {notify && <>
               <Notification/>
               </>}
               </div>
          

          <Routes>
            {/* DashBoard */}
            {/* <Route path="/" element=""/> */}
            <Route path="/ecommerce" element ={<Ecommerce/>}/>
            {/* Pages */}
            <Route path="/orders" element={<Orders/>}/>
            <Route path="/employees" element={<Employee/>}/>
            <Route path="/customers" element={<Customer/>}/>

            {/* Apps */}
            <Route path="/calendar" element={<Calender/>}/>
            <Route path="/kanban" element={<Kanban/>}/>
            <Route path="/editor" element={<Editor/>}/>
            <Route path="/color-picker" element={<ColorPicker/>}/>

            {/* Charts */}

            <Route path="/Line" element={<Line/>}/>
            <Route path="/area" element={<Area/>}/>
            <Route path="/bar" element={<Bar/>}/>
            <Route path="/pie" element={<Pie/>}/>
            <Route path="/financial" element={<Financial/>}/>
            <Route path="/color-mapping" element={<ColorMapping/>}/>
            <Route path="/pyramid" element={<Pyramid/>}/>
            <Route path="/stacked" element={<Stacked/>}/>
            
          </Routes>
        </div>
        </div>

       
       </div>
       </BrowserRouter>
    </div>
  
  )
}

export default App