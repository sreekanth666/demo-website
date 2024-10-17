import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

interface ButtonProps {
    label: string;
    onClick?: () => void;
    style: any;
}

const Button: FC<ButtonProps> = ({ style, label, onClick }) => {
    return (
        <React.Fragment>
            <button style={style} onClick={onClick}>{label}</button>
        </React.Fragment>
    );
};

export default Button;