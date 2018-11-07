import React, { Component } from 'react';
import LoginJoin from '../hoc/containers';
import * as Components from '../components/Components';
import { store, action } from '../reducers/index.js';
import commonStyle, { unit } from '../variables/style.js';
import styled from 'styled-components';
import { post } from '../../services/post';


class Join extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        `;
    }
    submit() {
        // console.log( document.location);
        if (this.state.valid || (this.state.pw !== this.state.rpw)) {
            alert('아이디, 비밀번호, 이메일을 다시확인해주세요')
        } else {
            post('users/', {
                'id': this.state.id,
                'pw': this.state.pw,
                'email': this.state.email,
                'name': this.state.name
            })
            .then(response => {
                alert('회원가입이 정상적으로 완료되었습니다.');
                document.location.href = document.location.origin + '/login/';
            })
            .catch(response => {
                console.log(response, '회원가입실패')
            });
        }
    }

    render() {
        return (
            <this.Join>
                <h1>join</h1>
                <Components.Input title="이름" type="text" onInput={this.props.input.bind(this, 'name')}/>
                <Components.Input title="아이디" type="text" onInput={this.props.input.bind(this, 'id')} />
                <Components.Input title="비밀번호" type="password" onInput={this.props.input.bind(this, 'pw')}/>
                <Components.Input title="비밀번호확인" type="password" onInput={this.props.input.bind(this, 'rpw')}/>
                <Components.Input title="이메일" type="mail" onInput={this.props.input.bind(this, 'email')}/>
                {/* <input type="text" onInput={this.props.input.bind(this, 'id')} />
                <input type="password" onInput={this.props.input.bind(this, 'pw')} /> */}
                <button onClick={this.submit}>회원가입</button>
            </this.Join>
        )
    }
}
const withHocJoin = LoginJoin(Join);

export default withHocJoin;