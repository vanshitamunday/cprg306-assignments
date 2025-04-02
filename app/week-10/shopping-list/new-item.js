"use client";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../_utils/firebase";

export default function NewItem({onAddItem, userID}) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");
  const [quantity, setQuantity] = useState(1);
  const increment = (event) => {
    event.preventDefault();
    if (quantity > 0) {
      setQuantity(quantity + 1);
    }
  };
  const decrement = (event) => {
    event.preventDefault();
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSubmit = (event) => { 
    event.preventDefault();

    const item = {
      name: name,
      quantity: quantity,
      category: category.toLowerCase(),
    };

    try {
      onAddItem(item);
      event.target.reset();
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };
  return (
<div className="flex flex-col container mx-auto p-4">
  <form
    onSubmit={handleSubmit}
    className="bg-gray-800 text-white rounded-md p-4 space-y-4"
  >
    <div className="space-y-1">
      <label
        className="block text-sm font-medium text-white"
        htmlFor="name"
      >
        Name:
      </label>
      <input
        className="bg-gray-700 border border-gray-600 rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-500 text-white text-sm"
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
    </div>
    <div className="flex items-center space-x-4">
      <div className="flex items-center bg-gray-700 rounded-md p-2">
        <span className="text-lg font-semibold text-white mr-2 pr-6">{quantity}</span>
        <div className="flex space-x-2">
          <button
            onClick={decrement}
            disabled={quantity === 1}
            className="bg-gray-600 hover:bg-gray-500 text-white rounded-md p-1 px-2 disabled:opacity-50 text-sm"
          >
            -
          </button>
          <button
            onClick={increment}
            disabled={quantity === 20}
            className="bg-blue-600 hover:bg-blue-500 text-white rounded-md p-1 px-2 disabled:opacity-50 text-sm"
          >
            +
          </button>
        </div>
      </div>
      <div className="flex-grow">
        <select
          className="bg-gray-700 border border-gray-600 rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-500 text-white text-sm"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Meat">Meat</option>
          <option value="Frozen Foods">Frozen Foods</option>
          <option value="Canned Goods">Canned Goods</option>
          <option value="Dry Goods">Dry Goods</option>
          <option value="Beverages">Beverages</option>
          <option value="Snacks">Snacks</option>
          <option value="Household">Household</option>
          <option value="Other">Other</option>
        </select>
      </div>
    </div>
    <button
      className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-md w-full text-sm"
      type="submit"
    >
      Submit
    </button>
  </form>
</div>
  );
}

