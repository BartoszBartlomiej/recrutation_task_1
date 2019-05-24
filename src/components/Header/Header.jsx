import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <div className='content'>
                    <nav>
                        <p>LOGO</p>
                        <ul>
                            <li>
                                STRONA GŁOWNA
                            </li>
                            <li>
                                WYSZUKIWARAK
                            </li>
                            <li>
                                INWESTYCJE
                            </li>
                            <li>
                                BLOG
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;
