import React, { Component } from 'react';
import HOC_other from './HOC_other';
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
const withHocFooter = HOC_other(Footer, 'footerVisible');

export default withHocFooter;