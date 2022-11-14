import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import slide1 from '../../assets/slide1.png'
import slide2 from '../../assets/slide2.png'
import slide3 from '../../assets/slide3.png'
import slide4 from '../../assets/slide4.png'
import slide5 from '../../assets/slide5.png'
import slide6 from '../../assets/slide6.png'
import slide7 from '../../assets/slide7.png'
import slide8 from '../../assets/slide8.png'

import {FreeMode, Mousewheel, Scrollbar} from "swiper";
import s from './Slider.module.css'
import {FC} from "react";

const sliderImages = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8]

export const Slider: FC = () => {
  let isDesktopDemo = true
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Lorem ipsum dolor sit amet</h2>
      <Swiper
        direction={"horizontal"}
        allowTouchMove={true}
        autoHeight={true}
        freeMode={true}
        scrollbar={true}
        mousewheel={isDesktopDemo ? {
          sensitivity: 0.5,
          releaseOnEdges: true,
          thresholdDelta: 14
        } : false}
        modules={[FreeMode, Scrollbar, Mousewheel]}
        className="mySwiper"
        spaceBetween={40}
        breakpoints={{
          320: {
            slidesPerView: 1.5,
            spaceBetween: 20,
            mousewheel: false
          },
          1200: {
            slidesPerView: 3.5,
          }
        }}
      >
        {sliderImages.map((image, index) => <SwiperSlide key={index}><img src={image}
                                                                          className={s.image}
                                                                          alt={image}/></SwiperSlide>)}
      </Swiper>
    </div>
  );
};
