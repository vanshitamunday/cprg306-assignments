"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState(""); // Name input field state
  const [quantity, setQuantity] = useState(1); // Quantity state (from Week 4)
  const [category, setCategory] = useState("produce"); // Category dropdown state

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    const item = { name, quantity, category };

    console.log("Item submitted:", item);
    alert(`Item Added:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

    // Reset form fields
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border border-gray-300 rounded-lg max-w-md mx-auto">
      {/* Name Field */}
      <div className="mb-4">
      <label className="block font-semibold text-white">Item Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border border-gray-300 p-2 rounded w-full bg-white text-black"
        />
      </div>

      {/* Quantity Controls */}
      <div className="mb-4">
        <label className="block font-semibold">Quantity:</label>
        <div className="flex items-center space-x-4">
          <button
            type="button"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            disabled={quantity === 1}
            className="px-4 py-2 bg-red-500 text-white rounded disabled:bg-gray-300"
          >
            -
          </button>
          <span className="text-lg font-bold">{quantity}</span>
          <button
            type="button"
            onClick={() => setQuantity(Math.min(20, quantity + 1))}
            disabled={quantity === 20}
            className="px-4 py-2 bg-green-500 text-white rounded disabled:bg-gray-300"
          >
            +
          </button>
        </div>
      </div>

      {/* Category Dropdown */}
      <div className="mb-4">
        <label className="block font-semibold">Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full bg-white text-black"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen">Frozen Foods</option>
          <option value="canned">Canned Goods</option>
          <option value="dry">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Submit Button */}
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded w-full">
        Add Item
      </button>
    </form>
  );
}
