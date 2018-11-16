import React, {Component} from 'react';
import scriptjs from 'scriptjs';
import { render } from 'react-dom';
import config from './config';
// import Header from './src/components/Header';
// import Footer from './src/components/Footer';
import * as Components from './src/components/Components';
// import { default as Join } from './src/containers/Join';
// import { default as Login } from './src/containers/Login';
// import { default as Main } from './src/containers/Main';
// import { default as Mypage } from './src/containers/Mypage';
import * as Containers from './src/containers/Containers';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { store, action } from './src/reducers/index.js';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPencilAlt, faHistory } from '@fortawesome/free-solid-svg-icons';
import 'normalize.css';

library.add(faUser, faPencilAlt, faHistory);

class App extends Component {
    componentWillMount() {
        // scriptjs('//dapi.kakao.com/v2/maps/sdk.js?appkey=' + config.daumapi + '&libraries=services', aaa);
        store.dispatch(action.change('WINDOWHEIGHT', window.outerHeight));
    }
    // componentDidMount() {
    //     scriptjs('//dapi.kakao.com/v2/maps/sdk.js?appkey=d800cd9a3ef7f463dc8064fd37d15106&libraries=services', () => {
    //         window.daum = daum;
    //     });
    // }
    render() {
        const Index = styled.main`
            min-height: 100vh;
            /* color: #fff; */

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
       
        // Containers.map(function() {
        //     console.log('dsds')
        // })
    
        return (
            <BrowserRouter>
                <Index>
                    <Components.Header />
                    <Route exact path="/" component={Containers.Main}/>
                    {/* <Switch> */}
                        {/* <Route path="/login/" component={Containers.Login} /> */}
                        {/* {
                            pages.forEach((name)=>{
                                const path= '/'+name.toLowerCase()+'/';
                                // console.log(path)
                                return(
                                    <Route path={path} component={Containers[name]} />
                                )
                            })
                            // Object.keys(Containers).map((name)=>{
                            //     console.log(name);
                            //     return(
                            //         <Route path={`/${name.toUpperCase()}/`} component={name} />
                            //     )
                            // })
                        } */}
                        <Route path="/login" component={Containers.Login}/>
                        <Route path="/join" component={Containers.Join}/>
                        <Route path="/mypage" component={Containers.Mypage}/>
                    {/* </Switch> */}
                    <Components.Footer />
                </Index>
            </BrowserRouter>
        )
    }
}

render(<App />, document.getElementById('root'));