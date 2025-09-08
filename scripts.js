document.addEventListener("DOMContentLoaded", function () {
    // brand colours
    const colors = ["#7f0000", "#7f3f00", "#7f7f00", "#007f00", "#007f7f", "#00007f", "#7f007f"];

    // Get all elements with class "icon-part"
    const parts = document.querySelectorAll(".icon-part");

    // Assign a random fill color to each
    parts.forEach(part => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    part.setAttribute("fill", randomColor);
    });

    const container = document.querySelector("#languages");
    const items = Array.from(container.querySelectorAll("div")); // all languages
  
    // Fisher–Yates shuffle
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
  
    // Remove old items and re-append in shuffled order
    items.forEach(item => container.appendChild(item));
  });