import React from 'react'
import BottomNav from '../components/shared/BottomNav'

function home() {
  return (
    <section className='bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3'>
      {/* Left Div */}
      <div className='flex-[3] bg-[#ff0000]'>

      </div>
      {/* Right Div */}
      <div className='flex-[2] bg-[#0015ff]'>

      </div>
      <BottomNav />
    </section>
  )
}

export default home
