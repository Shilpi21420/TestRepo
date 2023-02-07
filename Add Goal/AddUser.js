import React, { useState, useRef} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';


const AddUser = (props) =>{
   const nameInputRef = useRef();
   const ageInputRef = useRef();
   const collagenameInputRef = useRef();

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const addUserHandler = (event) =>{
      event.preventDefault();
      const enteredName = nameInputRef.current.value;
      const enteredUserAge = ageInputRef.current.value;
      const enteredCollageName = collagenameInputRef.current.value;

      if(enteredUsername.trim().length === 0 || enteredAge.trim().length ===0){
        return alert('Write the details');
      }
      if(+enteredUserAge < 1){
        return alert('Give Correct Age');

      }
     props.onAddUser(enteredName,enteredUserAge,enteredCollageName);
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
            <input id="username" 
            type="text" 
            value={enteredUsername} 
            onChange={usenamechangehandler} 
            ref={nameInputRef}
            />
            <label htmlFor='age'>Age (Years)</label>
            <input id="age" 
            type="number" 
            value={enteredAge} 
            onChange={agechangehandler}
            ref={ageInputRef}
            />
            <label htmlFor='collagename'>Collage Name</label>
            <input id="collagename" 
            type="text" 
            ref={collagenameInputRef}
            />
            <button type="submit">Add User</button>
        </form>
       
        </Card>
    );

}
export default AddUser;