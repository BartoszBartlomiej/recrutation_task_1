import React, {Component} from 'react';
import Investment from './Investment/Investmet'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


class FindInvestment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            localInfo: [],
            currentInvestment: 0,
        }
    }

    localInformation = () => {
        const url = 'https://api.adcookie.usermd.net/deweloper/';
        fetch(url).then(resp => resp.json()).then(data => {
            console.log(data);
            this.setState({
                localInfo: [...data]
            })
        })
    };

    componentDidMount() {
        this.localInformation();
    }

    nextBtn = () => {
        if (this.state.currentInvestment === this.state.localInfo.length -1) {
            this.setState({
                currentInvestment: 0,
            })
        } else {
            this.setState({
                currentInvestment: this.state.currentInvestment + 1,
            })
        }
    };

    prevBtn = () => {
        if (this.state.currentInvestment === 0) {
            this.setState({
                currentInvestment: 4,
            })
        } else {
            this.setState({
                currentInvestment: this.state.currentInvestment - 1,
            })
        }
    };


    render() {
        if (this.state.localInfo.length === 0) {
            return null
        } else {
            return (
                <div id='search' className='find'>
                    <div className='content'>
                        <div className='find__description'>
                            <h1>Znajdź inwestycję, którą pokochasz!</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.
                                Aliquam
                                erat
                                volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.</p>
                        </div>
                        <Investment investment={this.state.localInfo[this.state.currentInvestment]}/>
                        <div className='arrows'>
                            <div onClick={this.prevBtn}>
                                <span><FontAwesomeIcon icon='arrow-left'/></span>
                                <span>Poprzedni</span>
                            </div>
                            <div onClick={this.nextBtn}>
                                <span>Następny</span>
                                <span><FontAwesomeIcon icon='arrow-right'/></span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default FindInvestment;
