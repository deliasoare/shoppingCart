import { useState } from 'react';

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx';

import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';
import img7 from '../assets/7.png';
import img8 from '../assets/8.png';

const slides = [
    {
        url: img1
    },
    {
        url: img2
    },
    {
        url: img3
    },
    {
        url: img4
    },
    {
        url: img5
    },
    {
        url: img6
    },
    {
        url: img7
    },
    {
        url: img8
    },

]
const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const onLeftArrow = () => {
        if (currentIndex === 0)
            setCurrentIndex(slides.length - 1);
        else
            setCurrentIndex(prevIndex => prevIndex - 1);
    }
    const onRightArrow = () => {
        console.log(currentIndex);
        if (currentIndex === slides.length - 1)
            setCurrentIndex(0);
        else
            setCurrentIndex(prevIndex => prevIndex + 1);
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

    return (
        <div className='min-w-[250px] min-h-[400px] h-[800px] w-full m-auto py-4 px-4 relative group'>
            <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className="imageSlider w-full h-full  rounded-2xl bg-center bg-cover duration-500"></div>
            {/* Left arrow */}
            <button className='absolute right-20 p-3 text-lg top-[85%] font-semibold bg-[rgb(250,133,0)] rounded-md hover:scale-110 hover:rotate-[-6deg] duration-500'>SHOP NOW</button>
            <div className='hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'> 
                <BsChevronCompactLeft size={30} onClick={onLeftArrow} />
            </div>
            {/* Right arrow  */}
            <div className='hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight size={30} onClick={onRightArrow}/>
            </div>
            <div className='flex top-4 justify-center py-2'>
                { slides.map((slide, slideIndex) => {
                    let selected = false;
                    if (slideIndex === currentIndex) selected = true
                    return (
                        <div key={slideIndex} className='text-2xl rounded-full cursor-pointer'>
                            <RxDotFilled color={selected ? 'rgba(250, 133, 0, 1)' : 'black'} onClick={() => { goToSlide(slideIndex) }}/>
                        </div>
                    );
                }) }
            </div>
        </div>

    );
}

export default ImageSlider;