export default function Item({ name, quantity, category }) {
    return (
      <li className="p-4 border-b border-gray-200 last:border-none flex justify-between items-center bg-white shadow-sm hover:shadow-md rounded-lg mb-2">
        <div>
          <h3 className="font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500">Category: {category}</p>
        </div>
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
          Quantity: {quantity}
        </span>
      </li>
    );
  }
  