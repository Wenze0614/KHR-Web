import  {Swiper}  from 'swiper/react'
import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper';
import "swiper/css";
import "swiper/css/pagination"
import React, { ReactNode } from 'react'
import styles from './MySwiper.module.css'
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function MySwiper(props:{children:ReactNode,className:string}) {
    return (
        <>
            <Swiper spaceBetween={10} centeredSlides={true} autoplay={{
                "delay": 4000,
                "disableOnInteraction": false
            }} pagination={{
                "clickable": true
            }} navigation={true} className={styles[props.className]}>
                {props.children}
            </Swiper>
        </>
    )
}
