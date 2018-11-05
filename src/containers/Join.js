import React, { Component } from 'react';
// import Header from '../components/Header';
import { store, action } from '../reducers/index.js';
import commonStyle, { unit } from '../variables/style.js';
import styled from 'styled-components';


export default class Join extends Component {
    constructor(props) {
        super(props);
        this.Join = styled.div`
            padding: ${commonStyle.paddingVertical} ${commonStyle.paddingHorizone};
        `;
    }

    render() {
        return (
            <this.Join>
                <h1>join</h1>
                <input type="text"/>
                <input type="password"/>
                <button>회원가입하기</button>
            </this.Join>
        )
    }
}