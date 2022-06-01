import React, { createContext,useContext,useState } from 'react';


const Statecontext =createContext();

const initialState={
    chat: false,
    cart:false,
    userProfile:false,
    notification:false,
}


export const ContextProvider=({children})=>{
   const[activemenu, setActiveMenu] = useState(true)
    const [isClicked , setIsClicked] = useState(initialState)
    const [screensize, setScreensize] = useState(undefined)
    const [up, setUp] = useState(true)
    const [activesettings,setActivesettings]= useState(false)
    const [currentcolor,setCurrentcolor] = useState('blue')
    const [currentmode,setCurrentmode] = useState('Light')
    const [activecart , setActivecart] = useState(false)
    const [chat,setChat] = useState(false)
    const [value,setValue] =useState(0)
    const [notify,setNotify]=useState(true)


    const setmode=(e)=>{
     setCurrentmode(e.target.value);

     localStorage.setItem('themeMode',e.target.value)
     setActivesettings(false)
    }

    const setcolor=(mode)=>{
      setCurrentcolor(mode);
 
      localStorage.setItem('colorMode',mode)
      setActivesettings(false)
     }


    const handleClick =(clicked)=>{
     setIsClicked({...initialState , [clicked]:
        true
     });
    }

    const handlesidebar=()=>{
        if(activemenu && screensize<=900){
          setActiveMenu(false)
        }
      }

      
    return (
        <Statecontext.Provider
        value={{activemenu,
        setActiveMenu,
        isClicked , setIsClicked,
        handleClick,
        screensize, setScreensize,
        handlesidebar,up,setUp,activesettings,setActivesettings,currentcolor,setCurrentcolor,setcolor,setmode,currentmode
    ,activecart , setActivecart,chat,setChat,value,setValue,notify,setNotify
    } }
        >
        

          {children}
        </Statecontext.Provider>
    )
}
export const useStateContext =() => useContext  (Statecontext);