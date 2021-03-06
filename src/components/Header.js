import React, { Component } from 'react';
import HeaderFooter from '../hoc/components';
import commonStyle, {unit} from '../variables/style.js';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Header extends Component {
    constructor(props) {
        super(props);
        this.Header = styled.header`
            position: relative;
            height: ${commonStyle.header.height};

            article {
                z-index: ${commonStyle.zIndex.header};
                position: fixed;
                top: 0;
                display: flex;
                align-items: center;
                width: 100%;
                height: ${commonStyle.header.height};
                padding: ${commonStyle.paddingVertical} ${commonStyle.paddingHorizone};
                box-sizing: border-box;
                font-size: ${unit(12)};
                color: #fff;
                background: #793038;

                > * {
                    flex: 1;
                }

                a {
                    text-decoration: none;
                    color: inherit;
                }

                h1 {
                    flex: 100%;
                }

                .link {
                    flex-basis: ${commonStyle.header.height};
                    text-align: center;
                    font-size: ${unit(16)};
                }
            }

            &[aria-hidden="true"] {
                display: none;
            }
        `;
    }

    render() {

        return (
            <this.Header aria-hidden={!this.props.visible}>
                <article>
                    <h1><NavLink to="/">parkprika</NavLink></h1>
                    <NavLink to="/mypage" className="link">
                        <FontAwesomeIcon icon="user" />
                    </NavLink>
                </article>
            </this.Header>
        )
    }
};
const withHocHeader = HeaderFooter(Header, 'headerVisible');

export default withHocHeader;