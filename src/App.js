import React, {Component} from 'react';
import './App.scss';

import Header from "./components/Header/Header";


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";

library.add(faStroopwafel);
library.add(faBars);


class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
            </div>
        );
    }
}

export default App;
