import React from 'react';


const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div>
            <h1>{title}</h1>
            <p>Amount of calories:{calories}</p>
            <p>Required ingredients: 
                <ol>
                    {ingredients.map(ingredient => (
                        <li>{ingredient.text}</li>
                    ))}
                </ol>
            </p>
            <img src={image} alt="" />
        </div>
    );
}

export default Recipe;