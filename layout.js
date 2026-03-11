function loadHTML(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

loadHTML("header", "header.html");
loadHTML("newsletter", "newsletter.html");
loadHTML("footer", "footer.html");