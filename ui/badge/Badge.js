const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="/modern-normalize.css" />
<link rel="stylesheet" href="/ui/badge/badge.css" />
<div class="badge default">
<slot></slot>
</div>
`;

export default class Badge extends HTMLElement {
  static observedAttributes = ["variant"];

  static define(tag = "custom-badge") {
    customElements.define(tag, this);
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.replaceChildren(template.content.cloneNode(true));
    this.badge = this.shadowRoot.querySelector(".badge");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "variant") {
      this.badge.classList.remove(
        "default",
        "secondary",
      );
      this.badge.classList.add(newValue);
    }
  }
}

Badge.define();
