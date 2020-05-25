var button = document.querySelector(".search-button");
var popup = document.querySelector(".booking-form");

button.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("booking-form-show");
  });
