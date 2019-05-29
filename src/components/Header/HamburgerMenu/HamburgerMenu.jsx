import React, {Component} from 'react';

// import './_hamburgerMenu.scss';

class Asd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            class: "open",
            hide: "true",
        }
    }

    handleMenuOpen = () => {
        if (this.state.hide === "true") {
            this.setState({
                class: 'open oppenned',
                hide: "false",
            })
        } else {
            this.setState({
                class: 'open',
                hide: "true",
            })
        }
    };

    render() {
        return (
            <div className='hamburgerMenu'>
            <div onClick={this.handleMenuOpen} display={this.state.hide} className={this.state.class}>
                <span className="cls"/>
                    <span>
                        <ul className="sub-menu ">
                            <li>
                                <a href='/#main'>STRONA GŁOWNA</a>
                            </li>
                            <li>
                                <a href='/#search'>WYSZUKIWARKA</a>
                            </li>
                            <li>
                                <a href='/'>INWESTYCJE</a>
                            </li>
                            <li>
                                <a href='/#blog'>BLOG</a>
                            </li>
                        </ul>
                    </span>
                <span className="cls"/>
            </div>
            </div>

        )
    }

}

export default Asd;
