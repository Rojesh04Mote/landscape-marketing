import { useRouter } from 'next/router';
import React from 'react';
import Typography from '../Typography';

const Navbar = () => {
    const router = useRouter()
    const navToHome = () => {
        router.push("/home")
    }
    const navToServices = () => {
        router.push("/services")
    }
    const navToContactus = () => {
        router.push("/contact-us")
    }


    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'black',
            padding: '16px 24px',
            margin: "-8px",
            marginBottom: "16px",
            fontSize: '14px',
        }}>
            <div style={{
                color: 'white',
                fontSize: '18px',
                fontWeight: 600
                , fontFamily: 'sans-serif',
            }}>
                Landscape Marketing
            </div>
            <div style={{
                display: 'flex',

                gap: '20px',
            }}>

                <a onClick={navToHome} className='navbarText'>Home</a>
                <a onClick={navToServices} className='navbarText'>Services</a>
                <a onClick={navToContactus} className='navbarText'>Contact Us</a>
            </div>
        </nav>
    );
}

export default Navbar;
