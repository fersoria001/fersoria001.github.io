document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const messageError = document.getElementById("message-error");
  const toastElement = document.querySelector("toast-alert");

  const showError = (element, message) => {
    element.textContent = message;
    element.classList.remove("hidden");
  };

  const hideError = (element) => {
    element.textContent = "";
    element.classList.add("hidden");
  };

  const clearErrors = () => {
    hideError(nameError);
    hideError(emailError);
    hideError(messageError);
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    console.log("submit");
    clearErrors();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    const nameRegex = /^[A-Za-z\s]{2,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const messageRegex = /^.{10,}$/;

    let formIsValid = true;

    if (!nameRegex.test(name)) {
      showError(
        nameError,
        "Enter a valid name (only letters and spaces, at least 2 characters)."
      );
      formIsValid = false;
    }

    if (!emailRegex.test(email)) {
      showError(emailError, "Enter a valid email address.");
      formIsValid = false;
    }

    if (!messageRegex.test(message)) {
      showError(messageError, "Enter a message of at least 10 characters.");
      formIsValid = false;
    }

    if (!formIsValid) return;

    const formData = {
      name: name,
      email: email,
      message: message,
    };

    try {
      const response = await fetch(
        "https://my-vercel-functions-lac.vercel.app/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        form.reset();
        toastElement.dispatchEvent(
          new CustomEvent("toast-show", {
            detail: {
              title: "Message send",
              message: "You contacted me and I will respond soon.",
            },
          })
        );
      } else {
        toastElement.dispatchEvent(
          new CustomEvent("toast-show", {
            detail: {
              type: "destructive",
              title: "Error",
              message: "Failed to submit the form. Try again.",
            },
          })
        );
      }
    } catch (error) {
      console.error("Error:", error);
      toastElement.dispatchEvent(
        new CustomEvent("toast-show", {
          detail: {
            type: "destructive",
            title: "Error",
            message:
              "Failed to submit the form. Try again. If the error persist contact me to my email: bercho001@gmail.com",
          },
        })
      );
    }
  });

  nameInput.addEventListener("input", () => hideError(nameError));
  emailInput.addEventListener("input", () => hideError(emailError));
  messageInput.addEventListener("input", () => hideError(messageError));
});
