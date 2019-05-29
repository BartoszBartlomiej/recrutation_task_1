import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


class HamburgerMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hide: 'none',
            show: 'block',
        };
    };


    handleBtnClick = () => {
        this.setState({
            hide: this.state.hide === 'none' ? 'block' : 'none',
            show: this.state.show === 'block' ? 'none' : 'block',
        });
    };

    render() {
        const myStyleHide = {
            display: this.state.hide,
        };
        const myStyleShow = {
            display: this.state.show,
        };
        return (
            <div className='hamburgerMenu'>
                <button onClick={this.handleBtnClick} className='hamburgerBtn'>
                    <FontAwesomeIcon icon='bars'/>
                </button>

                    <ul style={myStyleHide} className='hamburgerMenu__menu'>
                        <li>
                            <a href='/#main'>STRONA GŁOWNA</a>
                        </li>
                        <li>
                            <a href='/#search'>WYSZUKIWARKA</a>
                        </li>
                        <li>
                            INWESTYCJE
                        </li>
                        <li>
                            <a href='/#blog'>BLOG</a>
                        </li>
                    </ul>
            </div>

        );
    }
}

export default HamburgerMenu;
