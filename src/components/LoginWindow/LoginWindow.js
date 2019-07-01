import React from 'react';
import classes from './LoginWindow.module.css';


const loginWindow = (props) => {
    let message;
    if(props.msg.length > 2) {
        message = <span>{props.msg}<br/></span>
    }

    return (
        <div className={classes.popUp}>
            <h1>LOG IN</h1>
            <input id='email' className={classes.field} placeholder='E-mail' />
            <input id='password' className={classes.field} placeholder='Password' />
            <br />
            {message}
            <button onClick={() => props.clicked(
                document.getElementById('email').value,
                document.getElementById('password').value
            )}>LOGIN</button>
        </div>
    );
}

export default loginWindow;