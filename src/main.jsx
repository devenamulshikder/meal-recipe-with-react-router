import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Navbar/Home/Home";
import ListMeal from "./components/ListMeal/ListMeal";
import RandomMeal from "./components/RandomMeal/RandomMeal";
import MoreMeals from "./components/MoreMeals/MoreMeals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/list_meal",
        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),
        element: <ListMeal></ListMeal>,
      },
      {
        path: "/random_meal",
        element: <RandomMeal></RandomMeal>,
      },
      {
        path: "/more_meals",
        element: <MoreMeals></MoreMeals>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router}></RouterProvider>
  </>
);
