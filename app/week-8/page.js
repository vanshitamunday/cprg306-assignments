"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Function to add a new item to the shopping list
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  // Function to handle item selection
  const handleItemSelect = (itemName) => {
    // Clean up item name (remove quantity, emoji, etc.)
    const cleanedName = itemName
      .split(",")[0] // Remove quantity
      .replace(/[^a-zA-Z ]/g, "") // Remove emojis
      .trim()
      .toLowerCase();
    
    setSelectedItemName(cleanedName);
  };

  return (
    <div className="min-h-screen flex flex-col sm:flex-row gap-6 p-6">
      {/* Left Side: Form and Shopping List */}
      <div className="sm:w-1/2">
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>

      {/* Right Side: Meal Ideas */}
      <div className="sm:w-1/2">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </div>
  );
}
