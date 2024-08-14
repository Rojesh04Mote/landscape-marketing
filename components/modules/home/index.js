import Typography from '@/components/elements/Typography'
import { setLoading } from '@/store/action/loading'
// import { ServiceListsuccess } from '@/store/action/service'
import { Button } from 'antd'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Homepage = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    let windowHeight;
    const [services, setServices] = useState()
    if (typeof window !== 'undefined') {
        windowHeight = window.innerHeight;
    } else {
    }
    const navTolistpage = (id) => {

        router.push({
            pathname: "services/list",
            query: { id: id }
        })

    }
    const navbarheight = useSelector((state) => state.navbarReducer.navbarheight)

    const fetchTwoServices = async () => {
        try {
            dispatch(setLoading(true));

            const response = await fetch("https://0cfc-2600-8803-950d-fd00-df41-9b37-b7d2-c3bc.ngrok-free.app/api/services");
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await response.json();
            setServices(data)
            dispatch(setLoading(false));

        } catch (error) {
            dispatch(setLoading(false));

        } finally {
        }
    };
    useEffect(() => {
        fetchTwoServices()
    }, [])

    console.log(services, "dada")
    return (
        <div style={{ backgroundColor: "rgb(214, 245, 214)" }}>

            <img src='./images/imagebest.jpg' style={{ width: "100%", height: windowHeight - navbarheight }} />
            <div className='twobutton'>
                {services?.map((item, index) => {
                    return (
                        <button key={index} onClick={() => navTolistpage(item.id)} className='button'>{item?.name}</button>

                    )
                })}

            </div>

        </div >

    )
}

export default Homepage