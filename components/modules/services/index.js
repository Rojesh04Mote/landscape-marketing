import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import ServicesDescriptionModal from '@/components/elements/Modal'
import Typography from '@/components/elements/Typography'
import { setLoading } from '@/store/action/loading'
import { useRouter } from 'next/router'


const ServicesPage = () => {
    const router = useRouter()
    const [ismodalOpen, setIsMOdalOpen] = useState(false)
    const [allservices, setAllServices] = useState()
    const [ids, setId] = useState("")
    const dispatch = useDispatch()
    const handleCancel = () => {
        setIsMOdalOpen(false)
    }
    const OpenModal = (id) => {
        setId(id)

        setIsMOdalOpen(true)
    }
    const fetchAllServices = async () => {
        try {
            dispatch(setLoading(true));

            const response = await fetch("https://5678-2600-8803-950d-fd00-21ea-836-76f9-9c66.ngrok-free.app/api/services/all");
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await response.json();
            setAllServices(data)
            dispatch(setLoading(false));

        } catch (error) {
            dispatch(setLoading(false));

        } finally {
        }
    };
    useEffect(() => {
        fetchAllServices()
    }, [])
    //pale mint bg = "#E0F8E0
    const data = allservices?.filter(item => item.id === ids);

    return (
        <>
            <div style={{
                padding: 24, backgroundColor: "rgb(214, 245, 214)"
            }}>

                <Typography style={{ display: "flex", flexDirection: "row", justifyContent: "center", }} variant="heading22" >Our Services </Typography>

                <Typography style={{ display: "flex", flexDirection: "row", justifyContent: "center", paddingBottom: 24 }} variant="text16" >Transforming Spaces, Elevating Lifestyles </Typography>

                <div className='grid4'>
                    {allservices?.map((item, index) => {
                        return (
                            <div key={index} onClick={() => OpenModal(item.id)} className='servicesCard' >
                                <img src={item.services_list_pic[0]?.images} style={{ width: "100%", height: 300, borderRadius: 16 }} />
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 8 }}>
                                    <Typography variant="heading16" >{item.name} </Typography>
                                </div>
                            </div>
                        )
                    })}


                </div>
            </div>
            <ServicesDescriptionModal isModalOpen={ismodalOpen} handleCancel={handleCancel} serviceData={data} />
        </>
    )
}

export default ServicesPage