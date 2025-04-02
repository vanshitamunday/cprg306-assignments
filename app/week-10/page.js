"use client";

import React from 'react';
import { useUserAuth } from './_utils/auth-context';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LandingPage() {
    const { user, gitHubSignIn, googleSignIn, firebaseSignOut } = useUserAuth();
    const router = useRouter();

    const handleSignIn = async (signInFunction) => {
    try {
        await signInFunction();
        router.push("week-10/shopping-list");
    } catch (error) {
        if(error.code === 'auth/popup-closed-by-user') {
            console.log('Popup closed by user. Sign-in Cancelled.')
            alert('Sign-in was cancelled.')
        } else {
        console.error('GitHub sign-in error:', error);
        }
    }
    };

    const handleSignOut = async () => {
    try {
        await firebaseSignOut();
    } catch (error) {
        console.error('Firebase sign-out error:', error);
    }
    };

    return (
    <div className="flex justify-center items-center h-screen flex-col">
        {user ? (
        <div className="text-center">
            <p className="text-xl mb-4">Welcome, {user.displayName} ({user.email})</p>
            <button
            onClick={handleSignOut}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2"
            >
                Sign Out
            </button>
            <Link
            href="week-10/shopping-list"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
            >
                Shopping List
            </Link>
            <Link 
            href="week-10/profile" 
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2"
            >
                Profile
            </Link>
        </div>
        ) : (
        <div className="text-center">
            <p className="text-lg mb-4">Please sign in to continue.</p>
            <button
            onClick={() => handleSignIn(gitHubSignIn)}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2"
            >
                Sign In with GitHub
            </button>
            <button 
            onClick={() => handleSignIn(googleSignIn)} 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
            >
                Sign In with Google
            </button>
        </div>
        )}
    </div>
    );
}