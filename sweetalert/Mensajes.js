 function texto_aleatorio() {
    var textos = new Array()
    textos[0]="";
    textos[1]="";
    textos[2]="";
    textos[3]="";
    textos[4]="";
    
    aleat = Mat.random() * (textos.length)
    aleat = Mat.floor(aleat)
 }

    swal('Bienvenido!', '+texto_aleatorio()+', 'success');   
 