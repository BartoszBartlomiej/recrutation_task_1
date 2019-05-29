import React, {Component} from 'react';

import Scroll from './Scroll/Scroll';



import connected from './../../img/connected.png';




class Header extends Component {
    render() {
        return (
            <div>
                <header id='main'>
                    <div className='content'>
                        <Scroll/>
                        <div className='header_img'>
                            <img src={connected}/>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;
