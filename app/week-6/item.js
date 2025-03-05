export default function Item({ name, quantity, category }) {
    return (
      <li className="flex justify-between items-center p-3 border-b border-gray-700">
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-400">Category: {category}</p>
        </div>
        <span className="bg-gray-800 text-white px-3 py-1 rounded text-sm">
          Quantity: {quantity}
        </span>
      </li>
    );
  }
  