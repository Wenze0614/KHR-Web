import Strip from '../components/strip/Strip'
import styles from './Sponsor.module.css'
export default function Sponsor() {
    return (
        <div className={styles.sponsor}>
            <Strip background="home/home-1.jpg" darkness='0.3'>
                <h1>Sponsorship</h1>
                <p>You can help a horse through their recovery and rehabilitation. </p>
                <p style={{fontSize:"0.8rem"}}>(sponsorship will be available very soon)</p>
            </Strip>
            <Strip background="home/home-2.jpg" darkness='0.3'>
                <h2>Sponsor Our Horses</h2>
                <p>We are dedicated to helping the horses recover and return to good health, mentally and physically, when the horses are healthy, and sound we find them their perfect forever home.</p>
                <p>You can help a horse through their recovery and rehabilitation. </p>
                <p>All horses and ponies can be sponsored, your donations go towards caring for the horses to provide quality care, food, vet care, treatment, rehabilitation, and training to ensure the horses are healthy, happy, and safe. </p>
                <p>Sponsorship for:</p>
                <p>a pony is $15 a week,</p>
                <p>a horse is $25 a week</p>
            </Strip>
        </div>
    )
}
