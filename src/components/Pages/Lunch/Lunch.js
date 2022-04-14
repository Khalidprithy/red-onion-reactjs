import React from 'react';
import useMeals from '../../../hooks/useMeals';
import LunchCard from './LunchCard/LunchCard';

const Lunch = () => {

    const [meals, setMeals] = useMeals()

    return (
        <div>
            <h2>Lunch</h2>
            {
                meals.map(meal => <LunchCard
                    key={meal.id}
                    meal={meal}
                ></LunchCard>)
            }
        </div>
    );
};

export default Lunch;