import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import Typography from '../Typography';
import { useDispatch, useSelector } from 'react-redux';
import { navbarheight } from '@/store/action/navbar';
import Loading from '../Loading';


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
    const loading = useSelector((state) => state.loadingReducer.isLoading);

    const navbarRef = useRef(null);
    const [navbarHeight, setNavbarHeight] = useState(0);
    const dispatch = useDispatch()
    useEffect(() => {
        const updateNavbarHeight = () => {
            if (navbarRef.current) {
                setNavbarHeight(navbarRef.current.clientHeight);
            }
        };

        updateNavbarHeight();

        const resizeObserver = new ResizeObserver(() => {
            updateNavbarHeight();
        });

        if (navbarRef.current) {
            resizeObserver.observe(navbarRef.current);
        }

        return () => {
            if (navbarRef.current) {
                resizeObserver.unobserve(navbarRef.current);
            }
        };
    }, []);
    useEffect(() => {
        dispatch(navbarheight(navbarHeight))
    }, [navbarHeight])
    return (
        <div ref={navbarRef} >
            <div style={{ padding: 24, display: "flex", flexWrap: "wrap", flexDirection: "row", gap: 16, justifyContent: "space-between" }}>
                <div style={{
                    color: '#2E8B57',
                    fontSize: '18px',
                    fontWeight: 600
                    , fontFamily: 'sans-serif',
                }}>
                    Green branch(logo)
                </div>
                <div style={{ display: "flex", flexDirection: "row", gap: 24 }}>
                    <Typography style={{ color: "#2E8B57" }} variant="heading14">405 676-3003</Typography>
                    <Typography style={{ color: "#2E8B57" }} variant="heading14">24-hr service</Typography>
                    <Typography style={{ color: "#2E8B57" }} variant="heading14">greenbranchkllc@gmail.com</Typography>

                </div>
            </div>
            {loading && (
                <div className="Overlay">
                    <Loading />
                </div>
            )}
            <nav className='navbar'>
                <a onClick={navToHome} className='navbarText'>Home</a>
                <a onClick={navToServices} className='navbarText'>Services</a>
                <a onClick={navToContactus} className='navbarText'>Contact Us</a>
            </nav>


        </div>

    );
}

export default Navbar;
