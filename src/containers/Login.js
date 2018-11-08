import React, { Component } from 'react';
import LoginJoin from '../hoc/containers';
import * as Components from '../components/Components';
import { store, action } from '../reducers/index.js';
import commonStyle, { unit } from '../variables/style.js';
import styled from 'styled-components';
import {getPw} from '../../services/createCipher';
import { get } from '../../services/get';
import { NavLink } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popup: false,
            valid: true,
            id: null,
            pw: null,
        };
        this.submit = this.submit.bind(this);
        this.Login = styled.div`
            padding: ${commonStyle.paddingVertical} ${commonStyle.paddingHorizone};
        `;
    }
    submit() {
        if (this.state.valid) {
            alert('아이디, 비밀번호를 다시확인해주세요')
        } else {
            get('users?id=' + this.state.id)
            .then(response => {
                const data = response.data[0];
                if (data.pw === this.state.pw) {
                    console.log('로그인에성공했습니다.');
                    store.dispatch(action.userInfo('USERINFO', {
                        'userId': getPw(data.id),
                        'userName': getPw(data.name),
                        'userPw': data.pw,
                        'userEmail': data.email,
                    }));
                    this.setState({
                        popup: true
                    })
                    // console.log(location);
                    // location.pathname = '/mypage';
                    // console.log(this.context.router);
                    // history.push();
                    // document.location.href = document.location.origin;
                    // window.history.back();
                } else {
                    alert('아이디, 비밀번호를 다시확인해주세요')
                }
            })
            .catch(response => {
                console.log(response, '로그인실패')
            });
        }
    }

    render() {
        return (
            <this.Login>
                <h1>login</h1>
                <Components.Input title="아이디" type="text" onInput={this.props.input.bind(this, 'id')} />
                <Components.Input title="비밀번호" type="password" onInput={this.props.input.bind(this, 'pw')}/>
                {/* <input type="text" onInput={this.props.input.bind(this, 'id')} />
                <input type="password" onInput={this.props.input.bind(this, 'pw')} /> */}
                <button onClick={this.submit}>로그인하기</button>
                <NavLink to="/mypage">회원가입</NavLink>
                <Components.Popup
                    bool={this.state.popup} 
                    title="로그인성공" 
                >
                    
                    <NavLink to="/mypage">마이페이지로 이동하기</NavLink>
                    <NavLink to="/">메인페이지로 이동하기</NavLink>
                </Components.Popup>
            </this.Login>
        )
    }
}
const withHocLogin = LoginJoin(Login);

export default withHocLogin;