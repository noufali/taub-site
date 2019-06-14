var wid = window.innerWidth;
var hei = window.innerHeight;
document.body.style.backgroundColor = "#F2CAC1";
document.body.style.overflow = "hidden";

var intro = document.getElementById('introDiv');
intro.style.width = wid + "px";
intro.style.height = hei + "px";

var introTitle = document.getElementById('introTitle');
var taub = ("Taub").split('');


window.onresize = resize;

function resize() {
  //console.log("resizing");
  //resize div
  wid = window.innerWidth;
  hei = window.innerHeight;

  intro.style.width = wid + "px";
  intro.style.height = hei + "px";
}

// WORD SPANS
for ( let i = 0 ; i < taub.length ; i++ ) {
  let left = getRandomInt(100, $("#introTitle").width());
  let top = getRandomInt(200, $("#introTitle").width()-100);
  let w = document.createElement('span');
  w.textContent = taub[i];
  let id = 't' + i;
  w.id = id;
  w.className = "taub";
  w.style.top = top + "px";
  w.style.left = left + "px";
  w.style.backgroundcolor = "white";
  introTitle.appendChild(w);
  $("#t" + i).draggable({
    // when user drops off word, check for its position
    // if word is on the right of the page then turn div background colour to red
    stop: function() {
      //positions();
    }
  });
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
