import React, {Component} from 'react';

import building from './../../img/blok.svg';
import layout from './../../img/metraz.svg'
import car from './../../img/samochod.svg';


class Icons extends Component {


    render() {
        return (
            <div className='icons'>
                <div className='content'>
                    <div className='row'>
                        <div className='icons__icon'>
                            <img src={building}/>
                            <p>ZNAKOMITA LOKALIZACJA</p>
                        </div>
                        <div className='icons__icon'>
                            <img src={layout}/>
                            <p>CIEKAWY ROZKŁAD</p>
                        </div>
                        <div className='icons__icon'>
                            <img src={car}/>
                            <p>ŁATWA PRZEPROWADZKA</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='icons__icon'>
                            <img src={building}/>
                            <p>ZNAKOMITA LOKALIZACJA</p>
                        </div>
                        <div className='icons__icon'>
                            <img src={layout}/>
                            <p>CIEKAWY ROZKŁAD</p>
                        </div>
                        <div className='icons__icon'>
                            <img src={car}/>
                            <p>ŁATWA PRZEPROWADZKA</p>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Icons;
