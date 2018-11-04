import React, { Component } from 'react';
import commonStyle, { unit } from '../variables/style.js';
import styled from 'styled-components';

export default class Mypage extends Component {
    constructor(props) {
        super(props);
        this.Mypage = styled.div`
            padding: ${commonStyle.paddingVertical} ${commonStyle.paddingHorizone};
        `;
    }

    render() {
        

        return (
            <this.Mypage>
                <h2>lorem</h2>
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