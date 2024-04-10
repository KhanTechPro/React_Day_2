import React from 'react';
import brainIcon from '../assets/brain-icon.png';
import coIcon from '../assets/co-icon.png';
import taskIcon from '../assets/task-icon.png';

const Advantages = () => {
  return (
    <div className='w-full max-w-[1360px] px-4 mx-auto md:text-start text-center'>
        <h2 className='title text-5xl border-b border-gray py-5'>Advantages</h2>
        <div className='grid md:grid-cols-3'>
            <div className='flex flex-col md:items-start items-center my-5'>
                <img src={brainIcon} alt="/" />
                <h3 className='title text-3xl my-4'>Fast Service</h3>
                <p>Our company, which has been operating for many years, is satisfied with us</p>
            </div>
            <div className='flex flex-col md:items-start items-center my-5'>
                <img src={coIcon} alt="/" />
                <h3 className='title text-3xl my-4'>Proffessional Team</h3>
                <p>Our company, which has been operating for many years, is satisfied with us</p>
            </div>
            <div className='flex flex-col md:items-start items-center my-5'>
                <img src={taskIcon} alt="/" />
                <h3 className='title text-3xl my-4'>On Your Time</h3>
                <p>Our company, which has been operating for many years, is satisfied with us</p>
            </div>
        </div>

        <div className='flex flex-col justify-center items-end md:text-white md:bg-advantagesImage h-[600px] bg-no-repeat'>
            <div className='md:w-[660px] p-10'>
                <h2 className='title md:text-5xl text-4xl'>The valve and harmful insects are considered to be gone!!!</h2>
                <p className='my-5 w-[300px]'>Our company, which has been operating for many years, is satisfied with us</p>
                <button className='bg-blue h-[36px] w-[190px] md:mt-12 rounded-2xl text-white hover:bg-darkBlue ease-in-out duration-500'>
                    Contact
                </button>  
            </div>
        </div>
    </div>
  )
}

export default Advantages