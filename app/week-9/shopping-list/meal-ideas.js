"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  // Function to fetch meal ideas
  const fetchMealIdeas = async (ingredient) => {
    if (!ingredient) return;
    
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await response.json();
      setMeals(data.meals || []); // Ensure meals is an array, or set it as empty
    } catch (error) {
      console.error("Error fetching meal ideas:", error);
      setMeals([]);
    }
  };

  // Load meal ideas when ingredient changes
  useEffect(() => {
    fetchMealIdeas(ingredient);
  }, [ingredient]);

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Meal Ideas for {ingredient || "..."}</h2>

      {meals.length === 0 ? (
        <p className="text-gray-400">No meal ideas found.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {meals.map((meal) => (
            <li key={meal.idMeal} className="bg-gray-800 p-4 rounded-lg shadow-md">
              <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-32 object-cover rounded" />
              <p className="mt-2 text-center">{meal.strMeal}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
