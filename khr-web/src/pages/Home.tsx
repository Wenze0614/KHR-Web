import React from 'react';
import Strip from '../components/strip/Strip';
import styles from './Home.module.css'
import Card from '../components/ui/Card'
import { Link } from 'react-router-dom';
const Home = () => {
    console.log('home')
    return (
        <>
            <Strip background="home/home-1.jpg" darkness='0.4'>
                <h1>Kalina Horse Rescue</h1>
                <p>Our mission is to rescue, rehabilitate and re-home horses</p>
            </Strip>
            <Strip background="home/home-2.jpg" darkness='0.3'>
                <h2>About Us</h2>
                <p>Kalina Horse Rescue was established for the horses of WA who need a safe place to call home, by a group of people who are dedicated to helping horses.</p>
                <p>Kalina Horse Rescue is a specialist equine service where we rescue, rehabilitate, and re-home horses to their forever homes.</p>
                <p>We help horses from Perth metro and regional areas.</p>
            </Strip>
            <Strip background="home/home-3.jpg" darkness='0.6'>
                {/* <h2>Our Services</h2> */}
                <div className={styles['service-wraper']}>
                    <Card className="service-card" backgroundImg={require('../assets/home/home-1.jpg')}>
                        <h3>Donation</h3>
                        <p>All donations go towards providing the horses with quality care, to improve their lives both emotionally and physically.
                            KHR ensure the horses have the best opportunities to heal, recover, rehabilitate and to be re-homed to their perfect forever home.
                            <br></br><br></br>
                            <Link to="/donation">Learn More</Link></p>

                    </Card>
                    <Card className="service-card" backgroundImg={require('../assets/home/home-2.jpg')}>
                        <h3>Sponsorship</h3>
                        <p>You can help a horse through their recovery and rehabilitation.
                            All horses and ponies can be sponsored, your donations go towards caring for the horses to provide quality care, food, vet care, treatment, rehabilitation,
                            and training to ensure the horses are healthy, happy, and safe.
                            <br></br><br></br>
                            <Link to="/sponsorship">Learn More</Link></p>

                    </Card>
                    <Card className="service-card" backgroundImg={require('../assets/home/home-3.jpg')}>
                        <h3>Adoption</h3>
                        <p>All horses are adopted on a lifetime lease contract.
                            All adoption fees are donations to KHS, and no profit is made on the adoption of horses, all donations ensure KHS can continue our work to help horses in need.
                            <br></br><br></br>
                            <Link to="/adoption">Learn More</Link></p>

                    </Card>
                </div>
            </Strip>
        </>
    );
};

export default Home;