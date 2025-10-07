function mousePressed() {
  if (estado===0) {
    if (sobreMouse(500, 400, 125, 60)) {
      estado=1;
    }
  }
  else if (estado===1) {
    if (sobreMouse(500, 400, 125, 60)) {
      estado=2;
    }
  }
  else if (estado===2) {
    if (sobreMouse(500, 400, 125, 60)) {
      estado=3;
    }
  }
  else if (estado===3) {
      if (sobreMouse(375, 400, 250, 60)) {
      estado=4;
      }
      if (sobreMouse(15, 400, 200, 60)) {
      estado=6;
      }
  }
  else if (estado===4) {
    if (sobreMouse(500, 400, 125, 60)) {
      estado=5;
      }
  }
}

function boton(posX, posY, tamX, tamY, textoB) {
  if (sobreMouse(posX, posY, tamX, tamY)) {
    fill(100);
  }
  else {
    fill(205);
  }
  
  rect(posX, posY, tamX, tamY, tamY/4);
  fill(0);
  textAlign(CENTER, CENTER);
  text(textoB, posX+tamX/2, posY+tamY/2);
}

function sobreMouse(posX, posY, tamX, tamY) {
  return mouseX>posX && mouseX<posX+tamX && mouseY>posY && mouseY<posY+tamY;
}

function fondo(imagen, texto, posX, posY, posXB, posYB, tamXB, tamYB, textoB) {
  image(imagen, 0, 0);
  fill(255);
  text(texto, posX, posY, width-tamXB, height-tamYB);
  boton(posXB, posYB, tamXB, tamYB, textoB);
}

function portada(imagen, texto, texto1, posX, posY, posX1, posY1) {
  image(imagen, 0, 0);
  fill(255);
  text(texto, posX, posY);
  text(texto1, posX1, posY1);
}
