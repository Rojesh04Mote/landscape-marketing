import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Card } from 'antd';
import { FacebookOutlined, InstagramOutlined, MessageOutlined, PhoneOutlined, TwitterOutlined, LinkedinOutlined } from '@ant-design/icons';
import Typography from '@/components/elements/Typography';
import TextArea from 'antd/es/input/TextArea';
import { useDispatch } from 'react-redux';
import { setLoading } from '@/store/action/loading';
import SuccessNotification from "@/components/elements/Notification/index"
import ErrorNotifi from "@/components/elements/Notification/index"


const ContactUsPage = () => {
    const [contactList, setContactList] = useState()
    const [form] = Form.useForm();


    const dispatch = useDispatch()
    const fetchcontactlist = async () => {
        try {
            dispatch(setLoading(true));

            const response = await fetch("https://0cfc-2600-8803-950d-fd00-df41-9b37-b7d2-c3bc.ngrok-free.app/api/user/list");
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await response.json();
            setContactList(data)
            dispatch(setLoading(false));

        } catch (error) {
            dispatch(setLoading(false));

        } finally {
        }
    };
    useEffect(() => {
        fetchcontactlist()
    }, [])
    const ContactPostRequest = async (value) => {
        try {
            dispatch(setLoading(true));

            const response = await fetch("https://0cfc-2600-8803-950d-fd00-df41-9b37-b7d2-c3bc.ngrok-free.app/api/contacts/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: value?.username,
                    email: value?.email,
                    contact_number: value?.contact_number,
                    service_required: value?.service_required
                })
            });

            dispatch(setLoading(false));
            form.resetFields()
            if (response.ok) {
                SuccessNotification("success", "Success", "Your information has been submitted successfully")

            } else {
                ErrorNotifi("error", "Error", "There was an issue submitting your information.")

            }
        } catch (error) {
            console.log("error", error);

        }
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: '24px', }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, textAlign: 'center', paddingBottom: 30 }}>
                <Typography variant="heading18">Contact Us</Typography>
                <Typography variant="text14">We're here to help and answer any questions you might have. We look forward to hearing from you!</Typography>

            </div>

            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
                {contactList?.map((item, index) => {
                    return (


                        <Card key={index} style={{ display: "flex", flexDirection: "column", gap: 16, backgroundColor: "#2E8B57" }}>
                            <div style={{ display: "flex", flexDirection: "row", gap: 12, paddingBottom: 8, flexWrap: "wrap", alignItems: "center" }}>
                                {item?.image ? (
                                    <img src={item.image} style={{ width: 100, height: 100, borderRadius: '50%' }} alt="Profile" />
                                ) : (
                                    <div
                                        style={{
                                            width: 100,
                                            height: 100,
                                            borderRadius: '50%',
                                            backgroundColor: 'white',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: 36,
                                            border: "1px solid white",
                                            color: '#2E8B57',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        {item?.username?.charAt(0).toUpperCase()}
                                    </div>
                                )}
                                <Typography style={{ color: "white" }} variant="heading18">{item?.username}</Typography>

                            </div>
                            {item?.contact_number && <div
                                onClick={() => window.location.href = `tel:${item?.contact_number}`}

                                style={{ cursor: "pointer", display: "flex", flexDirection: "row", gap: 12, paddingBottom: 4, flexWrap: "wrap" }}>
                                <img src='./images/phone-call.png' />
                                <Typography style={{ color: "white", }} variant="heading16">
                                    {item?.contact_number}
                                </Typography>
                            </div>}
                            {item?.email && <div
                                onClick={() => window.location.href = `mailto:${item?.email}`}

                                style={{ cursor: "pointer", display: "flex", flexDirection: "row", gap: 12, flexWrap: "wrap" }}>
                                <img src='./images/communication.png' />
                                <Typography style={{ color: "white" }} variant="heading16">{item?.email}</Typography>
                            </div>
                            }
                        </Card>


                    )
                })}
            </div>


            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", padding: '24px', }}>

                <Form form={form}
                    id="form"

                    layout='horizontal' className='width' style={{ border: "2px solid #2E8B57", padding: 24, borderRadius: 8 }} name="Contact form">
                    <Typography variant="heading16">Contact form</Typography>

                    <Form.Item name="username" label="Name" style={{ paddingBottom: 12 }}>
                        <Input style={{ border: "1px solid #2E8B57", }} placeholder='Enter your name' />
                    </Form.Item>
                    <Form.Item

                        name="email" label="Email" style={{ paddingBottom: 12 }}
                        rules={[
                            {
                                type: 'email',
                                message: 'Please enter a valid email address!',
                            },
                            {
                                required: true,
                                message: 'Email is required!',
                            },
                        ]}

                    >
                        <Input style={{ border: "1px solid #2E8B57", }} placeholder='Enter your email' />
                    </Form.Item>
                    <Form.Item name="contact_number" label="Phone number" style={{ paddingBottom: 12 }}
                        rules={[
                            {
                                required: true,
                                message: 'Phone number is required!',
                            },
                            {
                                pattern: new RegExp(/^[0-9]{5,15}$/),
                                message: 'Please enter a valid phone number!',
                            },
                        ]}
                    >
                        <Input style={{ border: "1px solid #2E8B57", }} placeholder='Enter your phone number' />
                    </Form.Item>

                    <Form.Item name="service_required" label="Services Required" style={{ paddingBottom: 12 }}>
                        <TextArea style={{ border: "1px solid #2E8B57", }} placeholder='Services that you need' rows={2} />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button onClick={() => ContactPostRequest(form.getFieldsValue())} style={{ backgroundColor: "#2E8B57", color: "white" }} type="secondary"
                        > Submit
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