const carousel = document.querySelectorAll(".carousel").forEach((carousel) => {
  const items = carousel.querySelectorAll(".carousel_item");
  const buttonsHtml = Array.from(items, () => {
    return `<span class="carousel_button"></span>`;
  });

  carousel.insertAdjacentHTML(
    "beforeend",
    `
        <div class="carousel_nav">
            ${buttonsHtml.join("")}
        </div>
        `
  );

  const buttons = carousel.querySelectorAll(".carousel_button");

  // activate the buttons
  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      // unselect all the items and buttons
      items.forEach((item) => item.classList.remove("carousel_item-selected"));
      buttons.forEach((button) =>
        button.classList.remove("carousel_button-selected")
      );

      // select the particular item and button
      items[i].classList.add("carousel_item-selected");
      button.classList.add("carousel_button-selected");
    });
  });

  // select the first item on page load
  items[0].classList.add("carousel_item-selected");
  buttons[0].classList.add("carousel_button-selected");
});
