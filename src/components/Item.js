import React, { Component } from 'react';
import styled from 'styled-components';
import commonStyle, { unit } from '../variables/style.js';
import noImg from '../image/no.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Item extends Component {
    constructor(props) {
        super(props);
        
        this.Item = styled.div`
            display: flex;
            position: relative;
            margin: ${commonStyle.paddingVertical} 0;
            padding: ${commonStyle.paddingVertical} 0;
            align-items: center;
            border-top: ${unit(1)} solid #fff;

            &:first-child {
                margin-top: -${unit(1)};
            }

            &.editAble {
                .applyBtn {
                    display: none;
                }

                .editBtn {
                    display: flex;
                }
            }

            .infoWrap {
                flex: 100%;
            }

            .historyBtn {
                display: block;
                text-align: center;
                color: #fff;
                font-size: ${unit(24)};
                border: 0;
                background: rgba(0, 0, 0, .5);
            }

            .editBtn {
                display: block;
                text-align: center;
                color: #fff;
                font-size: ${unit(24)};
                border: 0;
                background: rgba(0, 0, 0, .5);
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

            .applyBtn {
                display: flex;
                width: ${unit(40)};
                height: ${unit(80)};
                font-size: ${unit(16)};
                white-space: nowrap;
                color: #000;
                background: #fff;
            }

            .editBtn {
                display: none;
                width: ${unit(40)};
                height: ${unit(80)};
                font-size: ${unit(16)};
                white-space: nowrap;
                color: #fff;
                background: #000;
            }
        `;
    }

    render() {
        return (
            <this.Item className={this.props.className}>
                <span className="imgWrap"><img src={this.props.src?this.props.src:noImg} alt={this.props.title} /></span>
                <div className="infoWrap">
                    <h4>{this.props.title}</h4>
                    <strong>{this.props.price}/10분</strong>
                    {this.props.min?<span>최소 {this.props.min}분 사용</span>:''}
                </div>
                <button className="applyBtn">구매</button>
                <button className="editBtn">편집</button>
            </this.Item>
        )
    }
}