import React, { Component } from 'react';
import {setPw} from '../../services/createCipher';

const LoginJoin = (Component) => {
    class _LoginJoin extends Component {
        input(t, e) {
            if(!this.state) {
                return false;
            };
            // switch (t) {
            //     case 'id':
            //         this.setState({
            //             id: e.target.value.length > 5?e.target.value:null
            //         });
            //         break;
            //     case 'pw':
            //         this.setState({
            //             pw: setPw(e.target.value)
            //         });
            //         break;
            //     case 'name':
            //         this.setState({
            //             name: e.target.value.length > 1?e.target.value:null
            //         });
            //         break;
            //     case 'email':
            //         this.setState({
            //             email: e.target.value.length > 1?e.target.value:null
            //         });
            //         break;
            //     default:
            //         console.log('error');
            // };
            let cipher = setPw(e.target.value);
            this.setState({
                [t]: e.target.value.length > 1?cipher:null
            });
            if (Object.values(this.state).indexOf(null, 1) === -1) {
                this.setState({
                    valid: false
                });
            } else {
                this.setState({
                    valid: true
                });
            };
        };
    
        render() {
            return (
                <Component input={this.input} {...this.state} />
            )
        }
    }
    return _LoginJoin
}

export default LoginJoin;