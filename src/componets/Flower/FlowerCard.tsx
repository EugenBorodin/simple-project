import React from 'react';
import Flower from '../../types/Flower';

interface FlowerProps {
    flower: Flower

}

function FlowerCard({ flower }: FlowerProps): JSX.Element {
    const {
         color, title, family, price
    } = flower;

    return (
        <div>
            <h5>Flower</h5>
            <p style={{ backgroundColor: color }}>Color: {color}</p>
            <p>Title: {title}</p>
            <p>Family: {family}</p>
            <p>Price: {price}</p>
        </div>
    );
}

export default FlowerCard;
