import React, { useEffect, useState } from "react";
import InfoRecipe from "./Components/InfoRecipe";


const App = () => {
    const App_id = "c56f2aa2"
    const App_key = "d27df2c80713491af9f437656ef153d8"
    const [recipes, setRecipes] = useState([])
    const [query, setQuery] = useState("cake")
    const [search, setSearch] = useState("")

    const Submit = (e) => {
        e.preventDefault()
        setQuery(search)
    }


    const valueChange = (e) => {
        setSearch(e.target.value)

    }

    const RecipeAPI = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_id}&app_key=${App_key}`)
        const data = await response.json()
        setRecipes(data.hits)
        console.log(recipes)
    }



    useEffect(() => {
        RecipeAPI()
    }, [query])



    return (
        <div>

            <h1>Saman Aggarwal</h1>
            <form onSubmit={Submit}>
                <input type="text" value={search} onChange={valueChange}></input>
                <button type="submit">Submit</button>
            </form>

            <div className="ui grid">
                {recipes.map((value) => {
                    return (
                        <>
                            <div className="four wide column">
                                <InfoRecipe
                                    key={value.recipe.label}
                                    title={value.recipe.label}
                                    image={value.recipe.image}
                                    ingredients={value.recipe.ingredients}
                                >

                                </InfoRecipe>
                            </div>

                            <br></br>
                        </>
                    )
                })}
            </div>


        </div>
    )
}
export default App;