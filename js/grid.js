var wid = window.innerWidth;
var hei = window.innerHeight;
var characters = ('aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ!@#$%^&*()-+=/?`<>;:').split('');
var grid = document.getElementById("grid-container");
var slider;


function setup () {
  createCanvas(wid, hei);
  slider = createSlider(0, 500, 0,1);
  slider.id = "hi";
  slider.position(360, 580);
  slider.parent("container");

  // WORD SPANS
  for ( let i = 0 ; i < characters.length ; i++ ) {
    let w = document.createElement('span');
    w.textContent = characters[i];
    w.id = 'c' + i;
    w.className = "grid-item";
    grid.appendChild(w);
  }
}

$(document).on('mousemove', function(e){
  $('#enlarge').css({
    left:  e.pageX,
    top:   e.pageY
  });
  $('.grid-item').hover(function(){
    let id = $(this).attr('id');
    let letter = $("#" + id).text();
    $('#enlarge').css("visibility", "visible");
    $('#enlarge').html(letter + "");
  }, function() {
    $('#enlarge').css("visibility", "hidden");
    $('#enlarge').html("");
  });
  // $('input').on('change', function(e) {
  //   let value = $(this).val();
  //   console.log(value);
  //   // CHANGE STYLE
  //
  // });
});


function draw () {
  background("#E6E6E6");

  for ( let c = 0 ; c < characters.length ; c++ ) {
    let letterDiv = document.getElementById("c" + c);
    let val = slider.value();
    letterDiv.style.fontVariationSettings = " 'wght' " + val;
  }
}

function windowResized() {
  resizeCanvas(wid, hei);
}
