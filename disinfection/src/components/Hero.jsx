import React from 'react';
import heroImage from '../assets/hero.png';
import squareLarge from '../assets/square_large.png';
import squareMedium from '../assets/square_medium.png';
import squareSmall from '../assets/square_small.png';
import '../App.css';

const Hero = () => {
  return (
    <div className='w-full py-16 px-4'>
        <div className='max-w-[1360px] px-4 mx-auto grid md:grid-cols-2'>
            <div className=' md:text-start text-center flex flex-col md:items-start items-center'>
                <h1 className='md:text-8xl text-6xl text-blue title'>Disinfection service</h1>
                <p className='md:text-lg sm:text-sm text-md py-6'>Our company, which has been operating for many years, <br /> is satisfied with us</p>
                <div className='relative bottom-[40%] left-[40%]'>
                    <img src={squareSmall} alt="/" className='absolute z-0' />
                    <img src={squareMedium} alt="/" className='absolute z-0' />
                    <img src={squareLarge} alt="/" className='absolute z-0' />
                </div>
                
                <button className='bg-blue h-[36px] w-[190px] md:mt-12 rounded-2xl
                text-white hover:bg-darkBlue ease-in-out duration-500'>
                    Contact
                </button>    
            </div>
            <img className='w-[500px] mx-auto my-4' src={heroImage} alt="/" />    
        </div>        
    </div>
  )
}

export default Hero