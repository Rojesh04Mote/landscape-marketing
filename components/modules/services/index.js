import ServicesDescriptionModal from '@/components/elements/Modal'
import Typography from '@/components/elements/Typography'
import { Image } from 'antd'
import Card from 'antd/es/card/Card'
import React, { useState } from 'react'

const ServicesPage = () => {
    const [ismodalOpen, setIsMOdalOpen] = useState(false)

    const handleCancel = () => {
        setIsMOdalOpen(false)
    }
    const OpenModal = () => {
        setIsMOdalOpen(true)
    }

    return (
        <div style={{
            padding: 16, backgroundColor: "rgb(236, 230, 230)"
        }}>
            <Typography style={{ display: "flex", flexDirection: "row", justifyContent: "center", paddingBottom: 24 }} variant="heading22" >Our Servives </Typography>

            <div style={{ display: "grid", gridTemplateColumns: "30% 30% 30%", gap: 30 }}>
                <Card onClick={OpenModal} className='servicesCard' >
                    <img src='./images/img-1.jpg' style={{ width: "100%", height: 200, borderRadius: 8 }} />
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Typography variant="heading16" >Title </Typography>
                        <Typography variant="text14" >This is description... </Typography>
                    </div>
                </Card>
                <Card onClick={OpenModal} className='servicesCard'>
                    <img src='./images/img-2.jpg' style={{ width: "100%", height: 200, borderRadius: 8 }} />

                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Typography variant="heading16" >Title </Typography>
                        <Typography variant="text14" >This is description... </Typography>
                    </div>
                </Card>
                <Card className='servicesCard'>
                    <img src='./images/img-3.jpg' style={{ width: "100%", height: 200, borderRadius: 8 }} />
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Typography variant="heading16" >Title </Typography>
                        <Typography variant="text14" >This is description... </Typography>
                    </div>

                </Card>
                <Card className='servicesCard'>
                    <img src='./images/img-4.jpg' style={{ width: "100%", height: 200, borderRadius: 8 }} />

                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Typography variant="heading16" >Title </Typography>
                        <Typography variant="text14" >This is description... </Typography>
                    </div>
                </Card>
                <Card className='servicesCard'>
                    <img src='./images/img-5.jpg' style={{ width: "100%", height: 200, borderRadius: 8 }} />

                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Typography variant="heading16" >Title </Typography>
                        <Typography variant="text14" >This is description... </Typography>
                    </div>
                </Card>
            </div>
            <ServicesDescriptionModal isModalOpen={ismodalOpen} handleCancel={handleCancel} />
        </div>
    )
}

export default ServicesPage