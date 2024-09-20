import { useEffect, useState } from 'react';
import { NavbarMenu } from '../../mockData/data';
import { CiSearch } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from './ResponsiveMenu';
import Logo from '../common/Logo';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 200) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

  return (
    <>
        <nav className={`${scrolled ? 'bg-opacity-100 bg-white' : 'bg-opacity-5'} fixed left-0 right-0 z-50`}>
            <div className="container flex justify-between items-center">
                {/* Logo section */}
                <div className="text-2xl flex items-center gap-2 font-bold uppercase">
                    <Logo />
                </div>
                {/* Menu section */}
                <div className="hidden md:block">
                    <ul className="flex items-center gap-6 text-primary-100">
                        {
                            NavbarMenu.map((item) => {
                                return (
                                    <li key={item.id}>
                                        <a href={item.url} className='inline-block py-1 px-3 hover:text-secondary-100 font-semibold'>{item.title}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                {/* Icons section */}
                <div className='hidden lg:flex items-center gap-4'>
                    <button className='text-2xl text-primary-100 hover:bg-secondary-100 hover:text-white rounded-full p-2 duration-200'>
                        <CiSearch />
                    </button>
                </div>
                {/* Movile haburger Menu section */}
                <div className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
                    <MdMenu className='text-4xl'/>
                </div>
            </div>
        {/* Mobile Sidebar section */}
        <ResponsiveMenu open={isOpen}/>
        </nav>

    </>
  );
};

export default Navbar;