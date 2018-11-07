import React, { Component } from 'react';
// import Header from '../components/Header';
import Map from '../components/Map';
// import Item from '../components/Item';
import List from '../components/List';
import { positions } from '../../data/index.json';
import { store, action } from '../reducers/index.js';
import commonStyle, { unit } from '../variables/style.js';
import styled from 'styled-components';
// import * as service from '../../service/post';


export default class Main extends Component {
    constructor(props) {
        super(props);
        // this.fetchPostInfo = this.fetchPostInfo.bind(this);
        this.Main = styled.div`
            padding: ${commonStyle.paddingVertical} ${commonStyle.paddingHorizone};
        `;
        // this.fetchPostInfo = async (postId) => {
        //     const post = await service.getPost(postId);
        //     console.log(post);
        //     const comments = await service.getComments(postId);
        //     console.log(comments);
        // }
    }

    // componentDidMount() {
    //     this.fetchPostInfo(1);
    // }

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
        console.log(store.getState());
        
        return (
            <this.Main>
                {/* <Header /> */}
                <h2>Lorem ipsum dolor sit amet.</h2>
                <List positions={positions} />
                {/* <Item name="강남교보문고뒤" /> */}
                <Map height={unit(store.getState().windowHeight)} />
                
            </this.Main>
        )
    }
}