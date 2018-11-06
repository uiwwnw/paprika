import React, { Component } from 'react';
import styled from 'styled-components';
import commonStyle, { unit } from '../variables/style.js';

export default class Input extends Component {
    constructor(props) {
        super(props);
        
        this.Input = styled.label`
            display: block;
        `;
    }

    render() {
        return (
            <this.Input>
                {this.props.title?<span>{this.props.title}</span>:''}
                <input 
                    type={this.props.type?this.props.type:'text'} 
                    name={this.props.name?this.props.name:''} 
                    onInput={this.props.onInput} 
                />
            </this.Input>
        )
    }
}