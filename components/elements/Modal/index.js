import { Card, Modal } from 'antd'
import React from 'react'
import Typography from '../Typography'

const ServicesDescriptionModal = ({ isModalOpen, handleCancel }) => {
    return (
        <>
            <Modal style={{ display: "flex", flexDirection: "column", position: "relative", left: "30%", justifyContent: "center", alignItems: "center", }}
                width={"50%"}
                title="Details"
                open={isModalOpen}
                onCancel={handleCancel}
                footer={false}
            >
                <Card style={{ display: "flex", flexDirection: "column", gap: 8 }} >
                    <img src='./images/img-1.jpg' style={{ width: "100%", height: 200, borderRadius: 8 }} />
                    <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "center" }}>
                        <Typography variant="heading16" >Title </Typography>
                        <Typography style={{ color: "gray", width: "80%" }} variant="text14" >This is more  description...loren epseijbsdj abjdasdjbasdasdusdy fsdfhvsduyfvsdvshfvjs dfbsdbfsfishfsifisdfhskjfjsdfjsjfsbjbhjf sddfbhjsdhbjsdjfshd </Typography>
                    </div>
                </Card>
            </Modal>
        </>
    )
}

export default ServicesDescriptionModal