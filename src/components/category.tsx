import React from 'react';
// import Button from '../components/button';
import { MdKeyboardArrowDown,MdSearch } from 'react-icons/md';
import cloth from '../../public/images/clothIcon.svg'
import gadget from '../../public/images/tripodIcon.svg'
import book from '../../public/images/booksIcon.svg'
import jew from '../../public/images/jewelryIcon.svg'
import food from '../../public/images/FoodIcon.svg'
import Image from 'next/image';

export default function Category() {
  return (
    <section className='flex p-5 w-full justify-between bg-[#F2F2F2] flex-col md:flex-row'>
      <div className='flex justify-between w-full flex-col lg:flex-row'>
        <div className='flex items-center rounded-md p-2 text-[white] text-[10px] w-fit bg-[#8C3926] '>
          <button className='md:text-[15px] text-[14px] font-bold px-[1rem] py-[.5rem] '>Category</button>
          <MdKeyboardArrowDown
            size={20}
            color="#fff"
            className="ml-1"
          />
        </div>
        <div className='flex lg:items-center lg:justify-center flex-grow flex-wrap lg:mt-[0rem] mt-[.5rem] gap-2'>
          <div className='flex md:gap-2 gap-1 items-center'>
            <Image src={cloth} alt='clothIcon' width={35} height={35} className='md:w-[35px] w-[20px] md:h-[35px] h-[20px]'/>
            <p className='md:text-[17px] text-[14px] text-[#0D0D0D] md:mr-3 mr-2'>Clothes</p>
          </div>
          <div className='text-[#8B8A8] bg-[#8B8A8]'>|</div>
          <div className='flex md:gap-2 gap-1 items-center'>
            <Image src={gadget} alt='clothIcon' width={25} height={25}/>
            <p className='md:text-[17px] text-[16px] text-[#0D0D0D] md:mr-3 mr-2'>Gadgets</p>
          </div>
          |
          <div className='flex md:gap-2 gap-1 items-center'>
            <Image src={book} alt='clothIcon' width={25} height={25}/>
            <p className='md:text-[17px] text-[16px] text-[#0D0D0D] mr-3'>Books</p>
          </div>
          |
          <div className='flex md:gap-2 gap-1 items-center'>
            <Image src={jew} alt='clothIcon' width={25} height={25}/>
            <p className='md:text-[17px] text-[16px] text-[#0D0D0D] mr-3'>Jewelries</p>
          </div>
          |
          <div className='flex md:gap-2 gap-1 items-center'>
            <Image src={food} alt='clothIcon' width={20} height={20}/>
            <p className='md:text-[17px] text-[16px] text-[#0D0D0D] mr-3'>Food</p>
          </div>
        </div>
        <div className='border-2 border-[#8B8A8] rounded-md justify-between flex p-2 lg:w-fit w-full mt-2 lg:mt-0 items-center'>
          <input type='text' className='focus:outline-none bg-[#F2F2F2]' placeholder='search for item'/>
          <MdSearch size={25} color='#8C3926'/>
        </div>
      </div>
    </section>
  )
}

