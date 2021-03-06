import Strip from '../components/strip/Strip'
// import styles from './Sponsor.module.css'
export default function Sponsor() {
    return (
        <>
            <Strip background="sponsor/sponsor-1.jpg" darkness='0.3'>
                <h1>Sponsorship</h1>
                <p>You can help a horse through their recovery and rehabilitation. </p>
                <p style={{fontSize:"0.8rem"}}>(sponsorship will be available very soon)</p>
            </Strip>
            <Strip background="sponsor/sponsor-2.jpg" darkness='0.6'>
                <h2>Sponsor Our Horses</h2>
                <p>We are dedicated to helping the horses recover and return to good health both physically and mentally. Once the horses are healthy and sound, we find them their perfect forever home.</p>
                <p>You can help a horse through their recovery and rehabilitation. </p>
                <p>All horses and ponies can be sponsored. 100% of your donations go towards caring for the horses to provide quality care, food, vet care, treatment, rehabilitation and training. </p>
                <p>Sponsorship for -</p>
                <p>Ponies - $15 per week</p>
                <p>Horses - $25 per week</p>
            </Strip>
        </>
    )
}
