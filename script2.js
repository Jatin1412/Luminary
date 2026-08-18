const toggle = document.querySelector(".switch");

const monthly = document.querySelector(".toggle-text:first-child");

const pricingDis = document.querySelector(".toggle-dis");

const annual = document.querySelector(".annual");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  monthly.classList.toggle("active");
  annual.classList.toggle("active");

  pricingDis.classList.toggle("visible");
});
