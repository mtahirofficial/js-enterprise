import React, { Component } from 'react';
import './TopMenu.css';
import { Link } from "react-router-dom"
class TopMenu extends Component {
    render() {
        return (
            <div>
                <div className="topMenu float-right">
                    <ul className="topMenuList">
                        <li className="menuItem"><Link className="menuLink" to="">Login</Link></li>
                        <li className="menuItem"><Link className="menuLink" to="">Signup</Link></li>
                    </ul>
                </div>
            </div>
        );
    }

}

export default TopMenu;

