"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../_utils/auth-context";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const { user } = useUserAuth();
  const router = useRouter();

  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Redirect if not logged in
  useEffect(() => {
    if (user === null) {
      router.push("/week-9");
    }
  }, [user, router]);

  // Avoid rendering before redirect
  if (!user) {
    return null;
  }

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (itemName) => {
    const cleanedName = itemName
      .split(",")[0]
      .replace(/[^a-zA-Z ]/g, "")
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
