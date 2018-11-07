import React, { Component } from 'react';
import commonStyle, { unit } from '../variables/style.js';
import { store, action } from '../reducers/index.js';
import styled from 'styled-components';

export default class Mypage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: store.getState().userName,
            userId: store.getState().userId,
            userPw: store.getState().userPw,
            userEmail: store.getState().userEmail,
        };
        this.Mypage = styled.div`
            padding: ${commonStyle.paddingVertical} ${commonStyle.paddingHorizone};
        `;
    }

    componentWillMount(){
        this.setState({
            userName: store.getState().userName,
            userId: store.getState().userId,
            userPw: store.getState().userPw,
            userEmail: store.getState().userEmail,
        });
        if(Object.values(this.state).indexOf(null) !== -1) {
            document.location.href = document.location.origin + '/login/';
        }
    }

    render() {
        return (
            <this.Mypage>
                <h2>마이페이지</h2>
                <h3>{this.state.userName}</h3>
                {/* <h1
                    onClick={ this.onClick1.bind(this) }
                > {this.state.aaa} </h1>
                <h1
                    onClick={ this.onClick2.bind(this) }
                > {this.props.store.getState().value} </h1> */}
            </this.Mypage>
        )
    }
}