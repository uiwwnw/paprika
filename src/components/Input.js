import React, { Component } from 'react';
import styled from 'styled-components';
import commonStyle, { unit } from '../variables/style.js';

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.focus = this.focus.bind(this);
        this.blur = this.blur.bind(this);
        this.Input = styled.label`
            position: relative;
            display: block;
            margin: ${unit(4)} 0;

            span {
                position: absolute;
                padding-left: ${unit(10)};
                line-height: ${unit(30)};
                color: #000;
                pointer-events: none;
                transition: .6s;
            }

            input {
                width: 100%;
                height: ${unit(30)};
                margin: 0;
                padding: 0 ${unit(4)};
                box-sizing: border-box;
                flex: 1;
                transition: .6s;
                border: 0;
            }

            &.focus {
                display: flex;

                span {
                    position: static;
                    padding-right: ${unit(10)};
                    color: #fff;
                }
            }
        `;
    }

    focus(e) {
        const parent = e.target.parentNode;
        parent.classList.add('focus');
    }

    blur(e) {
        const value = e.target.value;
        if (value.length !== 0) {
            return false;
        };
        const parent = e.target.parentNode;
        parent.classList.remove('focus');
    }

    render() {
        return (
            <this.Input>
                {this.props.title?<span>{this.props.title}</span>:''}
                <input 
                    type={this.props.type?this.props.type:'text'} 
                    name={this.props.name?this.props.name:''} 
                    onInput={this.props.onInput} 
                    onFocus={this.focus}
                    onBlur={this.blur}
                />
            </this.Input>
        )
    }
}