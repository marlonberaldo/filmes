import Image from 'next/image'
import React from 'react'
import {HiOutlineThumbUp} from 'react-icons/hi'
import { forwardRef } from 'react'

const Thumbnail = forwardRef( ({result}, ref) => {
const BASE_URL = "https://image.tmdb.org/t/p/original/";

console.log(result)
  return (
    <div ref={ref} className='tw-group tw-cursor-pointer tw-p-2 tw-transition tw-duration-100 tw-ease-in tw-transform sm:hover:tw-scale-105 hover:tw-z-50'>
        <Image 
            src={`${BASE_URL}${result.backdrop_path || result.poster_path}` ||
            `${BASE_URL}${result.poster_path}`
            }
            layout='responsive'
            height={1080}
            width={1920}
            className="tw-rounded-xl"
        />
        <div className='tw-p-2'>
            <p className='tw-truncate tw-max-w-md' >{result.overview}</p>
            <h2 className='tw-mt-1 tw-text-2xl tw-text-white tw-transition-all tw-duration-100 tw-ease-in-out group-hover:tw-font-bold'>{result.title || result.original_name}</h2>
            <p className='tw-flex tw-items-center tw-opacity-0 group-hover:tw-opacity-100'>
                {result.media_type && `${result.media_type}`}{""}
                {result.release_date || result.firt_air_date}{""}
                <HiOutlineThumbUp className='tw-h-5 tw-mx-2'/>{result.vote_count}
            </p>
        </div>

    </div>
  )
})

export default Thumbnail