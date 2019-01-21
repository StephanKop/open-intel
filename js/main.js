

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

// var x = document.getElementById('slidermap').value;
document.getElementById("slidermap").addEventListener('input', sliderChange);


function sliderChange() {

    var x = document.getElementById('slidermap').value;
    
    if (x <= "10") {
        document.getElementById("VS").style.display = "none";
        document.getElementById("VS1").style.removeProperty("display");
        document.getElementById("VS2").style.display ="none";
        document.getElementById("NL").style.display = "none";
        document.getElementById("NL1").style.removeProperty("display");
        document.getElementById("NL2").style.display ="none";
        document.getElementById("UK").style.display = "none";
        document.getElementById("UK1").style.removeProperty("display");
        document.getElementById("UK2").style.display ="none";
        document.getElementById("DE").style.display = "none";
        document.getElementById("DE1").style.removeProperty("display");
        document.getElementById("DE2").style.display ="none";
        document.getElementById("date").innerHTML = "1 Juli 2016"
    }
    else if (x <= "20") {
        document.getElementById("VS1").style.display = "none";
        document.getElementById("VS2").style.removeProperty("display");
        document.getElementById("NL1").style.display = "none";
        document.getElementById("NL2").style.removeProperty("display");
        document.getElementById("UK1").style.display = "none";
        document.getElementById("UK2").style.removeProperty("display");
        document.getElementById("DE1").style.display = "none";
        document.getElementById("DE2").style.removeProperty("display");
        document.getElementById("date").innerHTML = "1 Oktober 2016"
    }

  console.log(x);
}