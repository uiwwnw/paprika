import React, { Component } from 'react';
import { store } from '../reducers/index.js';

const HeaderFooter = (Component, variables) => {
    class _HeaderFooter extends Component {
        constructor(props) {
            super(props);
            this.stateUpdate = this.stateUpdate.bind(this);
            this.state = {
                visible: store.getState()[variables]
            };
        }
    
        stateUpdate() {
            this.setState({
                visible: store.getState()[variables]
            });
        }
    
        componentDidMount(){
            store.subscribe(this.stateUpdate);
        }
    
        render() {
    
            return (
                <Component {...this.state}>
                </Component>
            )
        }
    }
    return _HeaderFooter
}

export default HeaderFooter;