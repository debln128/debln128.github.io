//window.addEventListener('load', init);
$(document).ready(init);

function init(){
  app.canvas = $('#mycanvas');
  app.ctx = $('#mycanvas')[0].getContext('2d');

  app.grid_canvas = $('#gridcanvas');
  app.grid_ctx = $('#gridcanvas')[0].getContext('2d');
 //1. firstly draw the grid in the canvas
  drawGrid(app.rows, app.columms);
  app.currentSelect = document.getElementById('square2');
  $(app.currentSelect).css('border-color', 'black');
  app.colorSelect = document.getElementById('black');
  $(app.colorSelect).css('border', '5px grey solid');
 //2. secondly create the drawing pen
  $(document).on('mousemove', function(event){
    app.mouseX = event.clientX;
    app.mouseY = event.clientY;
  })
  $('#mycanvas').on('mousedown', drawContent);
  $(document).on('mouseup', function(){
    clearInterval(app.mydraw);
    if(app.shape == 'eraser1' || app.shape == 'eraser2'){
      if(app.showGrid){
        $('#mycanvas').css('background','transparent');
      }
    }
  })
 //3. thirdly append the function to each bar
  setShapeBar();
  setColorBar();
 //4. save the image to the local disk, the fire target must be a tag
  $('#downloadButton').on('click', function(){
    downloadCanvas(this);
  });
  $('#reloadButton').on('click', function(){
    app.ctx.clearRect(0, 0, $('#mycanvas').width(),  $('#mycanvas').height());
  })
  $('#gridButton').on('click', function(){
    if(app.showGrid){
     $('#mycanvas').css('background','white');
     app.showGrid = false;
    }
    else{
     $('#mycanvas').css('background','transparent');
     app.showGrid = true;
    }
  })
}



function drawGrid(rows, columns){
  app.grid_ctx.clearRect(0, 0, app.grid_canvas.width(), app.grid_canvas.height());
  var midWidth = app.grid_canvas.width()/rows;
  var midHeight = app.grid_canvas.height()/columns;

  app.grid_ctx.beginPath();
  for(var yindex = 0; yindex < columns + 1 ; yindex++){
    var thisHeight  = yindex * midHeight;
    app.grid_ctx.strokeStyle = '#BEC3C4';
    app.grid_ctx.lineWidth = '1';
    app.grid_ctx.moveTo(0, thisHeight);
    app.grid_ctx.lineTo(app.grid_canvas.width(), thisHeight);
    app.grid_ctx.stroke();
  }
  for(var xindex = 0; xindex < rows + 3 ; xindex++){
    var thisWidth = xindex * midWidth;
    app.grid_ctx.strokeStyle = '#BEC3C4';
    app.grid_ctx.lineWidth = '1';
    app.grid_ctx.moveTo(thisWidth, 0);
    app.grid_ctx.lineTo(thisWidth ,app.grid_canvas.height());
    app.grid_ctx.stroke();
  }
}

function drawContent(event){
    if(app.shape == 'eraser1' || app.shape == 'eraser2'){
      $('#mycanvas').css('background','white');
    }
    app.mydraw = setInterval(function(){
       app.contentDraw(app.mouseX, app.mouseY, app.shape);
    }, 50);
}

function setShapeBar(){
  ////////////////////////////////square shape
   $('.shapeSelect.square').on('click', function(event){
      app.shape = 'square';
    })
   $('#square1').on('click', function(event){
     changeSelect(event.target);
     app.radius = 60;
     app.rows = 11;
     app.columns = 5;
     drawGrid(app.rows, app.columns);
   })
   $('#square2').on('click', function(event){
     changeSelect(event.target);
     app.radius = 30;
     app.rows = 22;
     app.columns = 10;
     drawGrid(app.rows, app.columns);
   })
   $('#square3').on('click', function(event){
     changeSelect(event.target);
     app.radius = 15;
     app.rows = 44;
     app.columns = 20;
     drawGrid(app.rows, app.columns);
   })
  ////////////////////////////////circle shape
   $('.shapeSelect.circle').on('click', function(event){
     app.shape = 'circle';
   })
   $('#circle1').on('click', function(event){
     changeSelect(event.target);
     app.radius = 60;
     app.rows = 11;
     app.columns = 5;
     drawGrid(app.rows, app.columns);
   })
   $('#circle2').on('click', function(event){
     changeSelect(event.target);
     app.radius = 30;
     app.rows = 22;
     app.columns = 10;
     drawGrid(app.rows, app.columns);
   })
   $('#circle3').on('click', function(event){
     changeSelect(event.target);
     app.radius = 15;
     app.rows = 44;
     app.columns = 20;
     drawGrid(app.rows, app.columns);
   })
  ////////////////////////////////eraser1 is square, eraser2 is circle
   $('#squareWipe').on('click', function(event){
     app.shape = 'eraser1';
     changeSelect(event.target);
   })
   $('#circleWipe').on('click', function(event){
     app.shape = 'eraser2';
     changeSelect(event.target);
   })
}

function changeSelect(obj){
  console.log(app.currentSelect.className);
  if(obj.className.indexOf('eraser') != -1){ //click on eraser
    if($(app.currentSelect).attr('class').indexOf('eraser') == -1){ //click on eraser, coming from shape
      $(app.currentSelect).css('border-color', '#A8A8A8');
      $(obj).css('border', 'grey 3px solid');
      app.currentSelect = obj;
    }
    else{  //click on eraser, coming from eraser
      $(app.currentSelect).css('border', '1px dotted white');
      $(obj).css('border', 'grey 3px solid');
      app.currentSelect = obj;
    }
  }
  else{ //click on shape
    if($(app.currentSelect).attr('class').indexOf('eraser') != -1){ //click on shape coming from eraser
      $(app.currentSelect).css('border', '1px dotted white');
      $(obj).css('border-color', 'black');
      app.currentSelect = obj;
    }
    else{ //click on shape, coming from shape
      $(app.currentSelect).css('border-color', '#A8A8A8');
      $(obj).css('border-color', 'black');
      app.currentSelect = obj;
    }
  }
}

function setColorBar(){
   $('#black').on('click', function(e){
     app.fillColor = $(this).css('backgroundColor');
     changeSelect2(event.target);
   })
   $('#red').on('click', function(e){
     app.fillColor = $(this).css('backgroundColor');
     changeSelect2(event.target);
   })
   $('#green').on('click', function(e){
     app.fillColor = $(this).css('backgroundColor');
     changeSelect2(event.target);
   })
   $('#blue').on('click', function(e){
     app.fillColor = $(this).css('backgroundColor');
     changeSelect2(event.target);
   })
   $('#yellow').on('click', function(e){
     app.fillColor = $(this).css('backgroundColor');
     changeSelect2(event.target);
   })
   $('#white').on('click', function(e){
     app.fillColor = $(this).css('backgroundColor');
     changeSelect2(event.target);
   })
}

function changeSelect2(obj){
   $(app.colorSelect).css('border','');
   $(obj).css('border', '5px grey solid');
   app.colorSelect = obj;
}

function downloadCanvas(link){
  //$('#mycanvas').css('background','white');
  var data = app.ctx.getImageData(0, 0, $('#mycanvas').width(),  $('#mycanvas').height());
  app.ctx.globalCompositeOperation = "destination-over";
  app.ctx.fillStyle = 'white';
  app.ctx.fillRect(0, 0, $('#mycanvas').width(),  $('#mycanvas').height());
  var imageData = document.getElementById('mycanvas').toDataURL("image/png");
  link.href = imageData;
  link.download = 'test.png';
  app.ctx.clearRect(0, 0, $('#mycanvas').width(),  $('#mycanvas').height());
  app.ctx.putImageData(data, 0, 0);
  app.ctx.globalCompositeOperation = "source-over";
  //$('#mycanvas').css('background','transparent');
}

var app = {
  canvas: null,
  ctx: null,
  grid_canvas: null,
  grid_ctx: null,
  rows: 22,
  columms: 10,
  showGrid: true,
  mydraw: null,
  mouseX: null,
  mouseY: null,
  shape: 'square',
  currentSelect: $('#square2'),
  colorSelect2: null,
  radius: 30,
  density: 100,
  fillColor: 'black',
  contentDraw: function(xPos, yPos, shape){
    if(shape == 'square'){
        for(var i = 0; i < this.density; i++){
          var offset = this.canvas.offset();
          var newX = xPos + Math.floor(Math.random() * 2 * (this.radius + 1)) - this.radius - offset.left;
          var newY = yPos + Math.floor(Math.random() * 2 * (this.radius + 1)) - this.radius - offset.top;
          this.ctx.globalCompositeOperation = 'source-over'; /////////here change the blend mode of different color, https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation
          this.ctx.fillStyle = this.fillColor;
          this.ctx.fillRect(newX, newY, 1, 1);
        }
    }
    else if(shape == 'circle'){
      for(var i = 0; i < this.density + 80; i++){
        var offset = this.canvas.offset();
        this.ctx.globalCompositeOperation = 'source-over';
        var newX = xPos + Math.floor(Math.random() * 2 * (this.radius + 1)) - this.radius - offset.left;
        var newY = yPos + Math.floor(Math.random() * 2 * (this.radius + 1)) - this.radius - offset.top;
        var dist = Math.sqrt(Math.pow(newX - xPos + offset.left, 2) + Math.pow(newY - yPos + offset.top, 2));
        if(dist <= this.radius){
          this.ctx.fillStyle = this.fillColor;
          var opacity = 1 - (dist / this.radius);
          this.ctx.globalAlpha = opacity;
          this.ctx.fillRect(newX, newY, 1, 1);
          this.ctx.globalAlpha = 1;
        }
      }
    }
    else if(shape == 'eraser1'){
      var offset = this.canvas.offset();
      var newX = xPos - offset.left - this.radius - 10;
      var newY = yPos - offset.top - this.radius - 10;
      // this.ctx.fillStyle = 'white';
      // this.ctx.fillRect(newX, newY, 2*this.radius + 20, 2*this.radius + 20);
      app.ctx.clearRect(newX, newY, 2*this.radius + 20, 2*this.radius + 20);

    }
    else if(shape == 'eraser2'){
      var offset = this.canvas.offset();
      var newX = xPos - offset.left;
      var newY = yPos - offset.top;
      this.ctx.globalCompositeOperation = 'destination-out';
      this.ctx.beginPath();
      this.ctx.arc(newX, newY, this.radius, 0, 2 * Math.PI);
      this.ctx.fillStyle = 'rgba(255, 255, 255, 1)';
      this.ctx.fill();
    }
  }
}
