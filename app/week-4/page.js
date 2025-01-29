"use client";

import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        if (quantity < 20) {
          setQuantity(quantity + 1);
          console.log(quantity);
        }
      };
    
      const decrement = () => {
        if (quantity > 1) {
          setQuantity(quantity - 1);
          console.log(quantity);
        }
      };

      return (
        <div className="text-center p-4">
          <p className="text-lg font-semibold">Quantity: {quantity}</p>
          <div className="space-x-4 mt-2">
            <button
              onClick={decrement}
              disabled={quantity === 1}
              className="bg-red-500 hover:bg-red-700 active:bg-red-300 rounded w-24 text-white p-2 disabled:bg-gray-300"
            >
              Decrement
            </button>
            <button
              onClick={increment}
              disabled={quantity === 20}
              className="bg-blue-500 hover:bg-blue-700 active:bg-blue-300 rounded w-24 text-white p-2 disabled:bg-gray-300"
            >
              Increment
            </button>
          </div>
        </div>
      );
    }