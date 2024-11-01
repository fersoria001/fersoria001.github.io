const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="/modern-normalize.css" />
<link rel="stylesheet" href="/ui/toast/toast.css" />
<div class="toast hidden">
    <div id="toast-content" class="toast-content">
        <div class="toast-close">
            <svg 
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="toast-close-icon">
            <path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </div>
        <div>
            <h3 class="toast-title">
                <slot name="title"></slot>
            </h3>
            <p class="toast-description">
                <slot name="description"></slot>
            </p>
        </div>
    </div>
</div>
`;

export default class Toast extends HTMLElement {
  static define(tag = "toast-alert") {
    customElements.define(tag, this);
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.replaceChildren(template.content.cloneNode(true));

    this.toastElement = this.shadowRoot.querySelector(".toast");
    this.toastContent = this.shadowRoot.getElementById("toast-content");
    this.closeButton = this.shadowRoot.querySelector(".toast-close");

    this.closeButton.addEventListener("click", () => {
      this.hideToast();
    });

    this.addEventListener("toast-show", (event) => {
      this.showToast(event.detail);
    });
  }

  showToast({ type = "default", title = "Notification", message = "" }) {
    this.toastElement.querySelector(".toast-title").textContent = title;
    this.toastElement.querySelector(".toast-description").textContent = message;

    this.toastElement.classList.remove("hidden");
    this.toastContent.classList.remove("default", "destructive", "success");
    this.toastContent.classList.add(type);

    clearTimeout(this.hideTimeout);
    this.hideTimeout = setTimeout(() => this.hideToast(), 15000);
  }

  hideToast() {
    this.toastElement.classList.add("hidden");
  }
}

Toast.define();
