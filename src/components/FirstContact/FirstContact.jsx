import React, {Component} from 'react';

import form1 from './../../img/form1.jpg';

class FirstContact extends Component {
    render() {
        return (
            <div className='firstContact'>
                <div className='content'>
                    <img src={form1}/>
                    <div className='firstContact__form' >
                        <h2>Zainteresowany kupnem?

                            Zostaw numer!</h2>
                    </div>

                </div>

            </div>
        );
    }
}

export default FirstContact;
