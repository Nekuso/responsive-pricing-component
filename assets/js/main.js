const slider = document.querySelector("input");
const value = document.querySelector(".price");
const viewcount = document.querySelector(".viewcount")

value.textContent = slider.value + ".00";

slider.oninput = function() {
    value.textContent = this.value + ".00";
    viewcount.textContent = this.value * 6.25;
}

slider.addEventListener('input', function(){
    var x = slider.value * 3;
    var color = 'linear-gradient(90deg, hsl(174, 77%, 80%)' + x +'%, hsl(223, 50%, 87%)' + x + '%)';
    slider.style.background = color;

})