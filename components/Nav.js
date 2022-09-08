import { useRouter } from 'next/router'
import React from 'react'
import requests from '../utils/requests'

function Nav() {
    const router = useRouter();
  return (
    <nav className='tw-relative'>
        <div className='tw-flex tw-px-10 sm:tw-px-20 tw-text-2xl tw-whitespace-nowrap tw-space-x-10 sm:tw-space-x-20 tw-overflow-x-scroll tw-scrollbar-hide '>
            {Object.entries(requests).map(([key,{title,url}])=>(
                <h2 
                key={key}
                onClick={()=> router.push(`/?genre=${key}`)}
                className="last:tw-pr-24 tw-cursor-pointer tw-transition tw-duration-100 tw-transform hover:tw-scale-125 hover:tw-text-white active:tw-text-red-500 ">{title}</h2>
            ))}
        </div>
        <div className='tw-absolute tw-top-0 tw-right-0 tw-bg-gradient-to-l tw-from-[#06202A] tw-h-10 tw-w-1/12'/>
    </nav>
  )
}

export default Nav