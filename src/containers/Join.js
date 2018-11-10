import React, { Component } from 'react';
import LoginJoin from '../hoc/containers';
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
            joinFailPopupText: '',
            valid: true,
            id: null,
            pw: null,
            rpw: null,
            email: null,
            name: null
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
            this.setState({
                joinFailPopup: !this.state.joinFailPopup,
                joinFailPopupText: '모두 작성되지 않았습니다.'
            });
        } else if (this.state.pw !== this.state.rpw) {
            this.setState({
                joinFailPopup: !this.state.joinFailPopup,
                joinFailPopupText: '비밀번호가 동일하지 않습니다.'
            });
        } else {
            get('users?id=' + this.state.id)
            .then(response => {
                const data = response.data[0];
                if(data.id === this.state.id) {
                    this.setState({
                        joinFailPopup: !this.state.joinFailPopup,
                        joinFailPopupText: '동일한 아이디가 존재합니다.'
                    });
                    return false;
                }
            })
            .catch(response => {
                post('users/', {
                    'id': this.state.id,
                    'pw': this.state.pw,
                    'email': this.state.email,
                    'name': this.state.name
                })
                .then(response => {
                    store.dispatch(action.userInfo('USERINFO', {
                        'joined': true,
                    }));
                    this.setState({
                        joinSuccessPopup: !this.state.joinSuccessPopup
                    });
                    
                })
                .catch(response => {
                    console.log(response, '회원가입실패')
                });
            });
            // if(this.state.id === )
            
        }
    }

    render() {
        return (
            <this.Join>
                <h2>login</h2>
                <Components.Input title="이름" type="text" onInput={this.props.input.bind(this, 'name')}/>
                <Components.Input title="아이디" type="text" onInput={this.props.input.bind(this, 'id')} />
                <Components.Input title="비밀번호" type="password" onInput={this.props.input.bind(this, 'pw')}/>
                <Components.Input title="비밀번호확인" type="password" onInput={this.props.input.bind(this, 'rpw')}/>
                <Components.Input title="이메일" type="email" onInput={this.props.input.bind(this, 'email')}/>
                {/* <input type="text" onInput={this.props.input.bind(this, 'id')} />
                <input type="password" onInput={this.props.input.bind(this, 'pw')} /> */}
                <Components.Popup
                    bool={this.state.joinSuccessPopup} 
                    positiveBtn={<NavLink to="/login">로그인페이지</NavLink>}
                    negativeBtn={<NavLink to="/">메인페이지</NavLink>}
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
const withHocJoin = LoginJoin(Join);

export default withHocJoin;