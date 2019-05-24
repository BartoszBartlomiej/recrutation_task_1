import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
    render(){
        return (
        <div className="wrap">
            <a href="#" className="btn btn-green">{this.props.children}</a>
        </div>
      )
    }
}

export default Button;
