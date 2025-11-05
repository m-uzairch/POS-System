import React from 'react'
import { FaHome } from "react-icons/fa";
import { MdOutlineReorder } from "react-icons/md";
import { MdTableBar } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";

const BottomNav = () => {
  return (
    <div className='fixed bottom-0 left-0 right-0 bg-[#262626] p-2 flex justify-around'>
      <button><FaHome className="inline mr-4 size={15}" />Home</button>
      <button><MdOutlineReorder className="inline mr-4 size={15}" />Orders</button>
      <button><MdTableBar className="inline mr-4 size={15}" />Tables</button>
      <button><CiCircleMore className="inline mr-4 size={15}" />More</button>
    </div>
  )
}

export default BottomNav
