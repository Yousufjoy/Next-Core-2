"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Meals() {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);

  const loadData = async () => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    );
    const data = await res.json();
    setMeals(data.meals);
  };

  console.log(meals)

  const handler = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    loadData();
  }, [search]);

  return (
    <div>
      <div className=" mt-12">
        <input
          onChange={handler}
          className="p-4 border outline-none"
          type="text"
          placeholder="search meals"
        />
        <button className=" bg-red-200">Search</button>
      </div>
      <div className=" mt12 grid grid-cols-3 gap-12">
        {meals?.map((meal) => (
          <div className=" border-2 p-4">
            <Image src={meal.strMealThumb} width={500} height={500}></Image>
            <h6>{meal.strMeal}</h6>
            <p>{meal.strInstructions}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Meals;
