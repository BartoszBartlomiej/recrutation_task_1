import React, {Component} from 'react';

import post1 from './../../img/wpis-1.jpg';
import post1overlay from './../../img/wpis-1-overlay.jpg'
import post2 from './../../img/wpis-2.jpg';
import post2overlay from './../../img/wpis-2-overlay.jpg'

class Blog extends Component {
    render() {
        return (
            <div className='blog'>
                <div className='content'>
                    <div className='blog__post_one'>
                        <div className='blog__post_one__img'>
                            <img className='post1overlay' src={post1overlay}/>
                            <img className='post1' src={post1}/>
                        </div>
                        <div className='blog__post_one__text'>
                            <p className='topic'>BARDZO CIEKAWY WPIS NA NASZYM BLOGU, KTÓREGO PEWNIE NIKT NIE PRZECZYTA</p>
                            <div className='under_line'/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.
                                Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.
                            </p>
                            <button>Więcej</button>
                        </div>
                    </div>
                    <div className='blog__post_two'>
                        <div className='blog__post_one__img'>
                            <img className='post1overlay' src={post2overlay}/>
                            <img className='post1' src={post2}/>
                        </div>
                        <div className='blog__post_two__text'>
                            <p className='topic'>BARDZO CIEKAWY WPIS NA NASZYM BLOGU, KTÓREGO PEWNIE NIKT NIE PRZECZYTA</p>
                            <div className='under_line'/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.
                                Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.
                            </p>
                            <button>Więcej</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;
