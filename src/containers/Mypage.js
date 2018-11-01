import React, { Component } from 'react';
import styled from 'styled-components';

export default class Mypage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const Mypage = styled.div`
            color: red;
            font-size: 20px;
        `;

        return (
            <Mypage>
                <h2>마이페이지</h2>
                {/* <h1
                    onClick={ this.onClick1.bind(this) }
                > {this.state.aaa} </h1>
                <h1
                    onClick={ this.onClick2.bind(this) }
                > {this.props.store.getState().value} </h1> */}
            </Mypage>
        )
    }
}