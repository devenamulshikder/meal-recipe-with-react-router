/* eslint-disable react/jsx-no-undef */
import { useLoaderData } from "react-router-dom"
import RandomMeal from "../RandomMeal/RandomMeal";


const ListMeal = () => {

    const items = useLoaderData();
    console.log(items);

  return (
    <div>
      <h3>Meal list: {items.categories.length}</h3>
      <div className="grid grid-cols-3 gap-5">
        {items.categories.map((item, index) => (
          <RandomMeal key={index} item={item}></RandomMeal>
        ))}
      </div>
    </div>
  );
}

export default ListMeal