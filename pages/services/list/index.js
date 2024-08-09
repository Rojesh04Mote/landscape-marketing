import ServicesDescriptionModal from '@/components/elements/Modal'
import Typography from '@/components/elements/Typography'
import { Button, Card } from 'antd'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { ArrowLeftOutlined } from '@ant-design/icons';

const ListofServices = () => {
    const [ismodalOpen, setIsMOdalOpen] = useState(false)
    const handleCancel = () => {
        setIsMOdalOpen(false)
    }
    const OpenModal = () => {
        setIsMOdalOpen(true)
    }
    const router = useRouter()
    const name = router?.query?.name
    const handleBack = () => {
        router.back()
    }
    return (
        <>
            <div style={{
                padding: 16, backgroundColor: "rgb(214, 245, 214)"
            }}>
                <div style={{ display: "flex", flexDirection: "row", paddingBottom: 24, gap: 16, alignItems: "center" }}>

                    <Button type="text" icon={<ArrowLeftOutlined />} onClick={handleBack}>

                    </Button>
                    <Typography variant="heading18" >List of services of {name}</Typography>
                </div>

                <div className='grid3'>
                    <div onClick={OpenModal} className='servicesCard1' >
                        <img src='./../images/img-1.jpg' style={{ width: "100%", height: 300, borderRadius: 8 }} />
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Typography variant="heading16" >Title 1 </Typography>
                        </div>
                    </div>
                    <div onClick={OpenModal} className='servicesCard1' >
                        <img src='./../images/img-2.jpg' style={{ width: "100%", height: 300, borderRadius: 8 }} />

                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Typography variant="heading16" >Title 2</Typography>
                        </div>
                    </div>
                    <div className='servicesCard1'>
                        <img src='./../images/img-3.jpg' style={{ width: "100%", height: 300, borderRadius: 8 }} />
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Typography variant="heading16" >Title 3 </Typography>
                        </div>

                    </div>
                    <div className='servicesCard1'>
                        <img src='./../images/img-4.jpg' style={{ width: "100%", height: 300, borderRadius: 8 }} />

                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Typography variant="heading16" >Title 4</Typography>
                        </div>
                    </div>
                    <div className='servicesCard1'>
                        <img src='./../images/img-5.jpg' style={{ width: "100%", height: 300, borderRadius: 8 }} />

                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Typography variant="heading16" >Title 5</Typography>
                        </div>
                    </div>
                </div>
                <ServicesDescriptionModal isModalOpen={ismodalOpen} handleCancel={handleCancel} />
            </div>
        </>
    )
}

export default ListofServices