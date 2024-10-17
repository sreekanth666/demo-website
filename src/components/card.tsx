import React, { FC } from 'react';
import './style.css'

interface CardProps {

}

const Card: FC<CardProps> = ({ }) => {
    return (
        <React.Fragment>
            <div>
                <div className='img-container'><img src="https://c8.alamy.com/comp/C6EWGW/times-square-C6EWGW.jpg" alt="" /></div>
                <h2>Heading</h2>
                <p>Description</p>
            </div>
        </React.Fragment>
    );
};

export default Card;