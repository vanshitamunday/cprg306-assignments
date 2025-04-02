"use client";
import react, {useState, useEffect} from "react";

async function fetchMealIdeas(ingredient) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals || []; 
    } catch (error) {
        console.error('Error fetching meal ideas:', error);
        return [];
    }
};

async function fetchMealDetails(mealId) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
        const data = await response.json();
        return data.meals ? data.meals[0] : null;
    } catch (error) {
        console.error('Error fetching meal details:', error);
        return null;
    }
}

function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);
    const [mealIngredients, setMealIngredients] = useState({});
    const [shownMeals, setShownMeals] = useState({});
    const [paragraphText, setParagraphText] = useState("Select an ingredient to get ideas for meals!");

    const loadMealIdeas = async () => {
        if(ingredient) {
            let searchIng = ""
            if(ingredient.includes('-')) {
                const properCheck = ingredient.split('-');
                searchIng = properCheck[0];
            } else {
                searchIng = ingredient;
            }
            const mealIdeas = await fetchMealIdeas(searchIng);
            setMeals(mealIdeas);
            setMealIngredients({});
            setShownMeals({});
            if(mealIdeas.length > 0) {
                setParagraphText(`Meal Ideas using ${ingredient}`);
            } else {
                setParagraphText(`No ideas for ${ingredient}, Sorry!`);
            }
        } else {
            setMeals([]);
            setMealIngredients({});
            setShownMeals({});
            setParagraphText("Select an ingredient to get ideas for meals!");
        }
    };

    const showMealsIng = async (mealId) => {
        setShownMeals((prev) => ({...prev, [mealId]: !prev[mealId],}));
        if(!mealIngredients[mealId]) {
            const details = await fetchMealDetails(mealId);
            if(details) {
                const ingredients = [];
                for(let i=1; i<=20; i++) {
                    const ingredientName = details[`strIngredient${i}`];
                    const measure = details[`strMeasure${i}`];
                    if(ingredientName && ingredientName.trim() !== "") {
                        ingredients.push(`${measure} ${ingredientName}`);
                    }
                }
                setMealIngredients((prevIngredients) => ({...prevIngredients, [mealId]: ingredients,}));
            }
        }
    };

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div className="pt-8 md:pt-16 lg:pt-20 p-4 ml-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                Meal Ideas
            </h2>
            <p className="mb-4">{paragraphText.replace(/-/g, ' ')}</p>
            {meals.length > 0 && (
                <ul className="list-disc list-inside space-y-2 w-96">
                    {meals.map((meal) =>(
                        <li key={meal.idMeal} onClick={() =>showMealsIng(meal.idMeal)} className="text-gray-700 dark:text-gray-300 border-sky-500 bg-sky-800 p-3 m-2 rounded-md cursor-pointer border text-left" >
                            {meal.strMeal}
                            {shownMeals[meal.idMeal] && mealIngredients[meal.idMeal] && mealIngredients[meal.idMeal].length >0 && (
                                <ul>
                                    {mealIngredients[meal.idMeal].map((ingredient, index) => (
                                        <li key={index}>{ingredient}</li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
};

export default MealIdeas;