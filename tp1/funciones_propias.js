function CuadradosFondo(ancho, cant, tam, negro) {
  
  for (let x=0; x<cant; x++) {
    for (let y=0; y<cant; y++) {
      for (let i=width/4; i>=5; i-=49) {
        let posX = x * tam/cant + ancho + tam;
        let posY = y * tam/cant + ancho; 
      
       if (negro) {
          fill(0);
        }
       else {
          fill(255);
        }
    
    rectMode(CENTER);
    rect(posX, posY, i, i);
    
    negro= !negro;
      }
    }
  }
  
}


function CuadradoCentro( X, Y, relleno) {
  
  for (let i=210; i>=1; i-=46) {
    
      if (relleno) {
          fill(0);
        }
       else {
          fill(255);
        }
      
      
      if (SobreCuadradoCentro(100, 600, 200)==true){
      let posX= map(i, X, 30, X, mouseX);
      let posY= map(i, Y, 30, Y, mouseY);
      rect(posX, posY, i, i);
      }
      else{
        rect(X, Y, i, i);
      }
      
      
      relleno= !relleno;
      }
  
}


function SobreCuadradoCentro( ancho, X, Y) {
  if (mouseX>X-ancho && mouseX<X+ancho && mouseY>Y-ancho && mouseY<Y+ancho) {
    return true;
  }
  else {
    return false;
  }
}
