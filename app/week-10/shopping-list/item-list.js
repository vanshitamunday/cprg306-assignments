"use client";
import Item from "./item";
import React, { useState } from "react";

export function ItemList({ items, onItemSelect, onDelete }) {
  const [sortBy, setSortBy] = useState("name");

  const handleSortchange = (newSortBy) => {
    setSortBy(newSortBy);
  };

  const sortingHat = [...items].sort((a, b) => {
    if (sortBy === "name") {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    } else if (sortBy === "category") {
      if (a.category < b.category) {
        return -1;
      }
      if (a.category > b.category) {
        return 1;
      }
      return 0;
    } else {
      return 0;
    }
  });

  const groupingHat = () => {
    if (sortBy === "grouped") {
      const grouped = items.reduce((acc, item) => {
        const category = item.category;
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(item);
        return acc;
      }, {});
      const sortedCategories = Object.keys(grouped).sort();
      for (const category in grouped) {
        grouped[category].sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
      }
      return sortedCategories.map((category) => (
        <div key={category}>
          <h2 className="capitalize">{category}</h2>
          {grouped[category].map((item) => (
            <div key={item.id} className="flex flex-row">
              <Item {...item} onSelect={() => onItemSelect(item.name)} />
              {onDelete && (
                <button
                  onClick={() => onDelete(item)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-2"
                >
                  Delete
                </button>
              )}
            </div>
          ))}
        </div>
      ));
    } else {
      return sortingHat.map((item) => (
        <div key={item.id} className="flex flex-row">
          <Item {...item} onSelect={() => onItemSelect(item.name)} />
          {onDelete && (
            <button
              onClick={() => onDelete(item)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-2"
            >
              Delete
            </button>
          )}
        </div>
      ));
    }
  };
  return (
    <div className="flex flex-col">
      <div className="flex justify-items-start p-5">
        <button
          onClick={() => handleSortchange("name")}
          style={{ backgroundColor: sortBy === "name" ? "lightgray" : "white" }}
          className="text-black p-2"
        >
          Sort By Name
        </button>
        <div className="p-2"></div>
        <button
          onClick={() => handleSortchange("category")}
          style={{
            backgroundColor: sortBy === "category" ? "lightgrey" : "white",
          }}
          className="text-black p-2"
        >
          Sort by Category
        </button>
        <div className="p-2"></div>
        <button
          onClick={() => handleSortchange("grouped")}
          style={{
            backgroundColor: sortBy === "category" ? "lightgrey" : "white",
          }}
          className="text-black p-2"
        >
          Group by Category
        </button>
      </div>
      <div className="pl-8">{groupingHat()}</div>
    </div>
  );
}