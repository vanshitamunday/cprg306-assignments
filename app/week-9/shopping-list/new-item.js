"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");
  const [quantity, setQuantity] = useState(1);

  // Function to generate a random 18-character ID
  const genID = (length) => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  // Increment quantity (max 20)
  const increment = (event) => {
    event.preventDefault();
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  // Decrement quantity (min 1)
  const decrement = (event) => {
    event.preventDefault();
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Create new item object
    const newItem = {
      id: genID(18),
      name,
      quantity,
      category,
    };

    // Add new item to the list
    onAddItem(newItem);

    // Reset form fields
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <div className="flex flex-col container mx-auto p-4">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-4 text-white">Add Item</h2>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 shadow-md rounded px-8 pt-6 pb-8 mb-4 text-white"
      >
        {/* Name Input */}
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Item Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 bg-white text-black leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Quantity with Plus/Minus Buttons */}
        <div className="flex justify-center items-center mb-4">
          <button
            onClick={decrement}
            disabled={quantity === 1}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold p-3 px-6 rounded disabled:opacity-50"
          >
            -
          </button>
          <span className="text-lg font-semibold px-4">{quantity}</span>
          <button
            onClick={increment}
            disabled={quantity === 20}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-3 px-6 rounded disabled:opacity-50"
          >
            +
          </button>
        </div>

        {/* Category Dropdown */}
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2">Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value.toLowerCase())}
            className="shadow appearance-none border rounded w-full py-2 px-3 bg-white text-black leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
}
