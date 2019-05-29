import React, {Component} from 'react';
import project from "../../../img/rzut.png";
import position from "../../../img/polozenie.png";

class Investmet extends Component {



    render() {
        const info = this.props.investment;
        console.log(this.props.investment);
        return (
            <div className='find__investment'>
                <div className='find__investment__description'>
                    <div>
                        <h2>{info.nazwa}</h2>
                        <div className='under_line'/>
                        <ul>
                            <li>Metraż: {info.metraz} m2</li>
                            <li>Cena netto: {info.netto} zł*</li>
                            <li className='smaller_text'>* cena nie zawiera 23% VAT</li>
                            <li>Pietro: {info.pietro} - Parter</li>
                            <li>Przeznaczenie: {info.przeznaczenie}</li>
                            <li>Status: {info.status}</li>
                        </ul>
                        <div className='find__investment__buttons'>
                            <button>
                                <a href='/#ask'> Zapytaj</a>
                            </button>
                            <button>Pobierz plan</button>
                        </div>
                    </div>
                    <img className='project' src={info.obrazki.rzut}/>
                    <div className='building'>
                        <div className='north'>
                            <p>N</p>
                            <div className='north__line'/>
                            <div className='north__circle'/>
                        </div>
                        <img src={info.obrazki.pietro} className='building__project'/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Investmet;
