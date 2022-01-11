import { Swiper } from 'swiper/react'
import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper';
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import React, { ReactNode } from 'react'
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function MySwiper(props:{children:ReactNode}) {
    return (
        <>
            <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
                "delay": 2500,
                "disableOnInteraction": false
            }} pagination={{
                "clickable": true
            }} navigation={true} className="mySwiper">
                {props.children}
            </Swiper>
        </>
    )
}
