import React, {useState} from 'react'
import Logo from '../assets/logo.png';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }
  return (
    <div className='flex justify-between items-center h-24 max-w-[1360px] px-4 mx-auto'>
        <img src={Logo} alt="/" />
        <ul className='hidden md:flex justify-between items-center'>
            <li><a className='font-lg p-4 hover:text-blue ease-in-out duration-500' href="#">Service</a></li>
            <li><a className='font-lg p-4 hover:text-blue ease-in-out duration-500' href="#">About</a></li>
            <li><a className='font-lg p-4 hover:text-blue ease-in-out duration-500' href="#">Faq</a></li>
            <li><a className='font-lg p-4 hover:text-blue ease-in-out duration-500' href="#">Language</a></li>
        </ul>
        <button className='bg-blue hidden md:flex justify-center items-center h-[36px] w-[190px] rounded-2xl text-white hover:bg-darkBlue ease-in-out duration-500'>Contact</button>
    
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
        </div>

        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full bg-white ease-in-out duration-500 mx-3 my-9' : 'fixed left-[-100%]'}>
            <img src={Logo} alt="/" />

            <ul className='p-4'>
                <li><a className='font-lg p-4 hover:text-blue ease-in-out duration-500' href="#">Service</a></li>
                <li><a className='font-lg p-4 hover:text-blue ease-in-out duration-500' href="#">About</a></li>
                <li><a className='font-lg p-4 hover:text-blue ease-in-out duration-500' href="#">Faq</a></li>
                <li><a className='font-lg p-4 hover:text-blue ease-in-out duration-500' href="#">Language</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;