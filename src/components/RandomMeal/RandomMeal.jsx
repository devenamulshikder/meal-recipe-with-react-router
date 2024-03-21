/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useLoaderData } from "react-router-dom";

const RandomMeal = () => {
  const items = useLoaderData();
  console.log(items);
  return (
    <div>
      <div>
        {items.meals.map((item) => {
          return (
            <div className="flex gap-5 border shadow-xl p-4 rounded-lg">
              <div className="space-y-4">
                <img src={item.strMealThumb} alt="" />
                <div className="flex justify-between">
                  <p className="font-semibold">{item.strCategory}</p>
                  <p className="font-semibold">{item.strArea}</p>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">{item.strMeal}</h2>
                <p>{item.strInstructions.slice(0, 600)}</p>
                <div></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RandomMeal;
