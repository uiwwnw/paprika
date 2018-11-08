import React, { Component } from 'react';
import HeaderFooter from '../hoc/components';
import commonStyle, {unit} from '../variables/style.js';
import styled from 'styled-components';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.Footer = styled.div`
            margin-top: ${unit(10)};
            padding-bottom: ${unit(20)};
            &[aria-hidden="true"] {
                display: none;
            }

            cite {
                display: block;
                text-align: center;
                font-style: normal;
            }
        `;
    }

    render() {
        return (
            <this.Footer aria-hidden={!this.props.visible}>
                <cite>&copy;uiwwnw</cite>
            </this.Footer>
        )
    }
};
const withHocFooter = HeaderFooter(Footer, 'footerVisible');

export default withHocFooter;