import { gql } from '@apollo/client';
import React from 'react'
import Blog from '../components/blog/Blog';
import Strip from '../components/strip/Strip';
import styles from '../components/strip/Strip.module.css'
export default function Adoption() {
    const getHorse = gql`
    query getHorses{
        horses{
          data{
            id,
            attributes{
              name,
              description
            }
          }
        }
      }
    `
    return (
        <div className={styles["strip-container"]}>
            <Strip background="home/home-1.jpg">Adoption</Strip>
            <Strip background="home/home-2.jpg">Adoption</Strip>
            <Strip background="home/home-3.png">
                <Blog query={getHorse}></Blog>
            </Strip>
        </div>
    )
}
