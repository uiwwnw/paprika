import React, { Component } from 'react';
import LoginJoin from '../hoc/containers';
import * as Components from '../components/Components';
import { store, action } from '../reducers/index.js';
import commonStyle, { unit } from '../variables/style.js';
import styled from 'styled-components';
import { get } from '../../services/get';


class Join extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valid: true,
            id: null,
            pw: null,
            name: null
        };
        this.submit = this.submit.bind(this);
        this.Join = styled.div`
            padding: ${commonStyle.paddingVertical} ${commonStyle.paddingHorizone};
        `;
    }
    submit() {
        if (this.state.valid) {
            alert('아이디, 비밀번호를 다시확인해주세요')
        } else {
            get('users?id=' + this.state.id)
            .then(response => {
                if (response.data[0].pw === this.state.pw) {
                    console.log('로그인에성공햇습니다.');
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
            <this.Join>
                <h1>join</h1>
                <Components.Input title="아이디" type="text" onInput={this.props.input.bind(this, 'id')} />
                <Components.Input title="비밀번호" type="password" onInput={this.props.input.bind(this, 'pw')}/>
                {/* <input type="text" onInput={this.props.input.bind(this, 'id')} />
                <input type="password" onInput={this.props.input.bind(this, 'pw')} /> */}
                <button onClick={this.submit}>회원가입</button>
            </this.Join>
        )
    }
}
const withHocJoin = LoginJoin(Join);

export default withHocJoin;