// Based on code from http://endless.horse/


/* Credit to FRADAR for the base for this code
*/

document.addEventListener('scroll', function () {
  var pre = document.querySelector( 'pre' );
  var my_string = '            |                   |  \n';
  var my_string2 = '            |                   |crainslug 4 life\n';
  var my_string3 = '            |subscribe to craine|r \n';
  var my_string4 = '            |slogo is cool      | \n';
  var my_string5 = '            |crainer is cool    | \n';
  var orElse = '            |watch a crainer vid|eo or else... \n'; 

  /*
  var template =
  `            |                   |  
            |                   |
            |                   |
            |                   |
            |                   |
            |                   |
            |                   |
            |                   |
            |                   |
            |                   |
            |                   |
            |                   |
            |                   |
            |                   |
            |                   |
            |                   |
            |                   |
`;
*/

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
var bee =
`    __      |                   |  
   // \\     |                   |
   \\\\_/ //  |                   |
  <(||)(')  |                   |
    '''     |                   |
`;
var slugs = '𓆑𓆑𓆑𓆑  |                   |  \n'
var doge =
`            |                   |  
     __     |                   |
(___()'\`;   |                   |
/     /\`    |                   |
\\\\"--\\\\     |                   |
`;

var earth =
`            |                   |  
            |                   |             _____
            |                   |          .-'.  ':'-.
            |                   |        .''::: .:    '.
            |                   |       /   :::::'      \\
            |                   |      ;.    ':' '       ;
            |                   |      |       '..       |
            |                   |      ; '      ::::.    ;
            |                   |       \\       '::::   /
            |                   |        '.      :::  .'
            |                   |          '-.___'_.-'
`;

var long_slug = 
`            |                   |LONG SLUG LONG SLUG LONG SLUG
            |                   |LONG SLUG LONG SLUG LONG SLUG
            |                   |LONG SLUG LONG SLUG LONG SLUG
            |                   |LONG SLUG LONG SLUG LONG SLUG
            |                   |LONG SLUG LONG SLUG LONG SLUG
            |                   |LONG SLUG LONG SLUG LONG SLUG
            |                   |     _.**._      _.**._
            |                   |   /   M    \\  /   M    \\
            |                   |  |   MM     ||   MM     |
            |                   |  |   MMMM   ||   MMMM   |
            |                   |   \\   MM   /  \\   MM   /
            |                   |    ?------!    !------? 
            |                   |      ----/      \\---- 
            |                   |       \\  \\      /  /
            |                   |      ..-   --------...
            |                   |   .?                   \\.
            |                   | ./                      |
            |                   | /     __                | i speak british
            |                   ||       \\                |
            |                   ||        \\.____________./
            |                   ||    ______           |  ______
            |                   ||  /"       "\\        |/"      '"\\
            |                   ||    _-_      |       |  _--_     |
            |                   ||  /"   '\\___/        |/"   '\\___/
            |                   ||                     |
            |                   ||                     |
            |                   ||                     |
            |                   ||                     |
            |                   ||                     |
            |                   ||                     |
            |                   ||                     |
            |                   ||                     |
            |                   ||                     |
            |                   ||                     |
            |                   ||                     |
            |                   ||                     |
            |                   ||                     |
            |                   ||                     /
            |                   ||                     |
            |                   ||                    / 
            |                   ||                   | 
            |                   ||                   /
            |                   ||                  /
            |                   ||                 |
            |                   ||                / 
            |                   ||               / 
            |                   ||              |
            |                   ||              /
            |                   ||             /
            |                   ||            /
            |                   ||          _/
            |                   ||      ___/ 
            |                   ||_____/ 
            |                   |
            |                   |LONG SLUG LONG SLUG LONG SLUG
            |                   |LONG SLUG LONG SLUG LONG SLUG
            |                   |LONG SLUG LONG SLUG LONG SLUG
            |                   |LONG SLUG LONG SLUG LONG SLUG
            |                   |LONG SLUG LONG SLUG LONG SLUG
            |                   |LONG SLUG LONG SLUG LONG SLUG
`;

var griffin =
`            |                   |               A LEGENDARY GRIFFIN!!!
            |                   |
            |                   |              _____,    _..-=-=-=-=-====--,
            |                   |           _.'a   /  .-',___,..=--=--==-''
            |                   |          ( _     \\ /  //___/-=---=----'
            |                   |           ' '\\    /  //---/--==----=-'
            |                   |        ,-.    | / \\_//-_.'==-==---='
            |                   |       (.-.'\\  | |'../-'=-=-=-=--'
            |                   |        (' '\\'\\| //_|-\\.';-~''''~,        _
            |                   |             \\ | \\_,_,_\\.'        \\     .'_'\\
            |                   |              '\\            ,    , \\    || '\\\\
            |                   |                \\    /   _.--\\    \\ '._.'/  / |
            |                   |                /  /'---'   \\ \\   |''---'   \\/
            |                   |               / /'          \\ ;-. \\
            |                   |            __/ /           __) \\ ) '|
            |                   |          ((='--;)         (,___/(,_/
            |                   |
            |                   |        You may be scrolling a bit too much... 
            |                   |      or you are just a bit too lucky.
            |                   |      But give yourself a pat on the back,
            |                   |       because this is encounter is LEGENDARY.
`;

var grim_reaper =
`            |                   |  
            |                   |     An extremely rare encounter, but...
            |                   |
            |                   |                   ___          
            |                   |                  /   \\\\        
            |                   |             /\\\\ | . . \\\\       
            |                   |           ////\\\\|     ||  
            |                   |         ////   \\\\ ___//\\  
            |                   |        ///      \\\\      \\  
            |                   |       ///       |\\\\      |   
            |                   |      //         | \\\\  \\   \\  
            |                   |      /          |  \\\\  \\   \\ 
            |                   |                 |   \\\\ /   / 
            |                   |                 |    \\/   / 
            |                   |                 |     \\\\/| 
            |                   |                 |       \\\\ 
            |                   |                 |        | 
            |                   |                 |_________\\    
            |                   |  This forehead WILL make your computer crash.
`;

  // Rare cases for extreme scrollers

  var addThis = '';

  // Animal cases
  if (Math.random() < 0.0025) { 
    addThis += monkey;
  }
  if (Math.random() < 0.005) { 
    addThis += butterfly;
  }
  if (Math.random() < 0.005) { 
    addThis += birb;
  }
  if (Math.random() < 0.00085) { 
    addThis += spider;
  }
  if (Math.random() < 0.0035) { 
    addThis += camel;
  }
  if (Math.random() < 0.004) { 
    addThis += bee;
  }
  if (Math.random() < 0.0008) { 
    addThis += slugs;
  }
  if (Math.random() < 0.004) { 
    addThis += doge;
  }

  // The Earth - RARE
  if (Math.random() < 0.0003) { 
    addThis += earth;
  }

  // Long Slug - ULTRA RARE
  if (Math.random() < 0.00015) { 
    addThis += long_slug;
  }

  // Griffin - ULTRA RARE
  if (Math.random() < 0.0001) { 
    addThis += griffin;
  }

  // Grim Reaper - IMPOSSIBLE
  if (Math.random() < 0.00001) { 
    addThis += grim_reaper;
  }

 // Text cases
   if (Math.random() < 0.004) {
    addThis += my_string2;
  }
  if (Math.random() < 0.008) {
    addThis += my_string3;
  }
  if (Math.random() < 0.001) {
    addThis += my_string4;
  }
  if (Math.random() < 0.007) {
    addThis += my_string5;
  }
  if (Math.random() < 0.007) { 
    addThis += orElse;
  }

  addThis += my_string.repeat(20);
  pre.innerText += addThis;

});
