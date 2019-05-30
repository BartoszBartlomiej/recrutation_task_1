import React, {Component} from 'react';

import CountUp from 'react-countup';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        };
        this.aboutElem = React.createRef()
    }

    handleScroll = () => {

        const offsetTop = this.aboutElem.current.offsetTop;

        const currentScrollPos = window.pageYOffset + window.innerHeight / 2;
        const isVisible = offsetTop <= currentScrollPos;

        this.setState({
            isVisible: isVisible
        }, () => {
            console.log(offsetTop, isVisible);
        });
    };

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }


    render() {

        if (this.state.isVisible) {

            return (
                <div ref={this.aboutElem} className='about'>
                    <div className='content'>
                        <div className='about__header'>
                            <h4>WIĘCEJ O NAS</h4>
                            <div className='under_line'/>
                            <h3>Podobno cyferki sprzedają :)</h3>
                            <p>All alone! Whether you like it or not, alone is something you'll be quite a lot!</p>
                        </div>
                        <div className='about__numbers'>
                            <div className='about__numbers_number'>
                                <p className='number'><CountUp end={633} duration={4} delay={0.5}/></p>
                                <div className='under_line'/>
                                <p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCIN</p>
                            </div>
                            <div className='about__numbers_number'>
                                <p className='number'><CountUp end={495} duration={4} delay={0.7}/></p>
                                <div className='under_line'/>
                                <p>ADIPISCING ELIT. ALIQUAM AT PORTTITOR SEM. ALIQUAM ERAT VOLUTPAT.</p>
                            </div>
                            <div className='about__numbers_number'>
                                <p className='number'><CountUp end={15} duration={4} delay={0.9}/></p>
                                <div className='under_line'/>
                                <p>ADIPISCING ELIT. ALIQUAM AT PORTTITOR SEM. ALIQUAM ERAT VOLUTPAT</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div ref={this.aboutElem} className='about'>
                    <div className='content'>
                        <div className='about__header'>
                            <h4>WIĘCEJ O NAS</h4>
                            <div className='under_line'/>
                            <h3>Podobno cyferki sprzedają :)</h3>
                            <p>All alone! Whether you like it or not, alone is something you'll be quite a lot!</p>
                        </div>
                        <div className='about__numbers'>
                            <div className='about__numbers_number'>
                                <p className='number'>0</p>
                                <div className='under_line'/>
                                <p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCIN</p>
                            </div>
                            <div className='about__numbers_number'>
                                <p className='number'>0</p>
                                <div className='under_line'/>
                                <p>ADIPISCING ELIT. ALIQUAM AT PORTTITOR SEM. ALIQUAM ERAT VOLUTPAT.</p>
                            </div>
                            <div className='about__numbers_number'>
                                <p className='number'>0</p>
                                <div className='under_line'/>
                                <p>ADIPISCING ELIT. ALIQUAM AT PORTTITOR SEM. ALIQUAM ERAT VOLUTPAT</p>
                            </div>
                        </div>
                    </div>
                </div>

            )
        }
    }
}

export default About;
