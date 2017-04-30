//
// var canvas = document.getElementById("myCanvas");
// var ctx = canvas.getContext("2d");
// ctx.font = "30px Arial";
// ctx.fillText("Hello World",10,50);
// function draw() {
//   var ctx = document.getElementById('canvas').getContext('2d');
//   ctx.font = "48px serif";
//   ctx.fillText("Hello btihc", 10, 50);
//   ctx.fillText("choas is law", 20, 100);
// }
//
// function drawThis(){
//   var ctx = document.getElementById('canvas').getContext('2d');
//   ctx.font = "48px serif";
//   document.getElementById('canvas').getContext=  document.getElementById("test").value ;
// }

var canvas = new fabric.Canvas('canvas');

canvas.setBackgroundImage('img/white.jpg',
        canvas.renderAll.bind(canvas), {crossOrigin: 'anonymous'});

function blue() {
        canvas.setBackgroundImage('/img/blue.jpg',
                canvas.renderAll.bind(canvas), {crossOrigin: 'anonymous'});
}
function navy() {
        canvas.setBackgroundImage('/img/navy.jpg',
                canvas.renderAll.bind(canvas), {crossOrigin: 'anonymous'});
}
function white() {
        canvas.setBackgroundImage('/img/white.jpg',
                canvas.renderAll.bind(canvas), {crossOrigin: 'anonymous'});
}
function red() {
        canvas.setBackgroundImage('/img/red.jpg',
                canvas.renderAll.bind(canvas), {crossOrigin: 'anonymous'});
}
//
// canvas.setBackgroundImage('img/redtee.jpg',
//        canvas.renderAll.bind(canvas), {crossOrigin: 'anonymous'});


document.getElementById('file').addEventListener("change", function (e) {
  var file = e.target.files[0];
  var reader = new FileReader();
  console.log("reader   " + reader);
  reader.onload = function (f) {
    var data = f.target.result;
    fabric.Image.fromURL(data, function (img) {
      var oImg = img.set({left: 220, top: 375, width: 250, height: 200, angle: 0}).scale(0.9);
      canvas.add(oImg).renderAll();
      canvas.setActiveObject(oImg);
    });
  };
  reader.readAsDataURL(file);
});

$('#fill').change(function(){
  var obj = canvas.getActiveObject();
  if(obj){
    obj.setFill($(this).val());
  }
  canvas.renderAll();
});

$('#font').change(function(){
  var obj = canvas.getActiveObject();
  if(obj){
    obj.setFontFamily($(this).val());
  }
  canvas.renderAll();
});

function addText(slogan) {
  var oText = new fabric.IText(slogan, {
    left: 210,
    top: 190 ,
  });

  canvas.add(oText);

  canvas.setActiveObject(oText);
  $('#fill, #font').trigger('change');
  oText.bringToFront();
}

document.querySelector('#txt').onclick = function (e) {
  e.preventDefault();
  canvas.deactivateAll().renderAll();

  document.querySelector('#preview').src = canvas.toDataURL();
};

function addImage(selecteDay) {
  fabric.Image.fromURL('../img/days/' + selecteDay +'.jpg', function(img) {
    var oImg = img.set({left: 220, top: 375, width: 250, height: 200, angle: 0}).scale(0.9);
    canvas.add(oImg).renderAll();
    canvas.setActiveObject(oImg);
  });
}




// TEST FUNCTIONS TO CHANGE T SHIRT color

// function clear() {
//     var canvas = document.getElementById("canvas");
//     var ctx = canvas.getContext("2d");
//     ctx.clearRect(0, 0, 500, 500);
// }
//
//
// function Whitecanvas() {
//    clear();
//    //
//   //  canvas.setBackgroundImage('http://assets.coolhunting.com/coolhunting/mt_asset_cache/assets_c/2011/08/COMUNE-white-pocket-tee-thumb-620x669-30716.jpg',
//   //          canvas.renderAll.bind(canvas), {crossOrigin: 'anonymous'});
//     // $("#canvas").css("background-image", "url(http://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg)");
//     // canvas.renderAll.bind(canvas), {crossOrigin: 'anonymous'});
//
//     };
//
// }
//
// function Redcanvas(){
//     $("#canvas").css("background-image","url(http://assets.coolhunting.com/coolhunting/mt_asset_cache/assets_c/2011/08/COMUNE-white-pocket-tee-thumb-620x669-30716.jpg)");
// }
