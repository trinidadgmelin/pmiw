let imagen=[];
let estado=0;
let frases=['El Pijama del gato', 'Ray Bradbury', 'En una carretera solitaria de California, un gatito negro aparece de pronto entre dos carriles.', 'Dos autos que circulan en direcciones opuestas frenan en seco al verlo.', 'De uno baja una muchacha, del otro un joven; ambos se inclinan al gato al mismo tiempo.', 'chica: Quédate con él, yo no tengo tiempo para un gato. El chico duda', 'Él asiente, toma al gato y se aleja.', 'Uma Brau', 'Trinidad Gmelin'];
function preload() {
  for (let i=0; i<4; i++) {
    imagen[i]=loadImage('data/pant'+i+'.png');
  }
}

function setup() {
  createCanvas(640, 480);
  textSize(20);
}


function draw() {
  if (estado===0) {
    portada(imagen[0], frases[0], frases[1], width/2, 75, width/2, 125);
    boton(500, 400, 125, 60, "Comenzar");
  }

  else if (estado===1) {
    fondo(imagen[1], frases[2], 50, -100, 500, 400, 125, 60, "Siguiente");
  }

  else if (estado===2) {
    fondo(imagen[2], frases[3], 50, -100, 500, 400, 125, 60, "Siguiente" );
  }
  
  else if (estado===3) {
    fondo(imagen[3], frases[4], 100, 50, 375, 400, 250, 60, "Que se lleve el gato el otro");
    boton(15, 400, 200, 60, "Llevar el gato a casa");
  }

  else if (estado===4) {
    fondo(imagen[4], frases[5], 50, -100, 500, 400, 125, 60, "Siguiente" );
  }
  
  if (estado===5) {
    fondo(imagen[5], frases[6], 50, 50, 500, 400, 125, 60, "Creditos");
  }

  else if (estado===6) {
    portada(imagen[6], frases[7], frases[8], width/2, 75, width/2, 125);
    boton(width/2, 400, 125, 60, "Inicio");
  }
}
