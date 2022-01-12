import React from 'react'
import MySwiper from '../ui/MySwiper'
import styles from './HorseDetail.module.css'
import { SwiperSlide } from "swiper/react";
import { Horse } from '../../pages/Adoption';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
export default function HorseDetail(props: { selectedHorse?: Horse }) {
    console.log(props.selectedHorse?.attributes.image.data)
    const imgUrls = props.selectedHorse?.attributes.image.data.map(item => {
        return item.attributes.url
    })
    return (
        <div className={styles['horse-detail']}>
            <MySwiper className='horse-swiper'>
                {imgUrls ? imgUrls.map((url, index) => { return (<SwiperSlide key={index} className={styles['swiper-slide']} ><div className={styles['horse-img-wrapper']}><img src={url} alt="horse-img" className={styles['horse-detail-img']}></img></div></SwiperSlide>) }) : null}
            </MySwiper>
            <Typography variant="h5" component='label'>Name: {props.selectedHorse?.attributes.name}</Typography>
            <Divider />
            <Typography variant="h5" component='label'>Joined At: {props.selectedHorse?.attributes.publishedAt.slice(0,10)}</Typography>
            <Divider />
            <Typography variant="h5" component='label'>About Me</Typography>
            <p style={{color:'gray'}}>{props.selectedHorse?.attributes.description}</p>
        </div>
    )
}
