import React, {Component} from 'react';
import { render } from 'react-dom';
import Header from './src/components/Header';
import Main from './src/containers/Main';
// import store from './src/reducers/index.js';
import styled from 'styled-components';
import 'normalize.css';

class App extends Component {
    render() {
        const Index = styled.div`
            min-height: 100vh;
            color: #fff;
            background: #793038;

            &:before {
                display: block;
                overflow: hidden;
                content: "";
            }
            &:after {
                display: block;
                overflow: hidden;
                content: "";
            }
        `;

        return (
            <Index>
                <Header />
                <Main />
            </Index>
        )
    }
}

render(<App />, document.getElementById('root'));