import React from 'react';
import './MealCard.css'

const MealCard = ({ meal }) => {
    const { image, price, mealName } = meal
    return (
        <div className="card text-center meal-card">
            <img src={image} className="card-img-top p-4" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{mealName}</h5>
                <p className="card-text">This is a longer card with supporting.</p>
            </div>
            <p>${price}</p>
        </div>
    );
};

export default MealCard;