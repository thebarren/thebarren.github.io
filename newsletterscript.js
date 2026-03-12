function initNewsletter() {

  const form = document.getElementById("subscribe-form");

  if (!form) {
    setTimeout(initNewsletter, 200); // try again shortly
    return;
  }

  form.addEventListener("submit", function(e) {

    e.preventDefault();

    const data = new FormData(form);

    fetch("https://script.google.com/macros/s/AKfycbyQzo52hUyl5r-aOcedR9y0TVBqLhHf0esOgvwBITpJhek6YtDptwi7F2Xkp8Uz6bc8/exec", {
      method: "POST",
      body: data,
      mode: "no-cors"
    });

    document.getElementById("message").innerText = "✓ Thanks for subscribing!";
    form.reset();

  });

}

initNewsletter();