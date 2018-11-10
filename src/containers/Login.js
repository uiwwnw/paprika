import React, { Component } from 'react';
import LoginJoin from '../hoc/containers';
import * as Components from '../components/Components';
import { store, action } from '../reducers/index.js';
import commonStyle, { unit } from '../variables/style.js';
import styled from 'styled-components';
import { getPw } from '../../services/createCipher';
import { get } from '../../services/get';
import config from '../../config';
import { NavLink } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginSuccessPopup: false,
            loginFailPopup: false,
            loginFailPopupText: '',
            valid: true,
            id: null,
            pw: null,
        };
        this.submit = this.submit.bind(this);
        this.Login = styled.div`
            padding: ${commonStyle.paddingVertical} ${commonStyle.paddingHorizone};

            label + a,
            label + button {
                margin-top: ${unit(20)};
            }

            a,
            button {
                display: block;
                width: 100%;
                margin-top: ${unit(4)};
                line-height: ${unit(30)};
                border: 0;
                text-align: center;
                text-decoration: none;
                color: #fff;
                background: #000;
            }
        `;
    }
    submit() {
        if (this.props.check.apply(this)) {
            this.setState({
                loginFailPopup: !this.state.loginFailPopup,
                loginFailPopupText: '입력창을 모두 채워주세요.'
            });
        } else {
            get('users?id=' + this.state.id)
            .then(response => {
                const data = response.data[0];
                if (data === undefined) {
                    this.setState({
                        loginFailPopup: !this.state.loginFailPopup,
                        loginFailPopupText: '아이디를 찾을 수 없습니다.'
                    });
                    return false;
                }
                if (data.pw === this.state.pw) {
                    console.log('로그인에성공했습니다.');
                    store.dispatch(action.userInfo('USERINFO', {
                        'userId': getPw(data.id),
                        'userName': getPw(data.name),
                        'userPw': data.pw,
                        'userEmail': data.email,
                    }));
                    this.setState({
                        loginSuccessPopup: !this.state.loginSuccessPopup
                    })
                    // console.log(location);
                    // location.pathname = '/mypage';
                    // console.log(this.context.router);
                    // history.push();
                    // document.location.href = document.location.origin;
                    // window.history.back();
                } else {
                    this.setState({
                        loginFailPopup: !this.state.loginFailPopup,
                        loginFailPopupText: '비밀번호가 틀렸습니다. 다시 확인해주세요.'
                    });
                }
            })
            .catch(response => {
                this.setState({
                    loginFailPopup: !this.state.loginFailPopup,
                    loginFailPopupText: '서버상 문제로 로그인에 실패하였습니다.'
                });
                console.log(response, '로그인실패')
            });
        }
    }
    kakaologin(){
        // 로그인 창을 띄웁니다.
        
        Kakao.Auth.login({
            success: function(authObj) {
            alert(JSON.stringify(authObj));
            },
            fail: function(err) {
            alert(JSON.stringify(err));
            }
        });
    }

    render() {


        return (
            <this.Login>
                <h2>login</h2>
                <Components.Input title="아이디" type="text" onInput={this.props.input.bind(this, 'id')} />
                <Components.Input title="비밀번호" type="password" onInput={this.props.input.bind(this, 'pw')} />
                <button onClick={this.submit}>로그인하기</button>
                <NavLink to="/join">회원가입</NavLink>
                <Components.Popup
                    bool={this.state.loginSuccessPopup} 
                    positiveBtn={<NavLink to="/mypage">마이페이지</NavLink>}
                    negativeBtn={<NavLink to="/">메인페이지</NavLink>}
                >
                    로그인에 성공하였습니다.
                </Components.Popup>
                <Components.Popup
                    bool={this.state.loginFailPopup} 
                    close={true}
                >
                    {this.state.loginFailPopupText}
                </Components.Popup>
            </this.Login>
        )
    }
}
const withHocLogin = LoginJoin(Login);

export default withHocLogin;