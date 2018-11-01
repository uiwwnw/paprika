import React, { Component } from 'react';
import store from '../reducers/index.js';
import styled from 'styled-components';

function increase(type, diff) {
    return {
        type: type,
        addBy: diff
    };
}

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: store.getState().headerVisible
        }
    }

    componentDidUpdate(){
        this.setState({
            visible: store.getState().headerVisible
        })
    }

    onClick1() {
        store.dispatch(increase('INCREMENT', 1));
        this.setState({
            visible: store.getState().headerVisible
        })
    }

    // onClick2() {
    //     store.dispatch(increase('DESCREMENT', 2));
    // }

    render() {
        const Header = styled.div`
            z-index: ${store.getState().style.zIndex.header};
            position: fixed;
            top: 0;
            width: 100%;
            height: ${store.getState().style.header.height};
            padding: ${store.getState().style.padding};
            box-sizing: border-box;
            font-size: .8em;
            background: rgba(255, 255, 255, .1);

            h1, h2 {
                margin: 0;

                & + * {
                    margin-top: .4rem;
                }
            }

            &[aria-bidden="true"] {
                display: none;
            }
        `;

        return (
            <Header aria-hidden={!this.state.visible}>
                <h1>paprika</h1>
            </Header>
        )
    }
}