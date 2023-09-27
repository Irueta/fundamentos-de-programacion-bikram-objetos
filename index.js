//1
const Coche = {marca:"", modelo:"", matricula:""};
//2
const Casa = {codPostal:"", calle:"", portal:"", piso:""}
//3
const FullStackDeveloper = {
    lenguajes:[], 
    proyectos:[],
};
//4
const Perro = {
    nombre:"",
    raza:"",
    color:"",
    edad:"",
    ladrar: function(){
        console.log("guau")
    },
    popo: function(){
        return Math.random() * 3
    },
}
//5
let marcaPortatil=Portatil.marca;
//6
let marcaPortatil2=Portatil["marca"];
//7
const grupos=Concierto.grupos;
//8
var RGB = [Led.rojo, Led.verde, Led.azul];
//9
Portatil.modelo="P345";
//10
Concierto.cartelera.push("Guns N' Roses");
//11
Concierto.fecha=new Date();
//12
Impresora.imprimiendo = objeto={nombreArchivo:"", copias:"", numPaginas:""};
//13
Noticia={titular:"", cuerpo:""};
//14
Persona={nombre:"", apellidos:"", edad:""};
//15
Avion={
    numPasajeros:"",
    despegar: function(){console.log("despegando");}, 
    volar: function(){console.log("llegando al destino");}, 
    aterrizar: function(){console.log("aterrizando");},
};
//16
Paquete={contenido:[]};
//17
Pais={numHabitantes:"", continente:"", gentilicio:""};
//18
let codError = O_Error.codigo;
//19
let integrantes=Grupo.integrantes;
//20
let nivelesTinta={
    rojo: Impresora.tinta.rojo,
    verde: Impresora.tinta.verde,
    azul: Impresora.tinta.azul
  };
//21
let pixeles=Pantalla.pixeles;
//22
let especificaciones=Movil["especificaciones"];
//23
Grupo.numIntegrantes=5;
//24
Pantalla.dimensiones="1920x1080";
//25
Led.encendido = !Led.encendido;
//26
Movil.temperatura="20º";
