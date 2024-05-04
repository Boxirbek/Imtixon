import React from 'react'
import "./Banner.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';


import { Navigation, Autoplay } from 'swiper/modules';

const Banner = () => {
  return (
    <div className='banner'>
    <Swiper 
        loop={true} 
        navigation={true} 
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]} 
        className="banner__swiper">
        <SwiperSlide className='banner__item'>
                  <h1>Fresh Vegetables <br />
                      Big discount</h1>
                  <h4>Save up to 50% off on your first order</h4>
                  <form className='carusel_button'>
                      <input type="text" name="" id="" placeholder='Your email address' />
                      <button>Subscribe</button>
                  </form>
                 
        </SwiperSlide>
        <SwiperSlide className='banner__item'>
            <div className="banner__content">
                      <h1>Fresh Vegetables <br />
                          Big discount</h1>
                      <h4>Save up to 50% off on your first order</h4>
                      <form className='carusel_button'>
                          <input type="text" name="" id="" placeholder='Your email address' />
                          <button>Subscribe</button>
                      </form>
            </div>
        </SwiperSlide>
        <SwiperSlide className='banner__item'>
                  <h1>Fresh Vegetables <br />
                      Big discount</h1>
                  <h4>Save up to 50% off on your first order</h4>
                  <form className='carusel_button'>
                      <input type="text" name="" id="" placeholder='Your email address' />
                      <button>Subscribe</button>
                  </form>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Banner