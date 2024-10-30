const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="modern-normalize.css" />
<link rel="stylesheet" href="./ui/navbar/navbar.css" />
<nav class="navbar">
  <div class="navbar-brand">Fernando Agustín Soria</div>
  <ul class="navbar-links" role="list">
    <li><a href="#">Curriculum</a></li>
    <li><a href="#">Proyectos</a></li>
    <li><a href="#">Contacto</a></li>
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
