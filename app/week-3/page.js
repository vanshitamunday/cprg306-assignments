import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="p-8 bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Shopping List</h1>
      <ItemList />
    </main>
  );
}
