status = "";
img = "";
objects = [];
function preload(){
    img = loadImage('piano.jpg');
}
function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function draw(){
    image(img,0,0,400,400);
}
function modelLoaded(){
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(results){
console.log(results);
objects = results;
}