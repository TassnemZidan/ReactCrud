import { useState, useEffect } from "react";
import "./App.css";
import { db } from './firebase-config';

import {
  addDoc,
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  doc
}
  from "firebase/firestore";


function App() {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);

  const [users, setUsers] = useState([]);
  const userCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(userCollectionRef, { name: newName, age: Number(newAge) });
  };

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newFieleds = { age: age + 1 };
    await updateDoc(userDoc, newFieleds);
  };
  const delteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

    };
    getUsers();
  }, []);

  return (
    <div className="App">
      <table>
        <input placeholder="Name..."
          onChange={(event) => {
            setNewName(event.target.value);
          }} />
        <input type="number" placeholder="Age..."
          onChange={(event) => {
            setNewAge(event.target.value);
          }}
        />

        <button onClick={createUser}> Create User</button>
        {users.map((user) => {
          return (
            <div>
              {" "}

              <tr>
                <th>Name: </th>
                <th>Age: </th>
              </tr>

              <tr >
                <td>{user.name}</td>

                <td>{user.age}</td>
              </tr>




              <button onClick={() => { updateUser(user.id, user.age) }}>Increase age</button>
              <button onClick={() => { delteUser(user.id, user.age) }}>Delete User</button>
            </div>


          );
        })}
      </table>
    </div>
  );
}

export default App;
