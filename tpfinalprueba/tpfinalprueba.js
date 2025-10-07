let img=[];
let estado=0;
let txt=['El Pijama del gato', 'Ray Bradbury', 'En una carretera solitaria de California, un gatito negro aparece de pronto entre dos carriles.', 'Dos autos que circulan en direcciones opuestas frenan en seco al verlo.', 'De uno baja una muchacha, del otro un joven; ambos se inclinan al gato al mismo tiempo.', 'Chica: "quédate con él, yo no tengo tiempo para un gato."', 'Él asiente, toma al gato y se aleja.', 'Uma Brau', 'Trinidad Gmelin'];
function preload() {
  for (let i=0; i<5; i++) {
    img[i]=loadImage('data/pant'+i+'.png');
  }
}

function setup() {
  createCanvas(640, 480);
  textSize(20);
}


function draw() {
  if (estado===0) {
    portada(img[0], txt[0], txt[1], width/2, 75, width/2, 125);
    boton(500, 400, 125, 60, "Comenzar");
  }

  else if (estado===1) {
    fondo(img[1], txt[2], 50, -100, 500, 400, 125, 60, "Siguiente");
  }

  else if (estado===2) {
    fondo(img[2], txt[3], 50, -100, 500, 400, 125, 60, "Siguiente" );
  }
  
  else if (estado===3) {
    fondo(img[3], txt[4], 100, 50, 375, 400, 250, 60, "Que se lleve el gato el otro");
    boton(15, 400, 200, 60, "Llevar el gato a casa");
  }

  else if (estado===4) {
    fondo(img[4], txt[5], 50, -100, 500, 400, 125, 60, "Siguiente" );
  }
  
  if (estado===5) {
    fondo(img[5], txt[6], 50, 50, 500, 400, 125, 60, "Creditos");
  }

  else if (estado===6) {
    portada(img[6], txt[7], txt[8], width/2, 75, width/2, 125);
    boton(width/2, 400, 125, 60, "Inicio");
  }
}
