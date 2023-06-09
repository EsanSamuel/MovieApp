{/*import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { data } from '../Utils/constants';

const API_IMG = 'https://image.tmdb.org/t/p/w500/'

const Slideshow = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <div className='w-full'>
           <Slider {...settings}>
                {data.map((datax) => (
                    <div key={datax.id} className='w-full h-[40%]'>
                    <div className='h-[40%]'>
                        <img src={API_IMG + datax.poster_path} className='w-full h-[30rem]'/>
                        <h1>{datax.title}</h1>
                    </div>
                    </div>
                ))}
                </Slider>

           
        </div>
    )
}

export default Slideshow*/}