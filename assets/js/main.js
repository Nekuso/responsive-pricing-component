const slider = document.querySelector("input");
const value = document.querySelector(".price");

value.textContent = slider.value;

slider.oninput = function() {
    value.textContent = this.value;
}