import React, { Component } from 'react';
import styled from 'styled-components';
import commonStyle, { unit } from '../variables/style.js';
import noImg from '../image/no.png';

export default class Item extends Component {
    constructor(props) {
        super(props);
        
        this.Item = styled.div`
            display: flex;
            margin: ${commonStyle.paddingVertical} 0;
            flex-direction: row-reverse;

            .infoWrap {
                flex: 100%;
            }

            .imgWrap {
                display: flex;
                padding-right: ${commonStyle.paddingHorizone};
                flex-basis: ${unit(150)};
                align-items: center;

                img {
                    display: inline-block;
                    width: 100%;
                    font-variant-numeric
                }
            }
        `;
    }

    render() {
        return (
            <this.Item>
                <div className="infoWrap">
                    <h4>{this.props.title}</h4>
                    <strong>{this.props.price}/10분</strong>
                    {this.props.min?<span>최소 {this.props.min}분 사용</span>:''}
                </div>
                <span className="imgWrap"><img src={this.props.src?this.props.src:noImg} alt={this.props.title} /></span>
            </this.Item>
        )
    }
}