import React, { Component } from 'react';
import LoginJoin from '../hoc/containers';
import * as Components from '../components/Components';
import { store, action } from '../reducers/index.js';
import commonStyle, { unit } from '../variables/style.js';
import styled from 'styled-components';
import { post } from '../../services/post';
import { get } from '../../services/get';


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
    // componentWillMount(){
    //     if(store.getState().joined === true) {

    //     }
    // }
    submit() {
        // console.log( document.location);
        if (this.state.valid || (this.state.pw !== this.state.rpw)) {
            alert('아이디, 비밀번호, 이메일을 다시확인해주세요')
        } else {
            get('users?id=' + this.state.id)
            .then(response => {
                const data = response.data[0];
                if(data.id === this.state.id) {
                    alert('동일한 아이디가 존재합니다.')
                    return false;
                }
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
                    alert('회원가입이 정상적으로 완료되었습니다.');
                    
                })
                .catch(response => {
                    console.log(response, '회원가입실패')
                });
            })
            .catch(response => {
                console.log(response, '아이디검색실패')
            });
            // if(this.state.id === )
            
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