import React, {createElement} from "../../build/dist/react/esm/React.esm.browser.js";
import {ChildComponent} from './child-component.js';

export class ParentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {childChange: false};
    }

    render() {
        return createElement(
            'div',
            {},
            [
                createElement('child-component', {key: 'child', ".value": this.state.childChange}),
                createElement('div', {key: 'text'}, 'I am a span'),
                createElement('button', {key: 'button', onClick: () => {
                    this.setState({
                        childChange: !this.state.childChange,
                    });
                }}, 'Click me to change the child')]);
    }
}