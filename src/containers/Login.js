import React, { Component } from 'react';
// import Header from '../components/Header';
import { store, action } from '../reducers/index.js';
import commonStyle, { unit } from '../variables/style.js';
import styled from 'styled-components';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.Login = styled.div`
            padding: ${commonStyle.paddingVertical} ${commonStyle.paddingHorizone};
        `;
    }

    render() {
        
        return (
            <this.Login>
                <h1>login</h1>
            </this.Login>
        )
    }
}