import React from 'react'
import hero from '../../public/images/heroImg.svg'
import Image from 'next/image'
import Button from './button'

const Hero = () => {
    return (
        <section className='grid lg:grid-cols-2 md:grid-cols-1 gap-10 mx-auto md:px-[3rem] sm:px-10 px-5 mt-[4rem] '>
            <div className='flex flex-col justify-center gap-5 md:order-1 order-1'>
                <h1 className='text-black md:text-[2.4rem] text-[1.5rem] font-bold md:w-fit w-full'><span className='text-[#F29F05]'>Uniclique</span> made university retail easy for you by <span className='text-[#8C3926]'>creating custom website</span></h1>
                <p className='text-black text-[.9rem] poppins-bold md:w-[80%] w-full'>Discover a tailor-made website for your business – shop and sell with ease from those you know and trust!</p>
                <div className='flex gap-5 items-center'>
                    <Button text='Get Started' styles="bg-[#590209] text-white rounded-md md:text-[15px] text-[14px]"/>
                    <Button text='Learn More' styles="border-[1.3px] border-[#590209] hover:transform md:text-[15px] text-[14px]"/>
                </div>
            </div>
            <Image src={hero} alt='hero' className='object-cover md:order-2 order-2' />
        </section>

    )
}

export default Hero
