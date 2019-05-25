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

        console.log('Klik?')


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

                    <ul style={myStyleHide} className='haba'>
                        <li>STRONA GŁOWNA</li>
                        <li>WYSZUKIWARKA</li>
                        <li>INWESTYCJE</li>
                        <li>BLOG</li>
                    </ul>
            </div>

        );
    }
}

export default HamburgerMenu;
