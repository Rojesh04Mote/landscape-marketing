import React from 'react';
import { Form, Input, Button, Card } from 'antd';
import { FacebookOutlined, InstagramOutlined, MessageOutlined, PhoneOutlined, TwitterOutlined, LinkedinOutlined } from '@ant-design/icons';
import Typography from '@/components/elements/Typography';
import TextArea from 'antd/es/input/TextArea';

const ContactUsPage = () => {
    const onEmail = () => {
        window.location.href = "mailto:greenbranchkllc@gmail.com";

    }
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: '24px', }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, textAlign: 'center', paddingBottom: 30 }}>
                <Typography variant="heading18">Contact Us</Typography>
                <Typography variant="text14">We're here to help and answer any questions you might have. We look forward to hearing from you!</Typography>

            </div>


            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: 30, flexWrap: "wrap" }}>


                <Card style={{ display: "flex", flexDirection: "column", gap: 16, textAlign: 'center', backgroundColor: "#2E8B57" }}>
                    <Typography style={{ color: "white" }} variant="heading16">  <a href="tel:4056763003" style={{ color: "white", textDecoration: 'none' }}>
                        405 676-3003
                    </a></Typography>
                    <img src='./images/phone-call.png' />

                </Card>

                <Card onClick={onEmail} style={{ cursor: "pointer", display: "flex", flexDirection: "column", gap: 16, textAlign: 'center', backgroundColor: "#2E8B57" }}>
                    <Typography style={{ color: "white" }} variant="heading16">greenbranchkllc@gmail.com</Typography>
                    <img src='./images/communication.png' />

                </Card>
            </div>

            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", padding: '24px', }}>

                <Form layout='horizontal' className='width' style={{ border: "2px solid #2E8B57", padding: 24, borderRadius: 8 }} name="Contact form">
                    <Typography variant="heading16">Contact form</Typography>

                    <Form.Item name="name" label="Name" style={{ paddingBottom: 12 }}>
                        <Input style={{ border: "1px solid #2E8B57", }} placeholder='Enter your name' />
                    </Form.Item>
                    <Form.Item name="email" label="Email" style={{ paddingBottom: 12 }}>
                        <Input style={{ border: "1px solid #2E8B57", }} placeholder='Enter your email' />
                    </Form.Item>
                    <Form.Item name="phone_number" label="Phone number" style={{ paddingBottom: 12 }}>
                        <Input style={{ border: "1px solid #2E8B57", }} placeholder='Enter your phone number' />
                    </Form.Item>
                    <Form.Item name="msg" label="Your message" style={{ paddingBottom: 12 }}>
                        <TextArea style={{ border: "1px solid #2E8B57", }} placeholder='Your message for us' rows={2} />
                    </Form.Item>
                    <Form.Item name="services_required" label="Services Required" style={{ paddingBottom: 12 }}>
                        <TextArea style={{ border: "1px solid #2E8B57", }} placeholder='Services that you need' rows={2} />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button style={{ backgroundColor: "#2E8B57", color: "white" }} type="secondary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>

            </div>

            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: 'center', marginTop: '40px', gap: 8 }}>
                <Typography variant="heading18">Connect with us</Typography>
                <Typography variant="text14">Follow us on social media:</Typography>

                <div style={{ display: "flex", flexDirection: "row", textAlign: 'center', justifyContent: "center", gap: 30 }}>
                    <a href="https://www.facebook.com/alfredo" style={{ margin: '0 10px' }}><FacebookOutlined style={{ fontSize: '24px' }} /></a>
                    <a href="https://www.instagram.com/alfredo" style={{ margin: '0 10px' }}><InstagramOutlined style={{ fontSize: '24px' }} /></a>
                    <a href="https://www.twitter.com/alfredo" style={{ margin: '0 10px' }}><TwitterOutlined style={{ fontSize: '24px' }} /></a>
                    <a href="https://www.linkedin.com/in/alfredo" style={{ margin: '0 10px' }}><LinkedinOutlined style={{ fontSize: '24px' }} /></a>
                </div>
            </div>
        </div>
    )
}

export default ContactUsPage