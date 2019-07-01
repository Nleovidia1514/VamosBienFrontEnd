import React, { Component } from 'react';

import classes from './UserCard.module.css';
import UserOptions from './UserOptions/UserOptions';

class UserCard extends Component {
    state = {
        showUserOptions: false,
        userIsAuth: false,
        notAuthOptions: {
            Login: {
                link: '/login',
                exact: true
            },
            Register: {
                link: '/Register',
                exact: true
            }
        }
    }

    toggleUserOptionsHandler = () => {
        this.setState(prevState => {
            return { showUserOptions: !prevState.showUserOptions };
        });
    }

    render() {
        let userOps = this.state.notAuthOptions;
        if (this.state.userIsAuth) {

        }
        return (
            <div className={classes.UserCard}>
                <div>IMAGE</div>
                <UserOptions
                    items={userOps}
                    show={this.state.showUserOptions} />
            </div>
            );
        }
    
    };
    
export default UserCard;