document.addEventListener("DOMContentLoaded", function () {
  const specialBtn = document.getElementById("show-special");
  const specialText = document.getElementById("special-text");
  const orderForm = document.getElementById("order-form");

  if (specialBtn && specialText) {
    specialBtn.addEventListener("click", function () {
      specialText.classList.toggle("visible");
    });
  }

  if (orderForm) {
    orderForm.addEventListener("submit", function (event) {
      event.preventDefault(); // keep the page from reloading
      alert("Thank you! Your request has been received by DessertsByJazzyD.");
      orderForm.reset();
    });
  }
});
