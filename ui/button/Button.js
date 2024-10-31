const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="/modern-normalize.css" />
<link rel="stylesheet" href="/ui/button/button.css" />
<style>
.variant {
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
}
.variant:hover {
  background-color: hsl(var(--primary) / 0.9);
}
.size {
  width:100%;
  height: 2.5rem;
  padding: 1rem 0.5rem;
}
</style>
<button class="button variant size">
    <slot></slot>
</button>
`;

const sizes = {
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
};

const variants = {
  outline: `.variant {
    border-width: 1px;
    border-color: hsl(var(--input));
    background-color: hsl(var(--background));
  }
  .variant:hover {
    background-color: hsl(var(--accent));
    color: hsl(var(--accent-foreground));
  }`,
  ghost: `.variant:hover {
    background-color: hsl(var(--accent));
    color: hsl(var(--accent-foreground));
  }`,
  link: `.variant {
    color: hsl(var(--primary));
    text-underline-offset: 4px;
  }
  .variant:hover {
    text-decoration-line: underline;
  }`,
};

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

  attributeChangedCallback(name, oldValue, newValue) {
    const style = this.shadowRoot.querySelector("style");

    switch (name) {
      case "variant":
        style.textContent = style.textContent.replace(
          /(\.variant\s*\{[^}]*\}(\s*\.variant:hover\s*\{[^}]*\})?)/g,
          variants[newValue] || ""
        );
        break;
      case "size":
        style.textContent = style.textContent.replace(
          /\.size\s*\{[^}]*\}/g,
          sizes[newValue] || ""
        );
        break;
    }
  }
}

Button.define();
