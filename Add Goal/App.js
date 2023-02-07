import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import ListofUser from './components/Users/ListofUser';

function App() {
   const [userlist, setuserlist] = useState([]);
   const addUserHandler = (uName, uAge, ucolname) =>{
    setuserlist((preUserList) => {
       return [...preUserList, {name: uName, age: uAge , collage:ucolname, id: Math.random().toString()}];
    });
   }
  return (
    <>
    <AddUser onAddUser={addUserHandler} />
    <ListofUser users={userlist} />
    </>
  );
}

export default App;