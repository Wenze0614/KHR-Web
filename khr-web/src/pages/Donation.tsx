
import Strip from '../components/strip/Strip'
import MyButton from '../components/ui/MyButton'

export default function Donation() {
    return (
        <Strip background='donation/donation-1.jpg' darkness='0.3'>
            <h1>Help Us</h1>
            <p>Give the horses love, care and a safe home</p>
            <p style={{fontSize:"0.8rem"}}>(Donation will be available very soon)</p>
            <MyButton type='button'>Donate</MyButton>
        </Strip>
    )
}
