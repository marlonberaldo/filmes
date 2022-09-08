import React from 'react'

const HeaderItem = ({Icon, title}) => {
  return (
    <div className='tw-flex tw-flex-col tw-items-center tw-cursor-pointer tw-group tw-w-12 sm:tw-w-20 hover:tw-text-white'>
        <Icon className='tw-h-8 tw-w-5 group-hover:tw-animate-bounce'/>
        <p className='tw-opacity-0 tw-tracking-widest group-hover:tw-opacity-100'>{title}</p>
    </div>
  )
}

export default HeaderItem