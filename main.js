function myFunction() {


var thValue = document.getElementById("threshold-value").value
var janValue = document.getElementById("january").value
var febValue = document.getElementById("february").value
var marValue = document.getElementById("march").value
var aprValue = document.getElementById("april").value
var mayValue = document.getElementById("may").value
var juneValue = document.getElementById("june").value
var julyValue = document.getElementById("july").value
var augValue = document.getElementById("august").value
var septValue = document.getElementById("september").value
var octValue = document.getElementById("october").value
var novValue = document.getElementById("november").value
var decValue = document.getElementById("december").value

  TESTER = document.getElementById('tester');
  var threshold = {
  x: ['Jan','Feb','Mar','Apr','May','June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  y: [thValue,thValue,thValue,thValue,thValue,thValue,thValue,thValue,thValue,thValue,thValue,thValue],
  type: 'scatter'
};

var ogsm = {
  x: ['Jan','Feb','Mar','Apr','May','June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  y: [janValue,febValue,marValue,aprValue,mayValue,juneValue,julyValue,augValue,septValue,octValue,novValue,decValue],
  type: 'scatter'
};

var data = [threshold, ogsm];

var layout = {
  title: 'OGSM Measurement vs Entity Pairing',
  xaxis: {
    title: 'OGSM Measurement'
  },
  yaxis: {
    title: 'Entity Pairing'
  }
};


Plotly.newPlot(TESTER, data , layout);

  }
