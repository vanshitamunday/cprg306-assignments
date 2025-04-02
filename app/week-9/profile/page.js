"use client";

import React, {useEffect} from 'react';
import { useUserAuth } from '../_utils/auth-context';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
    const { user } = useUserAuth();
    const router = useRouter();

    console.log(user);

    useEffect(() => {
        if (!user) {
            router.push('/week-9');
        }
    }, [user, router]);

    if (!user) {
        return null;
    }

    return (
    <div>
        <h1>Profile</h1>
        <p>Display Name: {user.displayName}</p>
        <p>Email: {user.email}</p>
        <p>User ID: {user.uid}</p>
        {user.photoURL && <img src={user.photoURL} alt="Profile" />}
    </div>
    );
}