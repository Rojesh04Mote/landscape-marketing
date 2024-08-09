import ServicesDescriptionModal from '@/components/elements/Modal'
import Typography from '@/components/elements/Typography'
import { Image } from 'antd'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const ServicesPage = () => {
    const router = useRouter()
    const [ismodalOpen, setIsMOdalOpen] = useState(false)
    const handleCancel = () => {
        setIsMOdalOpen(false)
    }
    const OpenModal = () => {
        setIsMOdalOpen(true)
    }

    //pale mint bg = "#E0F8E0
    return (
        <>
            <div style={{
                padding: 24, backgroundColor: "rgb(214, 245, 214)"
            }}>

                <Typography style={{ display: "flex", flexDirection: "row", justifyContent: "center", }} variant="heading22" >Our Services </Typography>

                <Typography style={{ display: "flex", flexDirection: "row", justifyContent: "center", paddingBottom: 24 }} variant="text16" >Transforming Spaces, Elevating Lifestyles </Typography>

                <div className='grid4'>
                    <div onClick={OpenModal} className='servicesCard' >
                        <img src='./images/imag1.jpg' style={{ width: "100%", height: 300, borderRadius: 16 }} />
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Typography variant="heading16" >Lawn mowing  </Typography>
                        </div>
                    </div>
                    <div onClick={OpenModal} className='servicesCard' >
                        <img src='./images/imag4.jpeg' style={{ width: "100%", height: 300, borderRadius: 16 }} />

                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Typography variant="heading16" >Mulch </Typography>
                        </div>
                    </div>

                    <div onClick={OpenModal} className='servicesCard' >
                        <img src='./images/imag1.jpg' style={{ width: "100%", height: 300, borderRadius: 16 }} />

                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Typography variant="heading16" >Flower beds </Typography>
                        </div>
                    </div>
                    <div onClick={OpenModal} className='servicesCard' >
                        <img src='./images/imag4.jpeg' style={{ width: "100%", height: 300, borderRadius: 16 }} />

                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Typography variant="heading16" >French drain </Typography>
                        </div>
                    </div>
                    <div onClick={OpenModal} className='servicesCard' >
                        <img src='./images/imag1.jpg' style={{ width: "100%", height: 300, borderRadius: 16 }} />

                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Typography variant="heading16" >Sprinker System </Typography>
                        </div>
                    </div>
                    <div onClick={OpenModal} className='servicesCard' >
                        <img src='./images/imag4.jpeg' style={{ width: "100%", height: 300, borderRadius: 16 }} />

                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Typography variant="heading16" >Pavers </Typography>
                        </div>
                    </div>
                    <div onClick={OpenModal} className='servicesCard' >
                        <img src='./images/imag4.jpeg' style={{ width: "100%", height: 300, borderRadius: 16 }} />

                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Typography variant="heading16" >Exterior Repair </Typography>
                        </div>
                    </div>
                </div>
            </div>
            <ServicesDescriptionModal isModalOpen={ismodalOpen} handleCancel={handleCancel} />
        </>
    )
}

export default ServicesPage