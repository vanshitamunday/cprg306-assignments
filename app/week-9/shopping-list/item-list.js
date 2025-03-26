"use client";
import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList({ onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  // Sort items based on selected sorting method
  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category);
    return 0;
  });

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Shopping List</h2>

      {/* Sorting Buttons */}
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded ${
            sortBy === "name" ? "bg-blue-500" : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded ${
            sortBy === "category" ? "bg-blue-500" : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          Sort by Category
        </button>
      </div>

      {/* Render Items */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} onSelect={onItemSelect} />
        ))}
      </ul>
    </div>
  );
}
