import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { HiArrowSmDown } from "react-icons/hi";

import withBase from '../../hocs/withBase';



const Topheader = ({location}) => {
  return (
    <div className={twMerge(clsx('h-[85px] text-white border-b border-black w-full bg-transparent  z-50 flex items-center justify-between px-[100px]',
    !location.pathname !== '/' && 'bg-red-500'
    )
    )
    
    }>
        <span className='flex items-center gap-2'>
                <MdEmail />
            <span>
                <span>Email us at: </span>
                <span className='text-white'> example@gmail.com</span>
            </span>
        </span>
        <div className='flex items-center gap-6'>
        <div className='flex items-center text-white gap-6'>
           <span>Về chúng tui</span>
           <span>Liên hệ </span>
           <span className='flex items-center gap-2'>
           <span>Vietnam(English)</span>
           <HiArrowSmDown size={20} />
           </span>
        </div>
        <div className='flex items-center pl-8 border-l border-main-400'>
            <span className='flex items-center gap-2'>
            <FaPhone />
            <span className='text-white'>123-456-7890</span>
            </span>
        </div>
    </div>
    </div>
  )
}

export default withBase(Topheader)