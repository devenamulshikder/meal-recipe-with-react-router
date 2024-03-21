/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useLoaderData } from "react-router-dom"


const MoreMeals = () => {
    const items = useLoaderData()
    console.log(items);
  return (
    <div>
        
<div className="grid grid-cols-3 gap-10">
    {
        items.meals.map(item=>{
            return (
              <div className="flex">
                <div className="p-4 rounded-lg border shadow-lg flex-grow">
                  <img className="rounded-md" src={item.strMealThumb} alt="" />
                  <h2 className="text-2xl font-bold">{item.strMeal}</h2>
                  <p>{item.strInstructions.slice(0,300)}</p>
                  <li>{item.strIngredient1}</li>
                  <li>{item.strIngredient2}</li>
                  <li>{item.strIngredient3}</li>
                  <li>{item.strIngredient4}</li>
                  <li>{item.strIngredient5}</li>
                  <li>{item.strIngredient6}</li>
                  <li>{item.strIngredient7}</li>
                </div>
              </div>
            );
        })
    }
</div>

    </div>
  )
}

export default MoreMeals

