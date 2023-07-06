import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import firebaseConfig from './firebaseConfig';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const CrudComponent = () => {
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    // Fetch initial data
    const fetchData = async () => {
      const snapshot = await firebase.database().ref('items').once('value');
      const items = snapshot.val();
      setData(items || []);
    };

    fetchData();
  }, []);

  const addItem = () => {
    // Add new item
    const newItemRef = firebase.database().ref('items').push();
    newItemRef.set(newItem);
    setNewItem('');
  };

  const updateItem = (itemId, updatedValue) => {
    // Update item
    firebase.database().ref(`items/${itemId}`).set(updatedValue);
  };

  const deleteItem = (itemId) => {
    // Delete item
    firebase.database().ref(`items/${itemId}`).remove();
  };

  return (
    <div>
      <h1>CRUD Example with Firebase Realtime Database</h1>

      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>

      <ul>
        {data.map((item) => (
          <li key={item.key}>
            <input
              type="text"
              value={item.value}
              onChange={(e) => updateItem(item.key, e.target.value)}
            />
            <button onClick={() => deleteItem(item.key)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudComponent;
