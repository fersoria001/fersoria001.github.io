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
  height: 2.5rem;
  padding: 0.5rem 1rem;
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
  secondary: `
  .variant {
  background-color: hsl(var(--secondary));
  color: hsl(var(--secondary-foreground));
  }
  .variant:hover {
    background-color: hsl(var(--secondary) / 0.8)
  }
  `,
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

    this.shadowRoot
      .querySelector("button")
      .addEventListener("click", (event) => {
        if (this.getAttribute("type") === "submit") {
          const form = this.closest("form");
          if (form) {
            event.preventDefault();
            form.requestSubmit();
          }
        }
      });
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
