import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from './Icons'

function Navbar(props) {
    const {activeTab}=props
  return (
    <>
        <div className="z-10 flex flex-row items-center justify-between w-full p-3 bg-[#531616] fixed top-0 left-0 ">
        
            <div className={`flex flex-row p-1 ${activeTab==="movies"?"text-white font-semibold":"text-gray-400"} hover:text-gray-100`}><Link to="/movies">Movies</Link> </div>
        </div>
    
    </>
  )
}

export default Navbar