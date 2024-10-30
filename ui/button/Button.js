const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="modern-normalize.css" />
<link rel="stylesheet" href="./ui/button/button.css" />
<button class="button variant size">
    <slot></slot>
</button>
`;
const sizes = [
  {
    sm: `.size {
    height: 2.25rem;
    border-radius: calc(var(--radius) - 2px);
    padding-left: 0.75rem;
    padding-right: 0.75rem;
}`,
    icon: `.size {
    width: 2.5rem;
    height: 2.5rem;
}`,
  },
];
const variants = [
  {
    outline: `.variant {
  border-width: 1px;
  border-color: var(--input);
  background-color: var(--background);
}
.variant:hover {
  background-color: var(--accent);
  color: var(--accent-foreground);
}`,
    ghost: `.variant:hover {
    background-color: var(--accent);
    color: var(--accent-foreground);
}`,
    link: `.variant {
    color: var(--primary);
    text-underline-offset: 4px;
}
.variant:hover {
    text-decoration-line: underline;
}`,
  },
];
export default class Button extends HTMLElement {
  static observedAttributes = ["size", "variant"];

  static define(tag = "custom-button") {
    customElements.define(tag, this);
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.replaceChildren(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ["size", "variant"];
  }

  applyVariant(elem, variant) {
    const shadow = elem.shadowRoot;
    shadow.querySelector("style").textContent = variants[variant];
  }

  applySize(elem, size) {
    const shadow = elem.shadowRoot;
    shadow.querySelector("style").textContent = sizes[size];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch(name) { 
        case "variant": {
            this.applyVariant(this, newValue);
            break;
        }
    }
  }

}
Button.define();
