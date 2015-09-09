var paper_dim = {
  width: 600,
  height: 400
}

var image_url = 'images/1.jpg';

var div = document.getElementById('image');

var paper = Raphael(div, paper_dim.width, paper_dim.height);

var r_image = paper.image(image_url, 0, 0, paper_dim.width, paper_dim.height);

var image = new Image(paper_dim.width, paper_dim.height);
image.src = image_url;

div.appendChild(image);

r_image.mousemove(function(ev){
  
});
