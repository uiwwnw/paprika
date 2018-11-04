import React, { Component } from 'react';
// import Header from '../components/Header';
import Map from '../components/Map';
import Item from '../components/Item';
import List from '../components/List';
import { store, action } from '../reducers/index.js';
import commonStyle, { unit } from '../variables/style.js';
import styled from 'styled-components';


export default class Main extends Component {
    constructor(props) {
        super(props);
        this.Main = styled.div`
            padding: ${commonStyle.paddingVertical} ${commonStyle.paddingHorizone};
        `;
    }

    // onClick1() {
    //     store.dispatch(action.change('CHANGEHEADER', false));
    //     // this.setState({
    //     //     aaa: this.props.store.getState().value
    //     // })
    // }

    // onClick2() {
    //     this.props.store.dispatch(increase('DESCREMENT', 2));
    // }

    // componentWillMount() {

    //     <Item />
    // }

    render() {
        
        return (
            <this.Main>
                {/* <Header /> */}
                <h2>Lorem ipsum dolor sit amet.</h2>
                <List />
                {/* <Item name="강남교보문고뒤" /> */}
                <Map height={unit(store.getState().windowHeight)} />
                
            </this.Main>
        )
    }
}