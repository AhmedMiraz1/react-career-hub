import { useEffect, useState } from "react";
import Category from "../Category/Category";

const CategoryList = () => {
  const [categoryCart, setCategoryCart] = useState([]);
  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategoryCart(data));
  }, []);
  return (
    <div>
      <h1 className="text-2xl lg:text-5xl text-center font-semibold lg:font-extrabold text-[#1A1919]">
        Job Category List : {categoryCart.length}{" "}
      </h1>
      <p className="text-center text-[#757575] font-medium mt-5">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="flex flex-col lg:flex-row gap-6 justify-between mt-8 mb-16 lg:mb-32">
        {categoryCart.map((category) => (
          <Category key={category.id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
