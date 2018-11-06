import React, { Component } from 'react';
import HeaderFooter from '../hoc/components';
import styled from 'styled-components';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.Footer = styled.div`
            &[aria-hidden="true"] {
                display: none;
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