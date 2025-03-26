export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 cursor-pointer transition-all"
      onClick={() => onSelect(name)} // Calls the onSelect function when clicked
    >
      <p className="text-lg font-semibold text-white">{name}</p>
      <p className="text-sm text-gray-400">Category: {category}</p>
      <p className="text-sm text-gray-400">Quantity: {quantity}</p>
    </li>
  );
}
