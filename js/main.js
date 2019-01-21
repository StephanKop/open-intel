

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

    if (x <= "0") {
        document.getElementById("VS").style.removeProperty("display");
        document.getElementById("VS1").style.display = "none";
        document.getElementById("NL").style.removeProperty("display");
        document.getElementById("NL1").style.display = "none";
        document.getElementById("UK").style.removeProperty("display");
        document.getElementById("UK1").style.display = "none";
        document.getElementById("DE").style.removeProperty("display");
        document.getElementById("DE1").style.display = "none";
        document.getElementById("date").innerHTML = "1 April 2016"
    }

    else if (x <= "10") {
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
        document.getElementById("VS3").style.display = "none";
        document.getElementById("NL1").style.display = "none";
        document.getElementById("NL2").style.removeProperty("display");
        document.getElementById("NL3").style.display = "none";
        document.getElementById("UK1").style.display = "none";
        document.getElementById("UK2").style.removeProperty("display");
        document.getElementById("UK3").style.display = "none";
        document.getElementById("DE1").style.display = "none";
        document.getElementById("DE2").style.removeProperty("display");
        document.getElementById("DE3").style.display = "none";
        document.getElementById("date").innerHTML = "1 Oktober 2016"
    }
    else if (x <= "30") {
        document.getElementById("VS2").style.display = "none";
        document.getElementById("VS3").style.removeProperty("display");
        document.getElementById("VS4").style.display = "none";
        document.getElementById("NL2").style.display = "none";
        document.getElementById("NL3").style.removeProperty("display");
        document.getElementById("NL4").style.display = "none";
        document.getElementById("UK2").style.display = "none";
        document.getElementById("UK3").style.removeProperty("display");
        document.getElementById("UK4").style.display = "none";
        document.getElementById("DE2").style.display = "none";
        document.getElementById("DE3").style.removeProperty("display");
        document.getElementById("DE4").style.display = "none";
        document.getElementById("date").innerHTML = "1 Januari 2017"
    }
    else if (x <= "40") {
        document.getElementById("VS3").style.display = "none";
        document.getElementById("VS4").style.removeProperty("display");
        document.getElementById("VS5").style.display = "none";
        document.getElementById("NL3").style.display = "none";
        document.getElementById("NL4").style.removeProperty("display");
        document.getElementById("NL5").style.display = "none";
        document.getElementById("UK3").style.display = "none";
        document.getElementById("UK4").style.removeProperty("display");
        document.getElementById("UK5").style.display = "none";
        document.getElementById("DE3").style.display = "none";
        document.getElementById("DE4").style.removeProperty("display");
        document.getElementById("DE5").style.display = "none";
        document.getElementById("date").innerHTML = "1 April 2017"
    }
    else if (x <= "50") {
        document.getElementById("VS4").style.display = "none";
        document.getElementById("VS5").style.removeProperty("display");
        document.getElementById("VS6").style.display = "none";
        document.getElementById("NL4").style.display = "none";
        document.getElementById("NL5").style.removeProperty("display");
        document.getElementById("NL6").style.display = "none";
        document.getElementById("UK4").style.display = "none";
        document.getElementById("UK5").style.removeProperty("display");
        document.getElementById("UK6").style.display = "none";
        document.getElementById("DE4").style.display = "none";
        document.getElementById("DE5").style.removeProperty("display");
        document.getElementById("DE6").style.display = "none";
        document.getElementById("date").innerHTML = "1 Juli 2017"
    }
    else if (x <= "60") {
        document.getElementById("VS5").style.display = "none";
        document.getElementById("VS6").style.removeProperty("display");
        document.getElementById("VS7").style.display = "none";
        document.getElementById("NL5").style.display = "none";
        document.getElementById("NL6").style.removeProperty("display");
        document.getElementById("NL7").style.display = "none";
        document.getElementById("UK5").style.display = "none";
        document.getElementById("UK6").style.removeProperty("display");
        document.getElementById("UK7").style.display = "none";
        document.getElementById("DE5").style.display = "none";
        document.getElementById("DE6").style.removeProperty("display");
        document.getElementById("DE7").style.display = "none";
        document.getElementById("date").innerHTML = "1 Oktober 2017"
    }
    else if (x <= "70") {
        document.getElementById("VS6").style.display = "none";
        document.getElementById("VS7").style.removeProperty("display");
        document.getElementById("VS8").style.display = "none";
        document.getElementById("NL6").style.display = "none";
        document.getElementById("NL7").style.removeProperty("display");
        document.getElementById("NL8").style.display = "none";
        document.getElementById("UK6").style.display = "none";
        document.getElementById("UK7").style.removeProperty("display");
        document.getElementById("UK8").style.display = "none";
        document.getElementById("DE6").style.display = "none";
        document.getElementById("DE7").style.removeProperty("display");
        document.getElementById("DE8").style.display = "none";
        document.getElementById("date").innerHTML = "1 Januari 2018"
    }
    else if (x <= "80") {
        document.getElementById("VS7").style.display = "none";
        document.getElementById("VS8").style.removeProperty("display");
        document.getElementById("VS9").style.display = "none";
        document.getElementById("NL7").style.display = "none";
        document.getElementById("NL8").style.removeProperty("display");
        document.getElementById("NL9").style.display = "none";
        document.getElementById("UK7").style.display = "none";
        document.getElementById("UK8").style.removeProperty("display");
        document.getElementById("UK9").style.display = "none";
        document.getElementById("DE7").style.display = "none";
        document.getElementById("DE8").style.removeProperty("display");
        document.getElementById("DE9").style.display = "none";
        document.getElementById("date").innerHTML = "1 April 2018"
    }
    else if (x <= "90") {
        document.getElementById("VS8").style.display = "none";
        document.getElementById("VS9").style.removeProperty("display");
        document.getElementById("VS10").style.display = "none";
        document.getElementById("VS2").style.display = "none";
        document.getElementById("NL8").style.display = "none";
        document.getElementById("NL9").style.removeProperty("display");
        document.getElementById("NL10").style.display = "none";
        document.getElementById("NL2").style.display = "none";
        document.getElementById("UK8").style.display = "none";
        document.getElementById("UK9").style.removeProperty("display");
        document.getElementById("UK10").style.display = "none";
        document.getElementById("UK2").style.display = "none";
        document.getElementById("DE8").style.display = "none";
        document.getElementById("DE9").style.removeProperty("display");
        document.getElementById("DE10").style.display = "none";
        document.getElementById("DE2").style.display = "none";
        document.getElementById("date").innerHTML = "1 Juli 2018"
    }
    else if (x <= "100") {
        document.getElementById("VS9").style.display = "none";
        document.getElementById("VS10").style.removeProperty("display");
        document.getElementById("VS2").style.display = "none";
        document.getElementById("NL9").style.display = "none";
        document.getElementById("NL10").style.removeProperty("display");
        document.getElementById("NL2").style.display = "none";
        document.getElementById("UK9").style.display = "none";
        document.getElementById("UK10").style.removeProperty("display");
        document.getElementById("UK2").style.display = "none";
        document.getElementById("DE9").style.display = "none";
        document.getElementById("DE10").style.removeProperty("display");
        document.getElementById("DE2").style.display = "none";
        document.getElementById("date").innerHTML = "1 Oktober 2018"
    }

  console.log(x);
}