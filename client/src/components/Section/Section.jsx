import React from 'react'
import ProductCard from '../ProductCard/ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

/*
    title: "Offer"
    isSlider: false / true
    classTitle: "offers-section"
    items: []
*/

export default function Section(props) {
    console.log("products",  props.items);
  return (
    <div className={`${props.classTitle} container mx-auto my-5 px-2 sm:px-8`}>
    <div
      className="liner-container mt-5 flex justify-center border-b-2 border-[rgba(119,119,119,.17)]">
      <h1
        className="mb-[-2px] inline-block border-b-2 border-primary-500 pb-3 text-2xl font-bold uppercase">
        {props.title}
      </h1>
    </div>
    {props.isSlider && props.items.length && (<Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {props.items.map(item =>  <SwiperSlide key={item.productId} className="swiper-slide h-auto"> <ProductCard data={item} /></SwiperSlide>)}
    </Swiper>)}        

        
    </div>
  )
}
