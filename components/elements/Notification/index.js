import { notification } from 'antd';

const Notification = (type, message, description) => {
    notification[type]({
        message: <div style={{ paddingLeft: 24, textAlign: "center" }}>{message}</div>,
        description: <div style={{ textAlign: 'center' }}>{description}</div>,
        duration: 3,
        className: 'custom-notification', // Optional: use className for more specific styling

    });
};

export default Notification;
