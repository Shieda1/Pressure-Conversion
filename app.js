// https://www.omnicalculator.com/conversion/pressure-converter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const paRadio = document.getElementById('paRadio');
const barRadio = document.getElementById('barRadio');

let pa;
let bar = v; 

// labels of the inpust
const variable = document.getElementById('variable');

paRadio.addEventListener('click', function() {
  variable.textContent = 'Bar';
  bar = v;
  result.textContent = '';
});

barRadio.addEventListener('click', function() {
  variable.textContent = 'Pa';
  pa = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(paRadio.checked)
    result.textContent = `Pa = ${computepa().toFixed(5)}`;

  else if(barRadio.checked)
    result.textContent = `Bar = ${computebar().toFixed(5)}`;
})

// calculation

function computepa() {
  return Number(bar.value) * 100000;
}

function computebar() {
  return Number(pa.value) / 100000;
}