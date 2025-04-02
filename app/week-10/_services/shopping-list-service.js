import {db} from "../_utils/firebase";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";

async function getItems(userID) {
    try {
        const itemsCollection = collection(db, 'users', userID, 'items');
        const itemsGet = await getDocs(itemsCollection);
        const items = [];

        itemsGet.forEach((doc) => {
            items.push({
                id: doc.id,
                ...doc.data(),
            });
        });
        return items;
    } catch (error) {
        console.error('Error getting items: ', error);
        return [];
    }
    
}

async function addItem(userID, item) {
    try {
        const itemsCollection = collection(db, 'users', userID, 'items');
        const docRef = await addDoc(itemsCollection, item);
        return docRef.id;
    } catch (error) {
        console.error('Error adding item ', error);
        return null;
    }
}

async function deleteItem(userID, item) {
    try{
        const itemDoc = doc(db, 'users', userID, 'items', item.id);
        await deleteDoc(itemDoc);
    } catch (error) {
        console.error('Error Deleting item: ',error);
    }
}


export { getItems, addItem, deleteItem };