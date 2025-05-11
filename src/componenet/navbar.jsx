import { logo,manubar,close } from "../assets/data"
import { Link } from "react-router-dom"
import { useState } from "react"
function Navbar() {
  
    const [bar,setBar]=useState(true);
    const barIcon=bar?manubar:close;

    return (
    <div className="h-20">
     <div className="flex justify-between m-10 h-8 z-50">
        <div className="flex font-bold text-2xl md:text-4xl text-center gap-2">
            <img src={logo} className="h-6" />
            <h1>coffeeroasters</h1>
        </div>
        <div >
            <div onClick={()=>{setBar(!bar)}} className="absolute right-10 md:hidden pt-4"><img src={barIcon}   /></div>
            <ul className="hidden md:flex justify-between gap-5 lg:gap-14 pt-4">
                <li className="opacity-50 hover:cursor-pointer hover:opacity-100"><Link to="/">HOME</Link></li>
                <li className="opacity-50 hover:cursor-pointer hover:opacity-100"><Link to='/about'>HOMEABOUT US</Link></li>
                <li className="opacity-50 hover:cursor-pointer hover:opacity-100"><Link to='/plan'>CREATE YOUR PLAN</Link></li>
            </ul>
        </div>
     </div>
     {!bar?
        <ul className=" p-20 text-center overflow-visible bg-gray-900 text-white ml-10 mr-10 rounded-3xl pacity-100 md:hidden
         ">
            <li className="opacity-50 p-5 hover:cursor-pointer hover:opacity-100" onClick={()=>{setBar(!bar)}}><Link to="/">HOME</Link></li>
            <li className="opacity-50 p-5 hover:cursor-pointer hover:opacity-100" onClick={()=>{setBar(!bar)}}><Link to='/about'>HOMEABOUT US</Link></li>
            <li className="opacity-50 p-5 hover:cursor-pointer hover:opacity-100" onClick={()=>{setBar(!bar)}}><Link to='/plan'>CREATE YOUR PLAN</Link></li>
        </ul>:""}
    </div>
    )
  }
  
  export default Navbar