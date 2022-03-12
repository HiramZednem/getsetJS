//REFERENCIAS HTML
btnAgregar = document.querySelector('#add');
btnMostrar = document.querySelector('#show');
btnLimpiar = document.querySelector('#clear');


class Canciones{
    //Atributos
    nombreCancion;
    autor;
    constructor() {
        
    }

    set setNombre ( nombreCancion ){
        this.nombreCancion = nombreCancion;
    }
    set setAutor ( autor ){
        this.autor = autor;
    }
    get getNombreCancion (){
        return this.nombreCancion;
    }
    get getAutor(){
        return this.autor;
    }
}

let objetos = [new Canciones(),new Canciones(),new Canciones()];
let contador = 0;

btnAgregar.addEventListener('click',()=>{
    if (contador === 3){
        alert('No se aceptan mas registros!');
    }else{
    objetos[contador].setNombre = prompt('Ingrese el Nombre de la cancion','Loco (Tu forma de ser)');
    objetos[contador].setAutor = prompt ('Ingrese el autor de la cancion','Los Auténticos Decadentes');
    contador++;
    }
});

btnMostrar.addEventListener('click',()=>{
    for(let i=0; i<contador; i++){
        console.log(`El nombre de la cancion es ${ objetos[i].getNombreCancion } y el autor es ${ objetos[i].getAutor }`);
    }
});

btnLimpiar.addEventListener('click',()=>{
    console.clear();
});
