import React, {Component} from 'react';

class About extends Component {
    render() {
        return (
            <div className='about'>
                <div className='content'>
                    <div className='about__header'>
                        <h4>WIĘCEJ O NAS</h4>
                        <div className='under_line'/>
                        <h3>Podobno cyferki sprzedają :)</h3>
                        <p>All alone! Whether you like it or not, alone is something you'll be quite a lot!</p>
                    </div>
                    <div className='about__numbers'>
                        <div className='about__numbers_number'>
                            <p className='number'>633</p>
                            <div className='under_line'/>
                            <p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCIN</p>
                        </div>
                        <div className='about__numbers_number'>
                            <p className='number'>495</p>
                            <div className='under_line'/>
                            <p>ADIPISCING ELIT. ALIQUAM AT PORTTITOR SEM.  ALIQUAM ERAT VOLUTPAT.</p>
                        </div>
                        <div className='about__numbers_number'>
                            <p className='number'>15</p>
                            <div className='under_line'/>
                            <p>ADIPISCING ELIT. ALIQUAM AT PORTTITOR SEM.  ALIQUAM ERAT VOLUTPAT</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
