import React from 'react'
import Strip from '../components/strip/Strip'
import Button from '../components/ui/Button'

export default function Donation() {
    return (
        <Strip background='home/home-3.png' darkness='0.3'>
            <h1>Help Us</h1>
            <p>Give the horses love, care, and a safe home</p>
            <Button type='button'>Donate</Button>
        </Strip>
    )
}
