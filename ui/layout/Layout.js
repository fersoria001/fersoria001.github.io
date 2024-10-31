const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="/modern-normalize.css" />
<link rel="stylesheet" href="/ui/layout/layout.css" />
<body>
  <header class="header">
    <nav-bar></nav-bar>
  </header>
  <div>
    <slot name="main"></slot>
  </div>
  <my-footer></my-footer>
</body>
`;
export default class Layout extends HTMLElement {
  static define(tag = "lay-out") {
    customElements.define(tag, this);
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.replaceChildren(template.content.cloneNode(true));
  }
}
Layout.define();
