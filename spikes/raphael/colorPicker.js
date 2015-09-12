
var image = document.getElementById('image');
var paper_dim = {
  width: image.offsetWidth,
  height: image.offsetHeight
}

var canvas = document.createElement('canvas');
canvas.width = paper_dim.width;
canvas.height = paper_dim.height;
var context = canvas.getContext('2d');
context.drawImage(image, 0, 0, paper_dim.width, paper_dim.height);


var raphael_container = document.getElementById('raphael');

var paper = Raphael(raphael_container, paper_dim.width, paper_dim.height);
var area = paper.rect(0, 0, paper_dim.width, paper_dim.height);
area.attr({
  "stroke-width": 0,
  "fill": '#fff',
  "fill-opacity": '0',
  
});

var zoomed = paper.rect(0, 0, 1, 1);
zoomed.attr({
  "stroke-width": 0,
  "fill": '#fff',
  "fill-opacity": '0',
});

var x, y;
area.mousemove(function(ev){
  x = ev.layerX;
  y = ev.layerY;
  data = context.getImageData( x, y, 1, 1).data;
  console.log( data[0], data[1], data[2], data[3] );
});

function usuned() {

  var r_image = paper.image(image_url, 0, 0, paper_dim.width, paper_dim.height);

  //var image = new Image(paper_dim.width, paper_dim.height);
  //image.src = image_url;

  //div.appendChild(image);

  var image = document.getElementById('image');
  var data;

}
