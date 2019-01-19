

// var value = document.getElementById('slidermap').value;
// slider.addEventListener('input', sliderChange);


// function sliderChange() {
    
//     if (value = "11") {
//         document.getElementById("chart1").style.display = "none";
//         document.getElementById("chart2").style.removeProperty("display");
//         document.getElementById("VSmap1").style.display = "none";
//         document.getElementById("VSmap2").style.removeProperty("display");
//     }
//     else if (value = '21') {
//         document.getElementById("chart2").style.display = "none";
//     }

    
//   console.log(value);
// }

var value = document.getElementById('slidermap').value;
slider.addEventListener('input', sliderChange);


function sliderChange() {
    
    if (value = "11") {
        document.getElementById("VS").style.display = "none";
        document.getElementById("VS1").style.removeProperty("display");
        document.getElementById("NL").style.display = "none";
        document.getElementById("NL1").style.removeProperty("display");
        document.getElementById("date").innerHTML = "1 Juli 2016"
    }
    else if (value = '21') {
        document.getElementById("chart2").style.display = "none";
    }

    
  console.log(value);
}