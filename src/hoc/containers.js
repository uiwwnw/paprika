import React, { Component } from 'react';
import {setPw} from '../../services/createCipher';

const LoginJoin = (Component) => {
    class _LoginJoin extends Component {
        input(t, e) {
            let cipher = setPw(e.target.value.trim());
            this.setState({
                [t]: e.target.value.length > 0?cipher:null
            });
        };

        check() {
            const validIdx = Number(Object.keys(this.state).indexOf('valid') + 1);
            const value = Object.values(this.state).indexOf(null, validIdx) === -1;
            return !value;
            // if (Object.values(this.state).indexOf(null, validIdx) === -1) {
            //     this.setState({
            //         valid: false
            //     });
            // } else {
            //     this.setState({
            //         valid: true
            //     });
            // }
        }
    
        render() {
            return (
                <Component input={this.input} check={this.check} />
            )
        }
    }
    return _LoginJoin
}

export default LoginJoin;