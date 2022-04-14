import React from 'react';

const LunchCard = ({ meal }) => {
    const { mealName, price } = meal;
    return (
        <div>
            <h2>name: {mealName}</h2>
            <p>Price: {price}</p>

        </div>
    );
};

export default LunchCard;