function click() { 
if (event.button==2||event.button==3) { 
oncontextmenu='return false'; 
} 
} 
document.onmousedown=click 
document.oncontextmenu = new Function("return false;") 

var codedLines = $('.line-code__top, .line-code__bott');
codedLines.each(function() {
  var el = $(this);
  var count = 100;
  var line = $();
  var text;
  var i = 0;

  setTimeout(function() {
    for (i = 0; i < count; i++) {
      text = '<div class="letter-col"></div>';
      text = $(text)
        .css('animation-duration', randomRange(2, 4) + 's')
        .append(
          '<span>' + Math.random().toString(2).substr(2, 1) + '</span>' +
          '<span>' + Math.random().toString(2).substr(2, 1) + '</span>' +
          '<span>' + Math.random().toString(2).substr(2, 1) + '</span>' +
          '<span>' + Math.random().toString(2).substr(2, 1) + '</span>'
        );
      line = line.add(text);
    }
    el.append(line);
  }, 100);
});

function randomRange(min, max) {
  return (min + ((max - min) * Math.random())).toFixed(4);
};

document.onkeydown = function(e) {
        if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {//Alt+c, Alt+v will also be disabled sadly.
        }
        return false;
};