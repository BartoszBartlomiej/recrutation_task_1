import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';

import logo from './../../img/logo.png'
import header from './../../img/header.jpg'
import overlay from './../../img/header-overlay.jpg';
import connected from './../../img/connected.png';

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
                        <div>
                            {/*<img className='first_layer ' src={header}/>*/}
                            {/*<img className='second_layer' src={overlay}/>*/}
                            <img src={connected}/>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;
