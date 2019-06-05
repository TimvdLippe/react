import React from "../../build/dist/react/esm/React.esm.browser.js";

export class ChildComponent extends React.Component {
    render() {
        if (this.props.value) {
            return 'My parent clicked';
        }
        return 'I am the child component';
    }
}