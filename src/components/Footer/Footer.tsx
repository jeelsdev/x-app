import Logo from "../common/Logo"

const Footer = () => {
    return (
        <footer className="border-t-2 border-gray-300 pt-6">
            <div className="text-center lg:flex justify-center items-start gap-20 lg:gap-40">
                <div className="flex justify-center items-center">
                    <Logo />
                </div>
                <div className="border-r-2 border-gray-300 h-5 lg:h-20"></div>
                <div className="">
                    <ul className="">
                        <li>
                            <a href="#" className='hover:text-primary'>Home</a>
                        </li>
                        <li>
                            <a href="#" className='hover:text-primary'>About</a>
                        </li>
                        <li>
                            <a href="#" className='hover:text-primary'>Services</a>
                        </li>
                        <li>
                            <a href="#" className='hover:text-primary'>Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="border-r-2 border-gray-300 h-5 lg:h-20"></div>
                <div>
                    <ul className="">
                        <li>
                            <a href="#" className='hover:text-primary'>Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className='hover:text-primary'>Terms of Service</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='text-gray-800 text-center py-4 mt-3'>
                <p>&copy; 2024 - All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer
