const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="/modern-normalize.css" />
<link rel="stylesheet" href="/ui/footer/footer.css" />
<footer class="footer">
  <div class="footer-content">
    <div class="footer-buttons">
        <custom-button variant="ghost" size="icon">
            <a href="https://github.com/fersoria001/">
                <svg 
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="footer-icon">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                    <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
            </a>
        </custom-button>
        <custom-button variant="ghost" size="icon">
            <a href="https://www.linkedin.com/in/fernandosoria1t/">
                <svg 
                xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="black"
                stroke-width="2" 
                stroke-linecap="round"
                stroke-linejoin="round"
                class="footer-icon">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                </svg>
            </a>
        </custom-button>
        <custom-button variant="ghost" size="icon">
            <a href="https://www.instagram.com/fersoria.1/">
                <svg 
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="black" 
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round" 
                class="footer-icon">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
            </a>
        </custom-button>
    </div>
    <p class="footer-copyright">
        © 2024 Fernando Agustín Soria. Todos los derechos reservados.
    </p>
    <div class="footer-nav">
        <custom-button variant="link" size="sm">
            <a href="/en/projects">Projects</a>
        </custom-button>
        <custom-button variant="link" size="sm">
            <a href="/en/resume">Resume</a>
        </custom-button>
        <custom-button variant="link" size="sm">
            <a href="/en/contact">Contact</a>
        </custom-button>
    </div>
  </div>
</footer>
`;
export default class Footer extends HTMLElement {
  static define(tag = "my-footer") {
    customElements.define(tag, this);
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.replaceChildren(template.content.cloneNode(true));
  }
}
Footer.define();
