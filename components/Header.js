import {AiOutlineHome} from 'react-icons/ai'
import {BsLightningCharge} from 'react-icons/bs'
import {HiOutlineBadgeCheck} from 'react-icons/hi'
import {HiOutlineCollection} from 'react-icons/hi'
import {BsSearch} from 'react-icons/bs'
import {FaRegUser} from 'react-icons/fa'

const icones = [
    {
        icone: AiOutlineHome,
        title: 'HOME',
    },
    {
        icone: BsLightningCharge,
        title: 'TRENDING',
    },
    {
        icone: HiOutlineBadgeCheck,
        title: 'VERIFIED',
    },
    {
        icone: HiOutlineCollection,
        title: 'COLLECTION',
    },
    {
        icone: BsSearch,
        title: 'SEARCH',
    },
    {
        icone: FaRegUser,
        title: 'ACCOUNT',
    },
    
]

import Image from 'next/image'
import React from 'react'
import HeaderItem from './HeaderItem'

const Header = () => {
    return (
        <header className='tw-flex tw-flex-col sm:tw-flex-row tw-m-5 tw-justify-between tw-items-center tw-h-auto'>
            <div className='tw-flex tw-justify-evenly tw-max-w-2xl'>
                {
                    icones.map(({title, icone}, index) =>{
                        return(
                            <div className=''>
                                <HeaderItem key={index} title={title} Icon={icone}/>
                            </div>
                        )
                    })
                }
            </div>
            <Image
                className='tw-object-contain'
                src="https://links.papareact.com/ua6"
                width={200}
                height={100}
            />
        </header>
    )
}

export default Header