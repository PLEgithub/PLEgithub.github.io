/* PSEUDOCODE
  1. create handlers for each button
  2. write functions for each click handler
  3. numerical functions will each need to do the following:
    - use innerHTML to grab the property inside the result
    - use parseInt() to convert the result to a number
    - perform associated math operation
    - use innerHTMLto write the new value to the result (#out)
  4. color-based functions will each need to do the following:
    - grab the element to create an event listener
    - add a click event to the color button/box
    - in the function, change the color of the results (#out) box
  5. Add reset function to results box (when clicked):
    - create a click event that resets the results box to 0 when clicked
    - create a click event that also resets the bgc of the box to white
*/

const a10 = document.querySelector('#a10');
a10.onclick = add10;

const a20 = document.querySelector('#a20');
a20.onclick = add20;

const a30 = document.querySelector('#a30');
a30.onclick = add30;

const n10 = document.querySelector('#n10');
n10.onclick = sub10;

const n20 = document.querySelector('#n20');
n20.onclick = sub20;

const n30 = document.querySelector('#n30');
n30.onclick = sub30;

const red = document.querySelector('#red');
red.onclick = redbg;

const blue = document.querySelector('#blue');
blue.onclick = bluebg;

const reset = document.querySelector('#out');
reset.onclick = reset0;

//SUPPORTING FUNCTIONS
function add10() {
  let result = document.querySelector('#out');
  let num = result.innerHTML;
  num = parseInt(num);
  num = num + 10;
  result.innerHTML = num;
};

function add20() {
  let result = document.querySelector('#out');
  let num = result.innerHTML;
  num = parseInt(num);
  num = num + 20;
  result.innerHTML = num;
};

function add30() {
  let result = document.querySelector('#out');
  let num = result.innerHTML;
  num = parseInt(num);
  num = num + 30;
  result.innerHTML = num;
};

function sub10() {
  let result = document.querySelector('#out');
  let num = result.innerHTML;
  num = parseInt(num);
  num = num - 10;
  result.innerHTML = num;
};

function sub20() {
  let result = document.querySelector('#out');
  let num = result.innerHTML;
  num = parseInt(num);
  num = num - 20;
  result.innerHTML = num;
};

function sub30() {
  let result = document.querySelector('#out');
  let num = result.innerHTML;
  num = parseInt(num);
  num = num - 30;
  result.innerHTML = num;
};

function redbg() {
  document.querySelector('#out').style.background = "red";
};

function bluebg() {
  document.querySelector('#out').style.background = "blue";
};

function reset0() {
  // let result = document.querySelector('#out');
  // let num = result.innerHTML;
  // num = parseInt(num);
  // num = 0;
  // result.innerHTML = num;
  // either works, above or below to reset center box to zero
  document.querySelector('#out').innerHTML = 0;
  document.querySelector('#out').style.background = "white";
};
