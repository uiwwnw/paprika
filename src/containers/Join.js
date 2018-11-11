import React, { Component } from 'react';
import InputValid from '../hoc/containers';
import * as Components from '../components/Components';
import { store, action } from '../reducers/index.js';
import commonStyle, { unit } from '../variables/style.js';
import styled from 'styled-components';
import { getPw } from '../../services/createCipher';
import { get } from '../../services/get';
import { post } from '../../services/post';
import config from '../../config';
import { NavLink } from 'react-router-dom';


class Join extends Component {
    constructor(props) {
        super(props);
        this.state = {
            joinSuccessPopup: false,
            joinFailPopup: false,
            joinFailPopupText: '입력창이 비어있습니다.',
            valid: {
                id: {
                    value: null,
                    alert: null
                },
                pw: {
                    value: null,
                    alert: null
                },
                rpw: {
                    value: null,
                    alert: null
                },
                email: {
                    value: null,
                    alert: null
                },
                name: {
                    value: null,
                    alert: null
                }
            }
        };
        this.submit = this.submit.bind(this);
        this.Join = styled.div`
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
    // componentWillMount(){
    //     if(store.getState().joined === true) {

    //     }
    // }
    submit() {
        // console.log( document.location);
        if (this.props.check.apply(this)) {
            let alert;
            Object.values(this.state.valid).map((e)=>{
                if (e.alert !== null) {
                    alert = e.alert;
                }
            });
            this.setState({
                joinFailPopup: !this.state.joinFailPopup,
                joinFailPopupText: alert === undefined?this.state.joinFailPopupText:alert
            });
        } else {
            post('users/', {
                'id': this.state.valid.id.value,
                'pw': this.state.valid.pw.value,
                'email': this.state.valid.email.value,
                'name': this.state.valid.name.value
            })
            .then(() => {
                store.dispatch(action.userInfo('USERINFO', {
                    'joined': true,
                }));
                alert('회원가입이 완료되었습니다.');
                location.pathname = '/login';
            })
            .catch((response) => {
                console.log(response);
            });
        }
    }

    render() {
        return (
            <this.Join>
                <h2>join</h2>
                <Components.Input title="이름" type="text" onInput={this.props.input.bind(this, 'name')} />
                <Components.Input title="아이디" type="text" onInput={this.props.input.bind(this, 'id')} />
                <Components.Input title="비밀번호" type="password" onInput={this.props.input.bind(this, 'pw')}/>
                <Components.Input title="비밀번호확인" type="password" onInput={this.props.input.bind(this, 'rpw')}/>
                <Components.Input title="이메일" type="email" onInput={this.props.input.bind(this, 'email')}/>
                {/* <input type="text" onInput={this.props.input.bind(this, 'id')} />
                <input type="password" onInput={this.props.input.bind(this, 'pw')} /> */}
                <Components.Popup
                    bool={this.state.joinSuccessPopup} 
                    // width="250"
                    // positiveBtn={<NavLink to="/login">로그인페이지</NavLink>}
                    // negativeBtn={<NavLink to="/">메인페이지</NavLink>}
                >
                    회원가입성공
                </Components.Popup>
                <Components.Popup
                    bool={this.state.joinFailPopup} 
                    close={true}
                >
                    {this.state.joinFailPopupText}
                </Components.Popup>
                <button onClick={this.submit}>회원가입</button>
            </this.Join>
        )
    }
}
const withHocJoin = InputValid(Join);

export default withHocJoin;