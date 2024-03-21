import { NavLink } from "react-router-dom"



const Navbar = () => {

  return (
    <div className="flex items-center justify-between mt-8 bg-slate-300 p-10 rounded-2xl">
        <div>
            <h2 className="text-3xl font-bold">Meal Details And Category</h2>
        </div>
      <div className="flex gap-10 font-semibold text-xl">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/list_meal">List Meal</NavLink>
        <NavLink to="/random_meal">Random Meal</NavLink>
        <NavLink to="/more_meals">More Meals</NavLink>
      </div>
    </div>
  );
}

export default Navbar