import React from 'react'
import {NavLink} from 'react-router-dom';
import AuthContext from '../../context/auth-context'
//Style
import './MainNavigation.css'

function MainNavigation() {
    
    return (
    <AuthContext.Consumer>
        {(context)=>{
            return(
            <header className="main-navigation">
                <div className='main-navigation__logo'>
                    <h1>EasyEvent</h1>
                </div>
                <div className="main-navigation__items">
                    <ul className="main-navigation__list">
                        <li className="main-navigation__list__item "><NavLink to="/Events">Events</NavLink></li>
                        {context.token && 
                        <>
                        <li className="main-navigation__list__item"><NavLink to="/bookings">Bokings</NavLink></li>
                        <li className="main-navigation__list__item">
                        <button onClick={context.logout}>Logout</button>
                         </li>
                        </>
                        }
                        {!context.token&&
                            <>
                            <li className="main-navigation__list__item"><NavLink to="/auth">Authenticate</NavLink></li>
                            </>
                         }
                         
                    </ul>
                </div>
            </header> 
            )
        }}

    </AuthContext.Consumer>
    )
}

export default MainNavigation
