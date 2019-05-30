import React, {Component} from 'react';
import logo from "../../../img/logo.png";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";


class Scroll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prevScrollPosition: window.pageYOffset,
            visible: true
        };
    }

    handleScroll = () => {
        const {prevScrollPosition} = this.state;

        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollPosition > currentScrollPos;

        this.setState({
            prevScrollPosition: currentScrollPos,
            visible
        }, () => {
            console.log(window.pageYOffset)
        });
    };

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }


    render() {
        const show = {
            width: "90%",
            padding: "10px",
            position: "fixed",
            top: '0',
            left: '5%',
            transition: "top 0.6s",
            margin: '0 auto',
            zIndex: '10'
        };

        const hide = {
            width: "90%",
            padding: "10px",
            position: "fixed",
            top: '-100px',
            left: '5%',
            transition: "top 0.6s",
            margin: '0 auto',
            zIndex: '10'
        };

        return (
            <nav className='scroll' style={this.state.visible ? show : hide}>
                <div className='logo'>
                    <img src={logo}/>
                </div>
                <nav>
                    <ul className='desktopMenu'>
                        <li>
                            <a href='/#main'>STRONA GŁOWNA</a>
                        </li>
                        <li>
                            <a href='/#search'>WYSZUKIWARKA</a>
                        </li>
                        <li>
                            <a href='/#ask'>INWESTYCJE</a>
                        </li>
                        <li>
                            <a href='/#blog'>BLOG</a>
                        </li>
                    </ul>
                </nav>
                <HamburgerMenu/>
            </nav>
        );
    }
}

export default Scroll;
