import React from 'react';

import classes from './UserOptions.module.css';
import NavigationItems from '../../Navigation/NavigationItems/NavigationsItems';

const userOptions = (props) => {
    let classesToUse = [classes.UserOptions, classes]
    if ( props.show ) {

    }
    return (
        <div className={classes.UserOptions}>
            <div className={classes.Toggler}/>
            {props.show ? <nav>
                <NavigationItems
                    orientation="column" 
                    items={props.items}/> 
            </nav> : null}
        </div>
        
        
    );
}

export default userOptions;