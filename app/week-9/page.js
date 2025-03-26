"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      {!user ? (
        <>
          <h1 className="text-3xl font-bold mb-4">Welcome to the Shopping List App</h1>
          <button
            onClick={gitHubSignIn}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            Login with GitHub
          </button>
        </>
      ) : (
        <>
          <h1 className="text-2xl mb-2">Welcome, {user.displayName}</h1>
          <p className="text-sm mb-6">({user.email})</p>

          <div className="flex gap-4">
            <Link
              href="/week-9/shopping-list"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Go to Shopping List
            </Link>
            <button
              onClick={firebaseSignOut}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
          </div>
        </>
      )}
    </main>
  );
}