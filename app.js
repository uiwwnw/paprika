import React, {Component} from 'react';
import { render } from 'react-dom';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import { default as Main } from './src/containers/Main';
import { default as Mypage } from './src/containers/Mypage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { store, action } from './src/reducers/index.js';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import 'normalize.css';

library.add(faUser);

class App extends Component {
    componentWillMount() {
        store.dispatch(action.change('WINDOWHEIGHT', window.outerHeight));
    }
    render() {
        const Index = styled.main`
            min-height: 100vh;
            color: #fff;
            background: #793038;

            h2 {
                margin: 0;
            }

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
            <BrowserRouter>
                <Index>
                    <Header />
                    <Route exact path="/" component={Main}/>
                    <Switch>
                        <Route path="/mypage/" component={Mypage}/>
                    </Switch>
                    <Footer />
                </Index>
            </BrowserRouter>
        )
    }
}

render(<App />, document.getElementById('root'));