import { gql } from '@apollo/client';
import React from 'react'
import Blog from '../components/blog/Blog';
import Strip from '../components/strip/Strip';
import Button from '../components/ui/Button';
import styles from './Adoption.module.css'

type ImageData = {
  attributes: {
    url: string
  }
}

export type Horse = {
  id: string
  attributes: {
    name: string,
    description: string,
    publishedAt: string,
    image: {
      data: ImageData[]
    }
  }
}
export default function Adoption() {
  const getHorse = gql`
    query getHorses{
        horses(pagination:{limit:-1}){
          data{
            id,
            attributes{
              name,
              description,
              publishedAt,
              image{
                data{
                  attributes{
                    url
                  }
                }
              }
            }
          }
        }
      }
    `
  return (
    <div className={styles.adoption}>
      <Strip background="adoption/adoption-1.png" darkness='0.2'>
        <h1>Adoption</h1>
        <p style={{ fontSize: '1.5rem', textAlign: 'center' }}>Find Horse A Home</p>
        <p style={{fontSize:"0.8rem"}}> (Click to download adoption application form)</p>
        <Button type='button'><a href='Adoption-Application.pdf' download>Download</a></Button>
      </Strip>
      {/* <Strip background="home/home-2.jpg">Adoption</Strip> */}
      <Strip  background="adoption/adoption-2.jpg" darkness='0.5'>
        {/* <p style={{ fontSize: '1.5rem', textAlign: 'center',whiteSpace:'pre-line' }}>
          All horses are adopted on a lifetime lease contract. 
          Adoption fees vary, from $250 to $2500, depending on the care and treatment the horses have received on their road to recovery. 
          All adoption fees are donations to KHS, and no profit is made on the adoption of horses, all donations ensure KHS can continue our work to help horses in need. 
          If the new owners can no longer care for the horses they must be returned to KHR, the horses must not be sold on or given away. 
          For all enquiries and expressions of interest in adopting a horse please contact us via email, our contact form or call us on 0411 053 853 
        </p> */}
        <p>All horses are adopted on a lifetime lease contract</p>
        <p>Adoption fees vary, from $250 to $2500, depending on the care and treatment the horses have received on their road to recovery.</p>
        <p>All adoption fees are donations to KHS, and no profit is made on the adoption of horses, all donations ensure KHS can continue our work to help horses in need. </p>
        <p>If the new owners can no longer care for the horses they must be returned to KHR, the horses must not be sold on or given away. </p>
        <p>For all enquiries and expressions of interest in adopting a horse please contact us via email, our contact form or call us on 0411 053 853 </p>
      </Strip>
      <Strip background="adoption/adoption-3.jpeg" darkness='0.3'>
        <h2>Our Horses</h2>
        <Blog query={getHorse} queryFor='horses' className='horses-blog' blogsPerPage={8}></Blog>
      </Strip>
    </div>
  )
}
