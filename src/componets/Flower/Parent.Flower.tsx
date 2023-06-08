import React from 'react';
import Flower from '../../types/Flower';
import FlowerCard from './FlowerCard';

function ParentFlower(): JSX.Element {
const rose: Flower = {
    color: 'red',
    title: 'red rose',
    family: 'some family',
    price: 20
};

const sunFlower: Flower = {
    color: 'Yellow',
    title: 'sun flower',
    family: 'some family of family',
    price: 2
};
    return (
        <div>
            <FlowerCard flower={rose} />
            <FlowerCard flower={sunFlower} />
        </div>
    );
}

export default ParentFlower;
