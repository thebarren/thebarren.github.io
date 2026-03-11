document.addEventListener("DOMContentLoaded", function() {

  const form = document.getElementById("subscribe-form");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const data = new FormData(form);

    fetch("https://script.google.com/macros/s/AKfycbwG8EfnDAV0piDRJMDMmsvBYE-wODLWGZfUJ254cvFvCu4Y2RXA5WZIUGeEpFH3RZgw/exec", {
      method: "POST",
      body: data
    })
    .then(() => {
      document.getElementById("message").innerText = "✓ Thanks for subscribing!";
      form.reset();
    })
    .catch(() => {
      document.getElementById("message").innerText = "Something went wrong.";
    });
  });

});