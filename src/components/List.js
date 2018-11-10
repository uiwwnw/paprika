import React, { Component } from 'react';
import Item from './Item';
import styled from 'styled-components';
import commonStyle, { unit } from '../variables/style.js';
// import { positions } from '../../data/index.json';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.List = styled.div`
            overflow: hidden;
            padding: 0 ${commonStyle.paddingHorizone};
        `;
    }

    render() {
        return (
            <this.List>
                {this.props.positions.map((e, i) => {
                    return (
                        <Item 
                            className={this.props.className}
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