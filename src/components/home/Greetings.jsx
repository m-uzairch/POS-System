import React from 'react'
import { useState, useEffect } from 'react';

const Greetings = () => {

    const[dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setDateTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const foramtDate = (date) => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return `${months[date.getMonth()]} ${String(date.getDate()).padStart(2, '0')}, ${date.getFullYear()}`;
    };

    const formatTime = (date) => `${String(date.getHours()).pasStart(2, "0")}:${String(date.getMinutes()).pasStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`;

  return (
    <div className='flex justify-between items-center px-8 mt-5'>
      <div>
        <h1 className='text-[#f5f5f5] text-2xl font-semibold tracking-wide'>Good Morning, Uzair</h1>
        <p className='text-[#ababab] text-sm'>Giv your best servoces for customers 😃</p>
      </div>
      <div>
        <h1>{formatTime(dateTime)}</h1>
        <p>{foramtDate(dateTime)}</p>
      </div>
    </div>
  )
}

export default Greetings
