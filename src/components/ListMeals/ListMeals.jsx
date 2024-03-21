/* eslint-disable react/prop-types */


const ListMeals = ({item}) => {
  return (
    <div className="border flex flex-col justify-center p-4 rounded-lg shadow-lg">
      <img src={item.strCategoryThumb} alt="" />
      <div className="flex-grow space-y-4 mt-4">
        <h2 className="text-center text-2xl font-bold mb-2">
         {item.strCategory}
        </h2>
        <p>{item.strCategoryDescription}</p>
      </div>
    </div>
  );
}

export default ListMeals;