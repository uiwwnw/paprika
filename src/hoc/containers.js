import React, { Component } from 'react';
import {setPw} from '../../services/createCipher';

const InputValid = (Component) => {
    class _InputValid extends Component {
        input(t, e) {
            let cipher = setPw(e.target.value.trim());
            let valid = null;
            const krPattern = /([^가-힣\x20])/i;
            const namePattern = /([^가-힣\x20a-zA-Z])/i; 
            const emailPattern = /[-!#$%&'*+/^_~{}|0-9a-zA-Z]+(.[-!#$%&'*+/^_~{}|0-9a-zA-Z]+)*@[-!#$ %&'*+/^_~{}|0-9a-zA-Z]+(.[-!#$%&'*+/^_~{}|0-9a-zA-Z]+)*/;
            const nbPattern = /[0-9]/;
            const enPattern = /[a-zA-Z]/;
            const idPattern = /[0-9a-zA-Z]/;
            switch(t) {
                case 'id':
                    if(idPattern.test(e.target.value)) {
                        valid = '아이디는 영문, 숫자만 입력가능합니다.';
                    }
                    // if ()
                    // 중복된 아이디 체크
                    break;
                case 'name':
                    if(namePattern.test(e.target.value)) {
                        valid = '이름은 한글 또는 영문만 가능합니다.';
                    }
                    break;
                case 'rpw':
                    if(this.state.pw !== cipher) {
                        valid = '비밀번호가 일치하지 않습니다.'
                    }
                    break;
                case 'email':
                    if(emailPattern.test(e.target.value)) {
                        valid = '이메일형식이 올바르지 않습니다.';
                    }
                    break;
            }
            this.setState({
                valid: {
                    [t]: {
                        value: e.target.value.length > 0?cipher:null,
                        alert: valid
                    }
                }
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