import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-gray-200 p-8">
      <div className="w-full max-w-lg p-6 bg-gray-900 shadow-md rounded-lg">
        <h1 className="text-2xl font-semibold text-center border-b border-gray-700 pb-4 mb-6">
          Shopping List
        </h1>
        <ItemList />
      </div>
    </main>
  );
}
