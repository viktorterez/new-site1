import React, {Component} from 'react'
import {render} from 'react-dom'
import { Route, Router, Switch } from 'react-router'
import { NavLink } from 'react-router-dom'
import './header.css'
import logo from '../../assets/headerImages/logo.png'
import search from '../../assets/headerImages/Search-Icon.png'

class Header extends Component {
    render() {
        return(
            <div className = "header_new">
                <div>
                    <img src = {logo}></img>
                </div>
                <nav className = 'navigation'>
                    
                    <ul className = 'nav_list'>
                        <li className = 'nav_item'><NavLink to= "/">Ноme</NavLink
                        ></li>
                        <li className = 'nav_item'><NavLink to="/Demos" className='link'>Demos</NavLink></li>
                        <li className = 'nav_item'><NavLink to="/Features">Features</NavLink></li>
                        <li className = 'nav_item'><NavLink to="/Shortcodes">Shortcodes</NavLink></li>
                        <li className = 'nav_item'><NavLink to="/Shop">Shop</NavLink></li>
                        <li className = 'nav_item'><NavLink to="/Blog">Blog</NavLink></li>
                        <li className = 'nav_item'><NavLink to="/Portfolio">Portfolio</NavLink></li>
                    </ul>
                    
                    
                </nav>
                <div>
                    <img src = {search}></img>
                </div>
                {/* <Router>
                    <Switch>
                        <Route />
                    </Switch>
                </Router> */}
                
            </div>
        )

    }
}

export default Header