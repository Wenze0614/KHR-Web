import React from 'react'
import MySwiper from '../ui/MySwiper'
import styles from './HorseDetail.module.css'
import {SwiperSlide } from "swiper/react";
import { Horse } from '../../pages/Adoption';
export default function HorseDetail(props: { selectedHorse?:Horse }) {

    return (
        <div className={styles['horse-detail']}>
            <p>{props.selectedHorse?.id}</p>
            <div className={styles['horse-detail-content']}>
                <MySwiper>
                    {props.selectedHorse?.attributes.image.data.map((img,index)=>{return (<SwiperSlide key={index}><img src={img.attributes.url} alt="horse-img"></img></SwiperSlide>)})}
                </MySwiper>
            </div>
        </div>
    )
}
