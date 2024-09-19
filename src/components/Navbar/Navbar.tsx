import { useState } from 'react';
import { NavbarMenu } from '../../mockData/data';
import { CiSearch } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import { SiPhosphoricons } from "react-icons/si";
import ResponsiveMenu from './ResponsiveMenu';
import Logo from '../common/Logo';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <>
        <nav className='border-b-2 border-gray-300 bg-gray-100 bg-opacity-5 fixed left-0 right-0'>
            <div className="container flex justify-between items-center">
                {/* Logo section */}
                <div className="text-2xl flex items-center gap-2 font-bold uppercase">
                    <Logo />
                </div>
                {/* Menu section */}
                <div className="hidden md:block">
                    <ul className="flex items-center gap-6 text-gray-600">
                        {
                            NavbarMenu.map((item) => {
                                return (
                                    <li key={item.id}>
                                        <a href={item.url} className='inline-block py-1 px-3 hover:text-primary font-semibold'>{item.title}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                {/* Icons section */}
                <div className='flex items-center gap-4'>
                    <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200'>
                        <CiSearch />
                    </button>
                </div>
                {/* Movile haburger Menu section */}
                <div className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
                    <MdMenu className='text-4xl'/>
                </div>
            </div>
        </nav>

        {/* Mobile Sidebar section */}
        <ResponsiveMenu open={isOpen}/>
    </>
  );
};

export default Navbar;