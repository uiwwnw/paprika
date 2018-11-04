import React, { Component } from 'react';
import Item from './Item';
import styled from 'styled-components';
import commonStyle, { unit } from '../variables/style.js';
import { positions } from '../../data/index.json';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.List = styled.div`
            
        `;
    }

    render() {
        return (
            <this.List>
                {positions.map((e, i) => {
                    return (
                        <Item 
                            title={e.title} 
                            price={e.price}
                            min={e.min}
                            key={i}
                        />
                    )
                })}
            </this.List>
        )
    }
}