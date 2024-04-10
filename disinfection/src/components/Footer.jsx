import React from 'react';
import formImage from '../assets/form_img.png';
import Logo from '../assets/logo.png';
import Location from '../assets/location_icon.png';
import Phone from '../assets/phone_icon.png';
import arrowIcon from '../assets/black_arrow.png';

const Footer = () => {
  return (
    <div className='w-full max-w-[1360px] px-4 my-6 mx-auto md:text-start text-center'>
      <div className='grid md:grid-cols-2 px-6 py-4 items-start text-white bg-gradient-to-r from-cyan-500 to-blue md:h-[450px] md:w-full rounded-xl'>
            <div className='bg-slate-100 md:h-[400px] rounded-lg md:w-[450px] my-4'>
                <form action="" className='flex flex-col justify-center p-6'>
                    <label htmlFor="" className='title text-black md:text-3xl text-2xl'>Leave your Email and Phone Number</label>
                    <input type="Email"  placeholder='Enter your Email' className='bg-slate-200 my-6 py-3 px-4 rounded-xl'/>
                    <input type="number"  placeholder='Enter your number' className='bg-slate-200 py-3 px-4 rounded-xl'/>
                    <span className='my-5'><input type="checkbox"/><label htmlFor="" className='text-black'>Receive informations by email</label></span>
                    <button className='bg-black py-3 px-4 rounded-xl'>Send</button>
                </form>
            </div>
            <div className='flex md:w-[700px] md:h-[450px] p-4'>
                <h2 className='title md:text-3xl text-xl my-5'>Our company, which has been operating for many years, is satisfied with us</h2>
                <img src={formImage} alt="/" className='relative md:left-[10%] w-full md:block hidden'/>
            </div>
      </div>

      <div className='grid md:grid-cols-2 my-8 md:items-start md:justify-start justify-center items-center'>
        <img src={Logo} alt="/" className='my-8' />
        <div className='md:items-start md:justify-start justify-center items-center'>
            <div className='flex gap-4 h-5 md:justify-center items-center w-[320px]'>
                <img src={Location} alt="/" className='border border-gray rounded-md w-[30px] h-[30px] p-1' />
                <p>Tashkent City, Mirzo-Ulugbek district, Neer to National Museum</p>
                <img src={arrowIcon} alt="/" />
            </div>

            <div className='flex gap-4 h-5 my-8 items-center'>
                <img src={Phone} alt="/" className='border border-gray rounded-md w-[30px] h-[30px] p-1'/>
                <p>90 700 00 00</p>
                <img src={arrowIcon} alt="/" />
            </div>

            <div className='grid md:grid-cols-3 gap-8 justify-center items-center border-t border-gray py-5'>
                <div className='bg-slate-100 flex justify-center items-center gap-3 title rounded-2xl py-2 px-4 md:w-[200px] w-[240px] my-1'>
                    <p>Facebook</p>
                    <img src={arrowIcon} alt="/" />
                </div>
                <div className='bg-slate-100 flex justify-center items-center gap-3 title rounded-2xl py-2 px-4 md:w-[200px] w-[240px] my-1'>
                    <p>Instagram</p>
                    <img src={arrowIcon} alt="/" />
                </div>
                <div className='bg-slate-100 flex justify-center items-center gap-3 title rounded-2xl py-2 px-4 md:w-[200px] w-[240px] my-1'>
                    <p>Telegram</p>
                    <img src={arrowIcon} alt="/" />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer