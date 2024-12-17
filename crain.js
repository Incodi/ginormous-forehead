// Based on code from http://endless.horse/


/* Credit to FRADAR for the base for this code
*/

document.addEventListener('scroll', function () {
  var pre = document.querySelector( 'pre' );
  var my_string = '            |                   |  \n';
  var orElse = '            |watch a crainer vid|eo or else... \n'; 
  var my_string3 = '            |subscribe to craine|r \n';
  var my_string4 = '            |slogo is cool      | \n';
  var my_string5 = '            |crainer is cool    | \n';
  var my_string6 = '            |you are so lucky if| you see this \n';
  var monkey = 
  `            |                   |  
            |                   |    __
            |                   w  c(..)o   (
            |                   |\\__(-)    __)
            |                   |    /\\   (
            |                   |   /(_)___)
            |                   |   w /|
            |                   |    | \\
            |                   |    m  m
`;

var butterfly =
`(\\o/)       |                   |
(/|\\)       |                   |
`;

var birb =
`            |                   |  
            |                   |   .-.
            |                   |  /'v'\\
            |                   | (/   \\)
            |                   |='="="===< 
            |                   |   |_|
`;
var spider =
`            |                   |  
            |                   |
            |       / _ \\       |    
            |     \\_\\(_)/_/     |
            |      _//"\\\\_      |
            |       /   \\       |
`;
var camel =
`            |                   |  
            |                   |     //
            |                   |   _oo\\
            |                   |  (__/ \\  _  _
            |                   |     \\  \\/ \\/ \\
            |                   |     (         )\\
            |                   |      \\_______/  \\
            |                   |       [[] [[]
            |                   |       [[] [[]
`;

  // Rare cases for extreme scrollers, collected with addThis

  var addThis = '';

  // Image cases
  if (Math.random() < 0.001) { 
    addThis += monkey;
  }
  if (Math.random() < 0.001) { 
    addThis += butterfly;
  }
  if (Math.random() < 0.001) { 
    addThis += birb;
  }
  if (Math.random() < 0.0005) { 
    addThis += spider;
  }
  if (Math.random() < 0.001) { 
    addThis += camel;
  }


 // Text cases
  if (Math.random() < 0.008) {
    addThis += my_string3;
  }
  if (Math.random() < 0.001) {
    addThis += my_string4;
  }
  if (Math.random() < 0.007) {
    addThis += my_string5;
  }
  if (Math.random() < 0.0001) {
    addThis += my_string6;
  } 
  if (Math.random() < 0.007) { 
    addThis += orElse;
  }

  addThis += my_string.repeat(15);
  pre.innerText += addThis;

});
