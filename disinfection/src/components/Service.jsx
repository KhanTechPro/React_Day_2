import React from 'react';
import wheel1 from '../assets/wheels_1.png';
import wheel2 from '../assets/wheels_2.png';
import wheel3 from '../assets/wheels_3.png';
import serviceImage from '../assets/banner_2.png';
import shield from '../assets/shield.png';

const Service = () => {
  return (
    <div className='w-full max-w-[1360px] px-4 py-12 mx-auto md:text-start text-center'>

        <h2 className='title text-5xl'>Services</h2>
        <p className='text-gray py-3'>Our company, which has been operating for many years, is satisfied with us</p>
      
      <div className='grid md:grid-cols-3 gap-8 py-8 '>
        <div className='bg-slate-100 h-[450px] rounded-xl w-[400px] p-12 my-5'>
          <h2 className='title text-4xl'>Silver</h2>
          <p className='py-2'>+ 24/7 hours</p>
          <p>+ Weekly support</p>
          <div className='flex flex-col justify-end items-end relative top-[50%]'>
            <img src={wheel1} alt="/"/>
          </div>
        </div>
        <div className='bg-slate-100 h-[450px] rounded-xl w-[400px] p-12 my-5'>
          <h2 className='title text-4xl'>Gold</h2>
          <p className='py-2'>+ 24/7 hours</p>
          <p>+ Weekly support</p>
          <div className='flex flex-col justify-end items-end relative top-[50%]'>
            <img src={wheel2} alt="/"/>
          </div>
        </div>
        <div className='bg-slate-100 h-[450px] rounded-xl w-[400px] p-12 my-5'>
          <h2 className='title text-4xl'>Platinuim</h2>
          <p className='py-2'>+ 24/7 hours</p>
          <p>+ Weekly support</p>
          <div className='flex flex-col justify-end items-end relative top-[50%]'>
            <img src={wheel3} alt="/"/>
          </div>
        </div>
      </div>

      <div className='grid md:grid-cols-2 px-6 py-4 items-start text-white bg-gradient-to-r from-cyan-500 to-blue md:h-[550px] rounded-xl'>
            <div>
              <img src={serviceImage} alt="/" />
            </div>
            <div className='flex flex-col md:items-start items-center md:w-[660px] p-10'>
                <img src={shield} alt="/" />
                <h2 className='title md:text-4xl text-xl my-5'>Our company, which has been operating for many years, is satisfied with us</h2>
                <button className='bg-blue h-[36px] w-[190px] md:mt-12 rounded-2xl text-white font-bold hover:bg-darkBlue ease-in-out duration-500'>
                    Contact
                </button>  
            </div>
      </div>
    </div>
  )
}

export default Service