import React, {Component} from 'react';

import form1 from './../../img/form1.jpg';

class FirstContact extends Component {
    render() {
        return (
            <div id='ask' className='firstContact'>
                <div className='content'>
                    <img src={form1}/>
                    <div className='firstContact__form'>
                        <h2>Zainteresowany kupnem? Zostaw numer!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.</p>
                        <form action="mailto:bartosz.lewicki@gmail.com" method="post" enctype="text/plain">
                            <input type='text' name='name' placeholder="Imię i nazwisko"/>
                            <br/>
                            <input type='text' name='phoneNumber' placeholder='Telefon'/>
                            <br/>
                            <input type='text' name='call' placeholder='Kiedy najlepiej zadzwonić'/>
                            <br/>
                            <label>
                                <input id='check' type='checkbox'/>
                                <span className='checkmark'/>
                            </label>
                            <p className='permission'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu
                                condimentum sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <label>
                                <input id='check' type='checkbox'/>
                                <span className='checkmark'/>
                            </label>
                            <p className='permission'>Nervous, aren't you? I can see it in your soul. I can feel it in
                                your bones. This unnerving feeling going through your spine.</p>
                            <button type='submit'>Wyślij</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default FirstContact;
