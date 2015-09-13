var enlargeOffset = 4; //we will take 9x9 grid 4 + 1 + 4
var gridSize = enlargeOffset * 2 + 1;

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

var zoomed = [];
var zoomed_row = [];
var zoomed_el;
var x = 0;
var y;
for(x; x < gridSize; x++){
  for(y = 0; y < gridSize; y++){
    zoomed_el = paper
      .rect(0, 0, 10, 10)
      .attr({
        "stroke-width": 0,
        "fill": '#00f',
        "fill-opacity": '1',
      });
    zoomed_row.push(zoomed_el);
  }
  zoomed.push(zoomed_row);
  zoomed_row = [];
}


function groupImageData(data){
  //takes linear array from context.getImageData
  //and translate it to array of arrays ( color, opacity )
  //[ [ color, opacity ], [ color, opacity ], ... ]
  //color is hex #ff00ff; opacity is float 0 - 1
  var grouped = [];
  data.forEach(function(val, i, arr){
    if(i % 4 === 0){
      grouped.push([Raphael.rgb(arr[i], arr[i + 1], arr[i + 2]), arr[i + 3]/255]);
    }
  });
  return grouped;
}

function arrayToGrid(arr, cols){
  var rows = [];
  var col = [];
  arr.forEach(function(val, i, arr){
    col.push( val );
    if((i + 1) % cols === 0){
      rows.push(col);
      col = [];
    }
  });
  return rows;
}

function moveOffset(x, cx, cxs){
  return 10 + x + cx * cxs;
}

function moveElementWithColor(el, x, y, color_arr){
  var grid = arrayToGrid(groupImageData(color_arr), 9);
  var cx = 0;
  var cy = 0;
  grid.forEach(function(row, i, a){
    row.forEach(function(item, ii, aa){
      console.log( cx, cy );
      el[cy][cx].attr({
        x: moveOffset(x, cx, 11),
        y: moveOffset(y, cy, 11),
        fill: item[0]
      });
      cx++;
    });
    cx = 0;
    cy++;
  });
}

var x, y;
area.mousemove(function(ev){
  x = ev.layerX;
  y = ev.layerY;
  data = context
    .getImageData(x - enlargeOffset, y - enlargeOffset, gridSize, gridSize)
    .data;
  moveElementWithColor(zoomed, x, y, data);
  console.log(data[0], data[1], data[2], data[3]);
});

