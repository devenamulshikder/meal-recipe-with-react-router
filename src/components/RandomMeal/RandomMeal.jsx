/* eslint-disable react/prop-types */


const RandomMeal = ({item}) => {
  return (
    <div className="border flex flex-col justify-center p-4 rounded-lg shadow-lg">
      <img src={item.strCategoryThumb} alt="" />
      <div>
        <h2 className="text-center text-xl font-semibold">Recipe Name: {item.strCategory}</h2>
      </div>
    </div>
  );
}

export default RandomMeal