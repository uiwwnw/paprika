import React, { Component } from 'react';
import styled from 'styled-components';
import commonStyle, { unit } from '../variables/style.js';
import noImg from '../image/no.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Item extends Component {
    constructor(props) {
        super(props);
        
        this.Item = styled.div`
            display: flex;
            position: relative;
            padding: ${unit(10)} 0;
            align-items: center;
            border-top: ${unit(1)} solid #eee;

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
                align-self: start;

                h4 {
                    margin: 0 0 ${unit(10)};
                    font-size: ${unit(18)};
                    font-weight: 700;
                }

                strong {
                    font-weight: 500;
                    color: #000;
                }

                span {
                    color: #555;
                }
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
                overflow: hidden;
                display: flex;
                flex-basis: ${unit(150)};
                margin-right: ${commonStyle.paddingHorizone};
                border-radius: ${unit(10)};
                border: ${unit(1)} solid #eee;
                align-items: center;

                img {
                    display: block;
                    width: 100%;
                }
            }

            .applyBtn {
                display: flex;
                width: ${unit(40)};
                height: ${unit(80)};
                border: 0;
                font-size: ${unit(16)};
                white-space: nowrap;
                color: #000;
                background: #fff;
            }

            .editBtn {
                display: none;
                width: ${unit(40)};
                height: ${unit(80)};
                border: 0;
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
                    <strong>{this.props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원/10분</strong>
                    {this.props.min?<span>최소 {this.props.min}분 사용</span>:''}
                </div>
                {/* <button className="applyBtn">구매</button>
                <button className="editBtn">편집</button> */}
            </this.Item>
        )
    }
}