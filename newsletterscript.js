function initNewsletter() {
  const form = document.getElementById("subscribe-form");
  if (!form) return console.error("Subscribe form not found");

  const button = form.querySelector(".subscribe-btn");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    fetch("https://script.google.com/macros/s/AKfycbzGR9XHCtgwxEsNPA2TiGx3u0vGLvGWeokn23T_JqlpHV0JzUggxLRyMInx9P1TFPql/exec", {
      method: "POST",
      body: new FormData(form),
      mode: "no-cors"
    });

    // Animate the button
    button.classList.add("success");
    button.innerText = "✓ You are in";

    setTimeout(() => {
      button.classList.remove("success");
      button.innerText = "Subscribe ✦";
      form.reset();
    }, 2000);
  });
}