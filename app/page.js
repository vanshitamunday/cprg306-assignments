import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-gray-200 p-8">
      <div className="w-full max-w-lg p-6 bg-gray-900 shadow-md rounded-lg">
        <h1 className="text-xl font-medium text-center border-b border-gray-700 pb-3 mb-5">
          CPRG 306 Web Development 2 - Assignments
        </h1>
        <ul className="space-y-3">
          <li>
            <Link
              href="/week-2"
              className="block w-full text-lg font-medium text-gray-300 hover:text-white px-4 py-3 rounded-md transition duration-200 bg-gray-800 hover:bg-gray-700"
            >
              Week 2
            </Link>
          </li>
          <li>
            <Link
              href="/week-3"
              className="block w-full text-lg font-medium text-gray-300 hover:text-white px-4 py-3 rounded-md transition duration-200 bg-gray-800 hover:bg-gray-700"
            >
              Week 3
            </Link>
          </li>
          <li>
            <Link
              href="/week-4"
              className="block w-full text-lg font-medium text-gray-300 hover:text-white px-4 py-3 rounded-md transition duration-200 bg-gray-800 hover:bg-gray-700"
            >
              Week 4
            </Link>
          </li>
          <li>
            <Link
              href="/week-5"
              className="block w-full text-lg font-medium text-gray-300 hover:text-white px-4 py-3 rounded-md transition duration-200 bg-gray-800 hover:bg-gray-700"
            >
              Week 5
            </Link>
          </li>
          <li>
            <Link
              href="/week-6"
              className="block w-full text-lg font-medium text-gray-300 hover:text-white px-4 py-3 rounded-md transition duration-200 bg-gray-800 hover:bg-gray-700"
            >
              Week 6
            </Link>
          </li>
          <li>
            <Link
              href="/week-7"
              className="block w-full text-lg font-medium text-gray-300 hover:text-white px-4 py-3 rounded-md transition duration-200 bg-gray-800 hover:bg-gray-700"
            >
              Week 7
            </Link>
          </li>
          <li>
            <Link
              href="/week-8"
              className="block w-full text-lg font-medium text-gray-300 hover:text-white px-4 py-3 rounded-md transition duration-200 bg-gray-800 hover:bg-gray-700"
            >
              Week 8
            </Link>
          </li>
          <li>
            <Link
              href="/week-9"
              className="block w-full text-lg font-medium text-gray-300 hover:text-white px-4 py-3 rounded-md transition duration-200 bg-gray-800 hover:bg-gray-700"
            >
              Week 9
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
