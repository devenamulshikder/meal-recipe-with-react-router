/* eslint-disable react/jsx-no-undef */
import { useLoaderData } from "react-router-dom"
import ListMeals from "../ListMeals/ListMeals";


const ListMeal = () => {

    const items = useLoaderData();
    // console.log(items);

  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        {items.categories.map((item, index) => (
          <ListMeals key={index} item={item}></ListMeals>
        ))}
      </div>
    </div>
  );
}

export default ListMeal