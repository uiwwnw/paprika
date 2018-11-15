import React, { Component } from 'react';
import {setPw} from '../../services/createCipher';

const InputValid = (Component) => {
    class _InputValid extends Component {
        input(t, e) {
            let value = e.target.value;
            let cipher = setPw(value.trim());
            let currentValue = value;
            let valid = true;
            const krPattern = /([^가-힣\x20])/i;
            const namePattern = /([^가-힣\x20a-zA-Z])/i; 
            const emailPattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
            const nbPattern = /[0-9]/;
            const enPattern = /[a-zA-Z]/;
            const idPattern = /([^A-Za-z0-9])/i; 
            switch(t) {
                case 'id':
                    // currentValue = value;
                    if(idPattern.test(value)) {
                        valid = '아이디는 영문, 숫자만 입력가능합니다.';
                    }
                    break;
                case 'name':
                    if(namePattern.test(value)) {
                        valid = '이름은 한글 또는 영문만 가능합니다.';
                    }
                    break;
                case 'pw':
                    currentValue = cipher;
                    break;
                case 'rpw':
                    currentValue = cipher;
                    if(this.state.valid.pw.value !== currentValue) {
                        valid = '비밀번호가 일치하지 않습니다.'
                    }
                    break;
                case 'email':
                    // currentValue = value;
                    if(value.match(emailPattern) === null) {
                        valid = '이메일형식이 올바르지 않습니다.';
                    }
                    break;
            };
            // console.log(this.state.valid);
            let state = this.state.valid;
            state[t] = {
                value: value.length > 0?currentValue:null,
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
                if (e.alert !== true) {
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
                <Component input={this.input} check={this.check} />
            )
        }
    }
    return _InputValid
}

export default InputValid;