import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';

import logo from './../../img/logo.png'
import header from './../../img/header.jpg'

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className='content'>
                        <nav>
                            <div className='logo'>
                                <img src={logo}/>
                            </div>
                            <ul className='desktopMenu'>
                                <li>STRONA GŁOWNA</li>
                                <li>WYSZUKIWARKA</li>
                                <li>INWESTYCJE</li>
                                <li>BLOG</li>
                            </ul>
                            <HamburgerMenu/>
                        </nav>

                    <img src={header}/>
                    </div>
                </header>

            </div>
        );
    }
}

export default Header;
