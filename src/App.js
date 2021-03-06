import React, {Component} from 'react';
import './App.scss';

import Header from "./components/Header/Header";
import FindInvestment from './components/FindInvestment/FindInvestment';
import FirstContact from './components/FirstContact/FirstContact';
import Icons from './components/Icons/Icons';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import SecondContact from './components/SecondContact/SecondContact';
import Footer from './components/Footer/Footer';




import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons/faArrowRight";


library.add(faBars);
library.add(faArrowLeft);
library.add(faArrowRight);

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <FindInvestment/>
                <FirstContact/>
                <Icons/>
                <Blog/>
                <About/>
                <SecondContact/>
                <Footer/>
            </div>
        );
    }
}

export default App;
