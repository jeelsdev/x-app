import { MouseEvent } from 'react';
import { FaBabyCarriage } from 'react-icons/fa';
import { FaIdCardClip, FaPeopleCarryBox } from 'react-icons/fa6';
import { LuShoppingCart } from 'react-icons/lu';

const Info = () => {

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href');
        document.querySelectorAll('.carousel-button').forEach((item) => {
          item.classList.remove('bg-gray-400');
        });
        document.querySelector('[href="'+targetId+'"]')?.classList.add('bg-gray-400');
        const targetElement = document.querySelector(targetId??'');
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
          });
        }
      };

    return (
        <>
            <div className='lg:hidden'>
                <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full">
                        <div className='m-auto'>
                            <FaBabyCarriage className='text-6xl m-auto text-red-700'/>
                            <p className='m-auto text-lg mt-2 px-8'>Lorem ipsum dolor sit. Lorem, ipsum dolor.</p>
                        </div>
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <div className='m-auto'>
                            <FaIdCardClip className='text-6xl m-auto text-red-700'/>
                            <p className='m-auto text-lg mt-2 px-8'>Lorem ipsum dolor sit. Lorem, ipsum dolor.</p>
                        </div>
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <div className='m-auto'>
                            <FaPeopleCarryBox className='text-6xl m-auto text-red-700'/>
                            <p className='m-auto text-lg mt-2 px-8'>Lorem ipsum dolor sit. Lorem, ipsum dolor.</p>
                        </div>
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <div className='m-auto'>
                            <LuShoppingCart className='text-6xl m-auto text-red-700'/>
                            <p className='m-auto text-lg mt-2 px-8'>Lorem ipsum dolor sit. Lorem, ipsum dolor.</p>
                        </div>
                    </div>
                </div>
                    <div className="flex w-full justify-center gap-2 py-2 pt-6">
                        <a href="#item1" className="carousel-button w-3 h-3 bg-secondary-100 rounded-full" onClick={handleClick}></a>
                        <a href="#item2" className="carousel-button w-3 h-3 bg-secondary-100 rounded-full" onClick={handleClick}></a>
                        <a href="#item3" className="carousel-button w-3 h-3 bg-secondary-100 rounded-full" onClick={handleClick}></a>
                        <a href="#item4" className="carousel-button w-3 h-3 bg-secondary-100 rounded-full" onClick={handleClick}></a>
                    </div>
            </div>

            <div className='hidden lg:block'>
                <div id="item1" className="w-full flex">
                    <div className='m-auto'>
                        <FaBabyCarriage className='text-5xl m-auto text-red-700'/>
                        <p className='m-auto text-md mt-4 px-8'>Lorem ipsum dolor sit. Lorem, ipsum dolor.</p>
                    </div>
                    <div id="item2" className="">
                        <div className='m-auto'>
                            <FaIdCardClip className='text-5xl m-auto text-red-700'/>
                            <p className='m-auto text-md mt-4 px-8'>Lorem ipsum dolor sit. Lorem, ipsum dolor.</p>
                        </div>
                    </div>
                    <div id="item3" className="">
                        <div className='m-auto'>
                            <FaPeopleCarryBox className='text-5xl m-auto text-red-700'/>
                            <p className='m-auto text-md mt-4 px-8'>Lorem ipsum dolor sit. Lorem, ipsum dolor.</p>
                        </div>
                    </div>
                    <div id="item4" className="">
                        <div className='m-auto'>
                            <LuShoppingCart className='text-5xl m-auto text-red-700'/>
                            <p className='m-auto text-md mt-4 px-8'>Lorem ipsum dolor sit. Lorem, ipsum dolor.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Info;
