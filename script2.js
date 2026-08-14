const toggle = document.querySelector(".switch");

const monthly =
document.querySelector(".toggle-text:first-child");

const annual =
document.querySelector(".toggle-text:last-child");

toggle.addEventListener("click",()=>{

    toggle.classList.toggle("active");

    monthly.classList.toggle("active");

    annual.classList.toggle("active");

});