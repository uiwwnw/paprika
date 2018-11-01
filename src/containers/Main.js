import React, { Component } from 'react';
// import Header from '../components/Header';
import Map from '../components/Map';
import store from '../reducers/index.js';
import styled from 'styled-components';

// function increase(type, diff) {
//     return {
//         type: type,
//         addBy: diff
//     };
// }

export default class Main extends Component {
    constructor(props) {
        super(props);
    }

    onClick1() {
        store.dispatch(headerVisible('CHANGE', 2));
        // this.setState({
        //     aaa: this.props.store.getState().value
        // })
    }

    // onClick2() {
    //     this.props.store.dispatch(increase('DESCREMENT', 2));
    // }

    render() {
        const Main = styled.div`
            padding: ${store.getState().style.padding};

            &:before {
                display: block;
                height: 2rem;
                content: "";
            }
        `;
        return (
            <Main>
                {/* <Header /> */}
                <h2 onClick={this.onClick1.bind(this)}>자유롭게 주차공간을 공유하세요.</h2>
                <Map />

            </Main>
        )
    }
}