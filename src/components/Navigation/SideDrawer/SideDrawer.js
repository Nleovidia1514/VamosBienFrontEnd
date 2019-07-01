import React from 'react';

import classes from './SideDrawer.module.css';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../../UI/Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationsItems';
import UserCard from '../../UserCard/UserCard';

const sideDrawer = (props) => {
    let classesToUse = [classes.SideDrawer, classes.Close];
    if ( props.open ) {
        classesToUse[1] = [classes.Open];
    }

    return (
        <Auxiliary>
            <Backdrop 
                show={props.open} 
                clicked={props.close}></Backdrop>
            <div className={classesToUse.join(' ')}>
                <UserCard />
                <nav>
                    <NavigationItems 
                        orientation="column"
                        items={props.items} />
                </nav>
            </div>
        </Auxiliary>
    );
}

export default sideDrawer;