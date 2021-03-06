import React, { Component } from 'react';
import InputValid from '../hoc/containers';
import * as Components from '../components/Components';
import { store, action } from '../reducers/index.js';
import commonStyle, { unit, sc } from '../variables/style.js';
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
            valid: {
                id: {
                    value: null,
                    alert: null
                },
                pw: {
                    value: null,
                    alert: null
                }
            }
        };
        this.submit = this.submit.bind(this);
        this.Login = styled.div`
            padding: ${commonStyle.paddingVertical} ${commonStyle.paddingHorizone};

            label + a,
            label + button {
                margin-top: ${unit(20)};
            }
        `;
        this.NavLink = styled(NavLink)`${sc._FullBtn[1]}`;
    }
    submit() {
        if (this.props.check.apply(this)) {
            let alert = null;
            Object.values(this.state.valid).map((e)=>{
                if (e.alert !== true && e.alert !== null) {
                    alert = e.alert;
                }
            });
            this.setState({
                loginFailPopup: !this.state.loginFailPopup,
                loginFailPopupText: alert === null?'입력창이 비어있습니다.':alert
            });
        } else {
            get('users/' + this.state.valid.id.value)
            .then(response => {
                const data = response.data;
                if (data === undefined) {
                    this.setState({
                        loginFailPopup: !this.state.loginFailPopup,
                        loginFailPopupText: '아이디를 찾을 수 없습니다.'
                    });
                    return false;
                }
                if (data.pw === this.state.valid.pw.value) {
                    store.dispatch(action.userInfo('USERINFO', {
                        'userId': data.id,
                        'userName': data.name,
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
    // console.log(sc.FullBtn, sc.FullBtn.lastClassName);
        return (
            <this.Login>
                <h2>login</h2>
                <Components.Input title="아이디" type="text" onInput={this.props.input.bind(this, 'id')} />
                <Components.Input title="비밀번호" type="password" onInput={this.props.input.bind(this, 'pw')} />
                <sc.FullBtn onClick={this.submit}>로그인하기</sc.FullBtn>
                <this.NavLink to="/join">회원가입</this.NavLink>
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
const withHocLogin = InputValid(Login);

export default withHocLogin;