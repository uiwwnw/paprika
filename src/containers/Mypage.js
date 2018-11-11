import React, { Component } from 'react';
import * as Components from '../components/Components';
import commonStyle, { unit } from '../variables/style.js';
import { store, action } from '../reducers/index.js';
import InputValid from '../hoc/containers';
import styled from 'styled-components';
import { getPw } from '../../services/createCipher';
import { get } from '../../services/get';
// import { positions } from '../../data/index.json';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Mypage extends Component {
    constructor(props) {
        super(props);
        this.edit = this.edit.bind(this);
        this.state = {
            userName: store.getState().userName,
            userId: store.getState().userId,
            userPw: store.getState().userPw,
            userEmail: store.getState().userEmail,
            edit: false,
            noLoginPopup: false,
            positions: null,
            valid: true,
            name: null,
            pw: null,
            rpw: null,
            email: null
        };
        this.Mypage = styled.div`
            padding: ${commonStyle.paddingVertical} ${commonStyle.paddingHorizone};

            h3 {
                .editBtn {
                    float: right;
                }
            }
        `;
    }
    edit() {
        this.setState({
            edit: true
        })
    }

    componentDidMount(){
        // console.log(store.getState().userName);
        this.setState({
            noLoginPopup: this.state.userName === null?true:false
        });
        get('positions?owner=' + this.state.userId)
            .then(response => {
                this.setState({
                    propsitions: response.data
                });
            })
            .catch(response => {
                console.log(response, '로그인실패')
            });
    }

    render() {
        
        return (
            <this.Mypage>
                <h2>mypage</h2>
                {this.state.userName&&!this.state.edit?<h3>{this.state.userName}<button onClick={this.edit} className="editBtn"><FontAwesomeIcon icon="pencil-alt"></FontAwesomeIcon></button></h3>:''}
                {this.state.propsitions&&!this.state.edit?<Components.List className="editAble" positions={this.state.propsitions} />:''}
                {this.state.edit?
                <div>
                    <Components.Input title="이름" type="text" onInput={this.props.input.bind(this, 'name')} />
                    <Components.Input title="비밀번호" type="password" onInput={this.props.input.bind(this, 'pw')} />
                    <Components.Input title="비밀번호확인" type="password" onInput={this.props.input.bind(this, 'rpw')} />
                    <Components.Input title="이메일" type="email" onInput={this.props.input.bind(this, 'email')} />
                </div>
                :''}
                <Components.Popup 
                    bool={this.state.noLoginPopup}
                    title="로그인 안내 메세지"
                    positiveBtn={<NavLink to="/login">로그인</NavLink>}
                    negativeBtn={<NavLink to="/join">회원가입</NavLink>}
                >
                    아직, 로그인 전입니다.<br/>
                    파프리카의 서비스 이용을 위해 <br/>
                    로그인해주세요^^<br/>
                </Components.Popup>
            </this.Mypage>
        )
    }
}

const withHocMypage = InputValid(Mypage);

export default withHocMypage;