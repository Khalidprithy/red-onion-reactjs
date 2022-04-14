import React from 'react';
import useMeals from '../../../hooks/useMeals';
import MealCard from '../MealCard/MealCard';

const Dinner = () => {
    const [meals, setMeals] = useMeals()
    return (
        <div className='container'>
            <div className='row row-cols-1 row-cols-md-3 g-5'>
                {
                    meals.slice(12, 18).map(meal => <MealCard
                        key={meal.id}
                        meal={meal}
                    ></MealCard>)
                }
            </div>
        </div>
    );
};

export default Dinner;