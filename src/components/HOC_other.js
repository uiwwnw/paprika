import React, { Component } from 'react';
import { store } from '../reducers/index.js';

const HOC_other = (Component, variables) => {
    class _HOC_other extends Component {
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
    return _HOC_other
}

export default HOC_other;