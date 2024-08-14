import { Card, Empty, Modal } from 'antd'
import React, { useEffect } from 'react'
import Typography from '../Typography'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ServicesDescriptionModal = ({ isModalOpen, handleCancel, serviceData }) => {

    useEffect(() => {
    }, [isModalOpen, serviceData
    ])
    return (
        <>
            <Modal style={{ position: "relative", left: "10%", }}
                width={"80%"}
                title="Details"
                open={isModalOpen}
                onCancel={handleCancel}
                footer={false}
            >
                <div className='modal'>
                    <div >
                        <Carousel
                            showArrows={false}
                            showThumbs={false} infiniteLoop autoPlay>

                            {serviceData && serviceData[0]?.services_list_pic?.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <img src={item.images} style={{ height: 400, borderRadius: 8 }} />
                                    </div>
                                );
                            }
                            )}


                        </Carousel>
                    </div>
                    <div style={{ overflow: "scroll" }}>
                        <Typography style={{ textAlign: "center", paddingBottom: 16 }} variant="heading16">Description
                        </Typography>
                        <Typography style={{ color: "gray", width: "80%" }} variant="text14">
                            {serviceData ? serviceData[0]?.description : ""}
                        </Typography>
                    </div>

                </div>
            </Modal>
        </>
    )
}

export default ServicesDescriptionModal