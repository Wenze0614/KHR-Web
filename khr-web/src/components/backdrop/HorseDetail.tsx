import React from 'react'
import MySwiper from '../ui/MySwiper'
import styles from './HorseDetail.module.css'
import { SwiperSlide } from "swiper/react";
import { Horse } from '../../pages/Adoption';
export default function HorseDetail(props: { selectedHorse?: Horse }) {
    console.log(props.selectedHorse?.attributes.image.data)
    const imgUrls = props.selectedHorse?.attributes.image.data.map(item => {
        return item.attributes.url
    })
    return (
        <div className={styles['horse-detail']}>
            <MySwiper className='horse-swiper'>
                {imgUrls?imgUrls.map((url,index)=>{return (<SwiperSlide key={index} className={styles['swiper-slide']} ><img src={url} alt="horse-img" className={styles['horse-detail-img']}></img></SwiperSlide>)}):null}
            </MySwiper>
            <p style={{color:'black'}}>horse detail</p>
        </div>
    )
}
