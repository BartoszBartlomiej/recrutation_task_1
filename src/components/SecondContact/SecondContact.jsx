import React, {Component} from 'react';

class SecondContact extends Component {
    render() {
        return (
            <div className='secondContact'>
                <div className='content'>
                    <div className='secondContact__header'>
                        <h4>KONTAKT</h4>
                        <div className='under_line'/>
                        <h3>Napisz do nas!</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.</p>
                    </div>
                    <form>
                        <div>
                        <input type='text' name='name' placeholder="Imię i nazwisko"/>
                        {/*<br/>*/}
                        <input type='text' name='phoneNumber' placeholder='Telefon lub adres email'/>
                        </div>
                        <br/>
                        <input className='message' type='text' name='call' placeholder='Twoja wiadomość'/>
                        <br/>
                        <label>
                            <input id='check' type='checkbox'/>
                            <span className='checkmark'/>
                        </label>
                        <p className='permission'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
                            porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu
                            condimentum sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
                            porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu
                            condimentum sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
                            porttitor sem. Aliquam erat volutpat. D</p>
                        <label>
                            <input id='check' type='checkbox'/>
                            <span className='checkmark'/>
                        </label>
                        <p className='permission'>If you're reading this there's something not quite right with you. And
                            that's fantastic. Believe in yourself because we already do.</p>
                        <button type='button'>Wyślij</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default SecondContact;
