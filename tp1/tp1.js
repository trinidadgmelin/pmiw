//Gmelin Trinidad | 122710/10 | "Centros"
//https://youtu.be/qEx0LKFxMrQ

let img;

function preload() {
  img = loadImage('data/ref.jpg')
  }

function setup() {
   createCanvas(800, 400);
  img.resize(400, 400);
}


function draw() {
  image(img, 0, 0);
  
  CuadradosFondo(100, 2, width/2, true);
  CuadradoCentro(600, 200, true);
}
