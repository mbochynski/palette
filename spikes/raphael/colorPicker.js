var paper_dim = {
  width: 600,
  height: 400
}

var image_url = 'images/1.jpg';

var div = document.getElementById('raphael_image');

var paper = Raphael(div, paper_dim.width, paper_dim.height);

var r_image = paper.image(image_url, 0, 0, paper_dim.width, paper_dim.height);

//var image = new Image(paper_dim.width, paper_dim.height);
//image.src = image_url;

//div.appendChild(image);

var image = document.getElementById('image');
var canvas = document.createElement('canvas');
canvas.width = paper_dim.width;
canvas.height = paper_dim.height;
var context = canvas.getContext('2d');
context.drawImage(image, 0, 0, paper_dim.width, paper_dim.height);
var data;

r_image.mousemove(function(ev){
  data = context.getImageData( ev.layerX, ev.layerY, 1, 1).data;
  console.log( data[0], data[1], data[2], data[3] );
});
