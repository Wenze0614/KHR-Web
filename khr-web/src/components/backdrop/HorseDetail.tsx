import React from 'react'
import MySwiper from '../ui/MySwiper'
import styles from './HorseDetail.module.css'
import { SwiperSlide } from "swiper/react";
import { Horse } from '../../pages/Adoption';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
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
            <div className={styles['horse-detail-content']}>
                <label>Name: <span>{props.selectedHorse?.attributes.name}</span></label>
                <Divider />
                <label>Joined At: <span>{props.selectedHorse?.attributes.publishedAt.slice(0, 10)}</span></label>
                <Divider />
                <label>About Me</label>
                <p style={{ color: 'gray' }}>{props.selectedHorse?.attributes.description}</p>
                <Button size="large" style={{border:'1px solid #5271BB'}}>Adopt Me</Button>
            </div>
        </div>
    )
}
