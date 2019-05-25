import React, {Component} from 'react';

import project from './../../img/rzut.png';

class FindInvestment extends Component {
    render() {
        return (
            <div className='find'>
                <div className='content'>
                    <div className='find__description'>
                        <h1>Znajdź inwestycję, którą pokochasz!</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam
                            erat
                            volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.</p>
                    </div>
                    <div className='find__investment'>
                        <div className='find__investment__description'>
                            <h2>Lokal U/0/1</h2>
                            <ul>
                                <li>Metraż: 127.85 m2</li>
                                <li>Cena netto: 1 572 555 zł*</li>
                                <li className='smaller_text'>* cena nie zawiera 23% VAT</li>
                                <li>Pietro: 0 - Parter</li>
                                <li>Przeznaczenie: Gastronomiczne</li>
                                <li>Status: Wolne</li>
                            </ul>
                            <img className='project' src={project}/>
                            <div className='north'>
                                <p>N</p>
                                <div className='north__line'/>
                                <div className='north__circle'/>

                            </div>

                        </div>


                    </div>
                </div>
            </div>
        );
    }
}

export default FindInvestment;
