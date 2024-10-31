const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="/modern-normalize.css" />
<link rel="stylesheet" href="/ui/card/card.css" />
<div class="card">
    <div class="header">
      <slot name="header">
        <h3 class="title">
            <slot name="title"></slot>
        <h3>
        <slot name="description"></slot>
      </slot>
    </div>

      <slot name="content"></slot>

    <slot name="footer"></slot>
</div>
`;
export default class Card extends HTMLElement {
  static define(tag = "my-card") {
    customElements.define(tag, this);
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.replaceChildren(template.content.cloneNode(true));
  }
}
Card.define();
