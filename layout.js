function loadHTML(id, file, callback) {

  const element = document.getElementById(id);
  if (!element) return;

  fetch(file)
    .then(response => response.text())
    .then(data => {
      element.innerHTML = data;

      if (callback) callback(); // run script after load
    });

}

loadHTML("header", "header.html");
loadHTML("newsletter", "newsletter.html", initNewsletter);
loadHTML("footer", "footer.html");