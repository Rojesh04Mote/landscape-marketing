import React from 'react';

const Typography = ({ variant, children, style }) => {
    const baseStyle = {
        fontFamily: 'sans-serif',
        margin: 0,
    };

    const variantStyles = {
        text14: { fontSize: "14px", fontWeight: 'normal' },
        text16: { fontSize: "16px", fontWeight: 'normal' },
        text18: { fontSize: "18px", fontWeight: 'normal' },
        text20: { fontSize: "20px", fontWeight: 'normal' },
        text22: { fontSize: "22px", fontWeight: 'normal' },
        heading10: { fontSize: "10px", fontWeight: 'bold' },
        heading12: { fontSize: "12px", fontWeight: 'bold' },
        heading14: { fontSize: "14px", fontWeight: 'bold' },
        heading16: { fontSize: "16px", fontWeight: 'bold' },
        heading18: { fontSize: "18px", fontWeight: 'bold' },
        heading20: { fontSize: "20px", fontWeight: 'bold' },
        heading22: { fontSize: "22px", fontWeight: 'bold' },
        body1: { fontSize: '1rem', fontWeight: 'normal' },
        body2: { fontSize: '0.875rem', fontWeight: 'normal' },
        caption: { fontSize: '0.75rem', fontWeight: 'normal' },
    };

    const combinedStyle = { ...baseStyle, ...variantStyles[variant], ...style };

    switch (variant) {
        case 'text14':
            return <p style={combinedStyle}>{children}</p>;
        case 'text16':
            return <p style={combinedStyle}>{children}</p>; case 'text18':
            return <p style={combinedStyle}>{children}</p>; case 'text20':
            return <p style={combinedStyle}>{children}</p>; case 'text22':
            return <p style={combinedStyle}>{children}</p>; case 'heading10':
            return <p style={combinedStyle}>{children}</p>; case 'heading12':
            return <p style={combinedStyle}>{children}</p>; case 'heading14':
            return <p style={combinedStyle}>{children}</p>; case 'heading16':
            return <p style={combinedStyle}>{children}</p>; case 'heading18':
            return <p style={combinedStyle}>{children}</p>; case 'heading20':
            return <p style={combinedStyle}>{children}</p>; case 'heading22':
            return <p style={combinedStyle}>{children}</p>;
        case 'body1':
            return <p style={combinedStyle}>{children}</p>;
        case 'body2':
            return <p style={combinedStyle}>{children}</p>;
        case 'caption':
            return <span style={combinedStyle}>{children}</span>;
        default:
            return <p style={combinedStyle}>{children}</p>;
    }
};

export default Typography;
