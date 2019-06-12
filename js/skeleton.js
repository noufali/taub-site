document.body.style.backgroundColor = "#7569A9";
document.body.style.overflow = "hidden";

var wid = window.innerWidth;
var hei = window.innerHeight;

$(function() {

  var colors = [
    'rgb(0, 191, 168)',
    'rgb(153, 102, 255)',
    'rgb(255, 100, 100)',
    'rgb(0, 200, 255)'
  ];

  var two = new Two({
    width: wid,
    height: hei,
    fullscreen: true,
    autostart: true
  }).appendTo(document.body);

  var w = document.getElementById("work");
  var work = two.interpret(w);
  work.scale = 1.87;

  var s = document.getElementById("skeleton");
  var skeleton = two.interpret(s);
  skeleton.scale = 1.87;

  var background = two.makeRectangle(two.width / 2, two.height / 2, two.width, two.height);
  background.noStroke();
  background.fill = "#7569A9";
  background.name = 'background';

  var container = two.makeGroup(background);
  container.add(skeleton);

  var cursor = two.makeCircle(0, 0, Math.min(two.height, two.width) / 6);
  cursor.outline = two.makeCircle(0, 0, Math.min(two.height, two.width) / 6);
  cursor.target = new Two.Vector();

  cursor.outline.noFill();
  cursor.outline.stroke = 'rgba(239, 223, 209, 0.7)';
  cursor.outline.linewidth = 2;

  container.mask = cursor;
  cursor.target.set(two.width / 2, two.height / 2);
  cursor.translation.copy(cursor.target);

  var center = _.debounce(function() {
    cursor.target.set(two.width / 2, two.height / 2);
  }, 1000);

  var drag = function(e) {
    cursor.target.set(e.clientX, e.clientY);
    center();
  };

  var touchDrag = function(e) {
    e.preventDefault();
    var touch = e.originalEvent.changedTouches[0];
    drag({
      clientX: touch.pageX,
      clientY: touch.pageY
    });
    return false;
  };

  $(window)
  .bind('mousemove', drag)
  .bind('touchmove', touchDrag);

  two.bind('update', function() {

    cursor.translation.x += (cursor.target.x - cursor.translation.x) * 0.125;
    cursor.translation.y += (cursor.target.y - cursor.translation.y) * 0.125;
    cursor.outline.translation.copy(cursor.translation);

  });

});
