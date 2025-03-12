"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
  // State to store items
  const [items, setItems] = useState(itemsData);

  // Function to add a new item
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-gray-200 p-8">
      <div className="w-full max-w-lg p-6 bg-gray-900 shadow-md rounded-lg">
        <h1 className="text-2xl font-semibold text-center border-b border-gray-700 pb-4 mb-6">
          Shopping List
        </h1>
        
        {/* New Item Form */}
        <NewItem onAddItem={handleAddItem} />
        
        {/* Item List */}
        <ItemList items={items} />
      </div>
    </main>
  );
}
