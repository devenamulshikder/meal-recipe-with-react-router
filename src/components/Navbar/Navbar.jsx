import { NavLink } from "react-router-dom"



const Navbar = () => {

  return (
    <div className="flex items-center justify-between mt-8">
        <div>
            <h2 className="text-3xl font-bold">Meal Details And Category</h2>
        </div>
      <div className="flex gap-10 font-semibold text-xl">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/meal"> Meal</NavLink>
        <NavLink to="/about">More Meal</NavLink>
      </div>
    </div>
  );
}

export default Navbar