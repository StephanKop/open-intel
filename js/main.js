

var value = document.getElementById('slider').value;
slider.addEventListener('input', sliderChange);


function sliderChange() {
    
    if (value = "11") {
        document.getElementById("chart1").style.display = "none";
        document.getElementById("chart2").style.removeProperty("display");
        document.getElementById("VSmap1").style.display = "none";
        document.getElementById("VSmap2").style.removeProperty("display");
    }
    else if (value = '21') {
        document.getElementById("chart2").style.display = "none";
    }

  console.log(value);
}