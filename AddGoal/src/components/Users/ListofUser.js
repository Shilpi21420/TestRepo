import React from "react";
import Card from "../UI/Card";
import classes from './ListofUse.module.css';

const ListofUser = (props) =>{
    return (
      <Card className={classes.users}>
        <ul>
          {props.users.map((user) => (
            <li key={user.id}> 
                {user.name} ({user.age} Years old)
            </li>
           
          ))}
        </ul>
        </Card>
    );

}
export default ListofUser;