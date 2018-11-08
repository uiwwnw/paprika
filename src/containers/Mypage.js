import React, { Component } from 'react';
import * as Components from '../components/Components';
import commonStyle, { unit } from '../variables/style.js';
import { store, action } from '../reducers/index.js';
import styled from 'styled-components';
import {getPw} from '../../services/createCipher';
import { get } from '../../services/get';
// import { positions } from '../../data/index.json';
import { NavLink } from 'react-router-dom';



export default class Mypage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: store.getState().userName,
            userId: store.getState().userId,
            userPw: store.getState().userPw,
            userEmail: store.getState().userEmail,
            popup: false,
            positions: null
        };
        this.Mypage = styled.div`
            padding: ${commonStyle.paddingVertical} ${commonStyle.paddingHorizone};
        `;
    }

    componentDidMount(){
        // console.log(store.getState().userName);
        this.setState({
            userName: store.getState().userName,
            userId: store.getState().userId,
            userPw: store.getState().userPw,
            userEmail: store.getState().userEmail,
            popup: this.state.userName === null?true:false
        });
        get('positions?owner=' + this.state.userId)
            .then(response => {
                this.setState({
                    positions: response.data
                });
            })
            .catch(response => {
                console.log(response, '로그인실패')
            });
    }

    render() {
        return (
            <this.Mypage>
                <h2>마이페이지</h2>
                <h3>{this.state.userName}</h3>
                {this.state.positions?<Components.List positions={this.state.positions} />:''}
                <Components.Popup 
                    bool={this.state.popup}
                    title="로그인 안내 메세지"
                >
                    아직, 로그인 전입니다.<br/>
                    파프리카의 서비스 이용을 위해 <br/>
                    로그인해주세요^^<br/>
                    <NavLink to="/login">로그인</NavLink>
                    <NavLink to="/join">회원가입</NavLink>
                </Components.Popup>
            </this.Mypage>
        )
    }
}