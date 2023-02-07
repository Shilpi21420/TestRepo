import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';


const AddUser = (props) =>{
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const addUserHandler = (event) =>{
      event.preventDefault();
      if(enteredUsername.trim().length === 0 || enteredAge.trim().length ===0){
        return alert('Write the details');
      }
      if(+enteredAge < 1){
        return alert('Give Correct Age');

      }
     props.onAddUser(enteredUsername,enteredAge);
      setEnteredAge('');
      setEnteredUsername('');
    };
    const usenamechangehandler = (event) =>{
      setEnteredUsername(event.target.value);
    };
    const agechangehandler= (event) =>{
      setEnteredAge(event.target.value);
    };

    return(
        <Card cssClassName={classes.input}>
        <form onSubmit={addUserHandler}>
            <lavel htmlFor="username">Username</lavel>
            <input id="username" type="text" value={enteredUsername} onChange={usenamechangehandler}/>
            <label htmlFor='age'>Age (Years)</label>
            <input id="age" type="number" value={enteredAge} onChange={agechangehandler}/>
            <button type="submit">Add User</button>
        </form>
       
        </Card>
    );

}
export default AddUser;
