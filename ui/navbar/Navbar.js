const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="/modern-normalize.css" />
<link rel="stylesheet" href="/ui/navbar/navbar.css" />
<nav class="navbar">
  <div class="navbar-brand">
    <a href="/">
      Fernando Agustín Soria
    </a>
  </div>
  <ul class="navbar-links" role="list">
    <li>
      <custom-button variant="link" size="sm">
        <a href="/en/resume">Resume</a>
      </custom-button>
    </li>
    <li>
      <custom-button variant="link" size="sm">
        <a href="/en/projects">Projects</a>
      </custom-button>
    </li>
    <li>
      <custom-button variant="link" size="sm">
        <a href="/en/contact">Contact</a>
      </custom-button>
    </li>
  </ul>
</nav>
`;
export default class Navbar extends HTMLElement {
  static define(tag = "nav-bar") {
    customElements.define(tag, this);
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.replaceChildren(template.content.cloneNode(true));
  }
}
Navbar.define();
