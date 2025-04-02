"use client";
import React, { useState, useEffect } from "react";
import { getItems, addItem, deleteItem } from "../_services/shopping-list-service";
import { ItemList } from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import {useRouter} from 'next/navigation';

export default function Page() {
  const {user, firebaseSignOut} = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  const loadItems = async () => {
    if(user) {
      try{
        const userItems = await getItems(user.uid);
        setItems(userItems);
      } catch (error) {
        console.error('Error loading items: ', error);
      }
    }
  }

  const handleItemSelect = (itemName) => {
    const parts = itemName.split(',');
    let mrCleaned = parts[0];  
    mrCleaned = mrCleaned.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]|\p{Emoji}/gu, '').trim();
    const hyphenatedName = mrCleaned.replace(/\s+/g, '-').replace(/-+$/, '');
    setSelectedItemName(hyphenatedName);
  };

  const itemHandler = async (newItem) => {
    if(user) {
      try {
        const newItemID = await addItem(user.uid, newItem);
        setItems((prevItems) => [...prevItems, {...newItem, id: newItemID}]);
      } catch (error) {
        console.error('Error adding item: ', error);
      }
    }
  }; 
  
  const itemDeleter = async (item) => {
    if (user && item) {
      try {
        await deleteItem(user.uid, item);
        await loadItems();
      } catch (error) {
        console.error('Error deleting item: ', error);
      }
    } else {
      console.error("item.id is null or user is null");
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
      router.push('/');
    } catch (error) {
      console.error('Firebase sign - out Error:', error);
    }
  };

  useEffect(() => {
    loadItems();
  }, [user]);

  return (
    <div className="w-full pr-4 pl-4">
      <div className="flex flex-row">
        <div>
          <h1 className="font-bold text-4xl p-2 m-2">Shopping List</h1>
          <NewItem onAddItem={itemHandler} userID={user?.uid}/>
          <ItemList items={items} onItemSelect={handleItemSelect} onDelete={itemDeleter} />
        </div>
        <div>
          <MealIdeas ingredient={selectedItemName}/>
        </div>
        <div className="ml-auto flex items-start">
          <button
          onClick={handleSignOut}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-5"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}