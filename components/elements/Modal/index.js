import { Card, Modal } from 'antd'
import React from 'react'
import Typography from '../Typography'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ServicesDescriptionModal = ({ isModalOpen, handleCancel }) => {

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
                        <Carousel showThumbs={false} infiniteLoop autoPlay>
                            <div>
                                <img src='./images/img-1.jpg' style={{ height: 400 }} alt="Slide 1" />
                            </div>
                            <div>
                                <img src='./images/img-2.jpg' style={{ height: 400 }} alt="Slide 2" />
                            </div>
                            <div>
                                <img src='./images/img-3.jpg' style={{ height: 400 }} alt="Slide 3" />
                            </div>
                        </Carousel>
                    </div>
                    <div style={{ overflow: "scroll" }}>

                        <Typography style={{ color: "gray", width: "80%" }} variant="text14">
                            This is more description...loren epseijbsdj abjdasdjbasdasdusdy fsdfhvsduyfvsdvshfvjs dfbsdbfsfishfsifisdfhskjfjsdfjsjfsbjbhjf sddfbhjsdhbjsdjfshd
                            This is more description...loren epseijbsdj abjdasdjbasdasdusdy fsdfhvsduyfvsdvshfvjs dfbsdbfsfishfsifisdfhskjfjsdfjsjfsbjbhjf sddfbhjsdhbjsdjfshd
                            This is more description...loren epseijbsdj abjdasdjbasdasdusdy fsdfhvsduyfvsdvshfvjs dfbsdbfsfishfsifisdfhskjfjsdfjsjfsbjbhjf sddfbhjsdhbjsdjfshd
                            This is more description...loren epseijbsdj abjdasdjbasdasdusdy fsdfhvsduyfvsdvshfvjs dfbsdbfsfishfsifisdfhskjfjsdfjsjfsbjbhjf sddfbhjsdhbjsdjfshd
                            This is more description...loren epseijbsdj abjdasdjbasdasdusdy fsdfhvsduyfvsdvshfvjs dfbsdbfsfishfsifisdfhskjfjsdfjsjfsbjbhjf sddfbhjsdhbjsdjfshd
                            This is more description...loren epseijbsdj abjdasdjbasdasdusdy fsdfhvsduyfvsdvshfvjs dfbsdbfsfishfsifisdfhskjfjsdfjsjfsbjbhjf sddfbhjsdhbjsdjfshd
                            This is more description...loren epseijbsdj abjdasdjbasdasdusdy fsdfhvsduyfvsdvshfvjs dfbsdbfsfishfsifisdfhskjfjsdfjsjfsbjbhjf sddfbhjsdhbjsdjfshd
                            This is more description...loren epseijbsdj abjdasdjbasdasdusdy fsdfhvsduyfvsdvshfvjs dfbsdbfsfishfsifisdfhskjfjsdfjsjfsbjbhjf sddfbhjsdhbjsdjfshd
                            This is more description...loren epseijbsdj abjdasdjbasdasdusdy fsdfhvsduyfvsdvshfvjs dfbsdbfsfishfsifisdfhskjfjsdfjsjfsbjbhjf sddfbhjsdhbjsdjfshd
                            This is more description...loren epseijbsdj abjdasdjbasdasdusdy fsdfhvsduyfvsdvshfvjs dfbsdbfsfishfsifisdfhskjfjsdfjsjfsbjbhjf sddfbhjsdhbjsdjfshd
                            This is more description...loren epseijbsdj abjdasdjbasdasdusdy fsdfhvsduyfvsdvshfvjs dfbsdbfsfishfsifisdfhskjfjsdfjsjfsbjbhjf sddfbhjsdhbjsdjfshd
                            This is more description...loren epseijbsdj abjdasdjbasdasdusdy fsdfhvsduyfvsdvshfvjs dfbsdbfsfishfsifisdfhskjfjsdfjsjfsbjbhjf sddfbhjsdhbjsdjfshd
                            This is more description...loren epseijbsdj abjdasdjbasdasdusdy fsdfhvsduyfvsdvshfvjs dfbsdbfsfishfsifisdfhskjfjsdfjsjfsbjbhjf sddfbhjsdhbjsdjfshd
                            This is more description...loren epseijbsdj abjdasdjbasdasdusdy fsdfhvsduyfvsdvshfvjs dfbsdbfsfishfsifisdfhskjfjsdfjsjfsbjbhjf sddfbhjsdhbjsdjfshd

                        </Typography>
                    </div>

                </div>
            </Modal>
        </>
    )
}

export default ServicesDescriptionModal