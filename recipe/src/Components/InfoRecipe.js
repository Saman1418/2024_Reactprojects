import React from "react";

const InfoRecipe = ({ title, image, ingredients }) => {
    return (
        <>
            <div class="ui card">
                <div class="content">
                    <div class="header">{title}</div>
                    <div class="meta">
                        <img className="ui small circular image" src={image}></img>
                    </div>
                    <ol>
                        {ingredients.map(ingredient => {
                            return(
                            <li>{ingredient.text}</li>
                            )
                        })}
                    </ol>
                </div>
            </div>
            {/* title:{title} */}
            {/* <img className="ui small circular image" src={image}></img> */}
        </>
    )
}
export default InfoRecipe;
