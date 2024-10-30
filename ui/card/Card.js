const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="modern-normalize.css" />
<link rel="stylesheet" href="./ui/card/card.css" />
<div class="card">

    <div>
        <h3 class="title">
            <slot name="title"></slot>
        <h3>
        <p class="description">
            <slot name="description"></slot>
        </p> 
    </div>

    <div class="content">
      <slot name="content"></slot>
    </div>

    <div class="footer">
        <slot name="footer"></slot>
    </div>

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
