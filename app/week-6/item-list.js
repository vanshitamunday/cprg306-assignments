"use client";

import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === "name") {
      return a.name > b.name ? 1 : -1;
    }
    if (sortBy === "category") {
      return a.category > b.category ? 1 : -1;
    }
    return 0;
  });

  return (
    <div>
      <div className="flex justify-center space-x-4 mb-4">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded ${
            sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-300"
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded ${
            sortBy === "category" ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-300"
          }`}
        >
          Sort by Category
        </button>
      </div>

      <ul className="bg-gray-800 p-4 rounded-lg shadow-lg divide-y divide-gray-700">
        {sortedItems.map((item) => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </ul>
    </div>
  );
}
