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
                padding: 0 ${unit(10)};
                line-height: ${unit(30)};
                color: #ddd;
                pointer-events: none;

                &:before {
                    transition: .6s;
                    content: attr(data-placeholder);
                }
            }

            input {
                flex: 1;
                width: 100%;
                height: ${unit(30)};
                margin: 0;
                padding: 0 ${unit(4)};
                border: ${unit(1)} solid #000;
                color: #000;
                box-sizing: border-box;
                transition: .6s width;
            }

            &.focus {
                display: flex;

                span {
                    position: static;

                    &:before {
                        color: #000;
                        content: attr(data-title);
                    }
                }

                input {
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

    input(t, e) {
        let cipher = setPw(e.target.value.trim());
        let valid = null;
        const krPattern = /([^가-힣\x20])/i;
        const namePattern = /([^가-힣\x20a-zA-Z])/i; 
        const emailPattern = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        const nbPattern = /[0-9]/;
        const enPattern = /[a-zA-Z]/;
        const idPattern = /([^A-Za-z0-9])/i; 
        switch(t) {
            case 'id':
                if(idPattern.test(e.target.value)) {
                    valid = '아이디는 영문, 숫자만 입력가능합니다.';
                }
                break;
            case 'name':
                if(namePattern.test(e.target.value)) {
                    valid = '이름은 한글 또는 영문만 가능합니다.';
                }
                break;
            case 'rpw':
                if(this.state.valid.pw.value !== cipher) {
                    valid = '비밀번호가 일치하지 않습니다.'
                }
                break;
            case 'email':
                if(emailPattern.test(e.target.value)) {
                    valid = '이메일형식이 올바르지 않습니다.';
                }
                break;
        };
        // console.log(this.state.valid);
        let state = this.state.valid;
        state[t] = {
            value: e.target.value.length > 0?cipher:null,
            alert: valid
        };
        this.setState({
            valid: state
        });
    };

    check() {
        const value = Object.values(this.state.valid);
        let result = false;
        // const value = Object.values(this.state.valid).indexOf(null, validIdx) === -1;
        value.map((e)=>{
            if (e.alert !== null) {
                result = true;
            }
        });
        return result;
        // return !value;
        // if (Object.values(this.state).indexOf(null, validIdx) === -1) {
        //     this.setState({
        //         valid: false
        //     });
        // } else {
        //     this.setState({
        //         valid: true
        //     });
        // }
    }
    
    render() {
        return (
            <this.Input>
                {this.props.title?<span data-title={this.props.title} data-placeholder={this.props.placeholder?this.props.placeholder:this.props.title}></span>:''}
                <input 
                    type={this.props.type?this.props.type:'text'} 
                    name={this.props.name?this.props.name:this.props.title} 
                    onInput={this.props.onInput} 
                    onFocus={this.focus}
                    onBlur={this.blur}
                    // onChange={this.props.onInput}
                />
            </this.Input>
        )
    }
}