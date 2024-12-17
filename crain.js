// Based on code from http://endless.horse/


/* Credit to FRADAR for the base for this code
*/

document.addEventListener('scroll', function () {
  var pre = document.querySelector( 'pre' );
  var my_string = '            |                   |  \n';
  var my_string2 = '            |watch a crainer vid|eo or else... \n'; 
  var my_string3 = '            |subscribe to craine|r \n';
  var my_string4 = '            |slogo is cool      | \n';
  var my_string5 = '            |crainer is cool    | \n';
  var my_string6 = '            |you are so lucky if| you see this \n';

  // Rare cases for extreme scrollers

  var addThis = '';

  if (Math.random() < 0.008) { 
    addThis += my_string2;
  }
  if (Math.random() < 0.008) {
    addThis += my_string3;
  }
  if (Math.random() < 0.001) {
    addThis += my_string4;
  }
  if (Math.random() < 0.01) {
    addThis += my_string5;
  }
  if (Math.random() < 0.0001) {
    addThis += my_string6;
  } 

  addThis += my_string.repeat(10);
  pre.innerText += addThis;

});
