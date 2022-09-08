import React from 'react'
import Thumbnail from './Thumbnail'
import FlipMove from "react-flip-move"

const Results = ({results}) => {
  return (
    <FlipMove className='tw-px-5 tw-my-10 sm:tw-grid md:tw-grid-cols-2 xl:tw-grid-cols-3 3xl:tw-flex tw-flex-wrap tw-justify-center'>
        {
            results.map((result) => (
                <Thumbnail key={result.id} result={result}/>
            ))
        }
    </FlipMove>
  )
}

export default Results;