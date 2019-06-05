export class ChildComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 'InnerHTML set';
    }

    static get observedAttributes() {
        return ['value'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`Attribute ${name} changed from ${oldValue} to ${newValue} with type ${typeof newValue}`);
        debugger;
    }

    set value(newValue) {
        console.log(`Property value is now ${newValue} with type ${typeof newValue}`);
        debugger;
    }
}

customElements.define('child-component', ChildComponent);