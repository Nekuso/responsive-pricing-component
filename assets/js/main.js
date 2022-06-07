const slider = document.querySelector("input");
const value = document.querySelector(".price");

value.textContent = slider.value;

slider.oninput = function() {
    value.textContent = this.value;
}

slider.addEventListener('input', function(){
    var x = slider.value * 3;
    var color = 'linear-gradient(90deg, hsl(174, 77%, 80%)' + x +'%, rgb(214,214,214)' + x + '%)';
    slider.style.background = color;

})