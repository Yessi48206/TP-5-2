class Persona{

    constructor(nombre,  sexo,peso,altura,añoNacimiento,dni){
        this.nombre=nombre;
        this.sexo=sexo;
        this.peso=peso;
        this.altura=altura;
        this.añoNacimiento=añoNacimiento;
        this.dni=dni;
    }

    mostarGeneracion(){
        if(this.añoNacimiento>=1994 && this.añoNacimiento<=2010){
            document.write(`<h3>GENERACION Z PERTENECE ${this.nombre} </h3>`);
            document.write("<p>Poblacion de la generacion : 7.800.000</p>");
            document.write("<p>Circunstancia Historica : Expansion masiva de internet</p>");
            document.write("<p>Rasgo Caracteristico : Irreverencia</p>");
        }
        if(this.añoNacimiento>=1981 && this.añoNacimiento<=1993){
            document.write(`<h3>GENERACION Y PERTENECE ${this.nombre} </h3>`);
            document.write("<p>Poblacion de la generacion : 7.200.000</p>");
            document.write("<p>Circunstancia Historica : Inicio de la digilitacion</p>");
            document.write("<p>Rasgo Caracteristico : Frustracion</p>");
        }
        if(this.añoNacimiento>=1969 && this.añoNacimiento<=1920){
            document.write(`<h3>GENERACION X PERTENECE ${this.nombre} </h3>`);
            document.write("<p>Poblacion de la generacion : 9.300.000</p>");
            document.write("<p>Circunstancia Historica : Crisis del 73 y transicion española</p>");
            document.write("<p>Rasgo Caracteristico : Obsesion por el exito</p>");
        }
        if(this.añoNacimiento>=1949 && this.añoNacimiento<=1968){
            document.write(`<h3>GENERACION Baby Boom PERTENECE ${this.nombre} </h3>`);
            document.write("<p>Poblacion de la generacion : 12.200.000</p>");
            document.write("<p>Circunstancia Historica : Paz y expancion demografica</p>");
            document.write("<p>Rasgo Caracteristico : Ambicion</p>");
        }
        if(this.añoNacimiento>=1930 && this.añoNacimiento<=1948){
            document.write(`<h3>Generacion los niños de la posguerra pertenece ${this.nombre} </h3>`);
            document.write("<p>Poblacion de la generacion : 6.300.000</p>");
            document.write("<p>Circunstancia Historica : Conflicto belicos</p>");
            document.write("<p>Rasgo Caracteristico : Austeridad </p>");
        }

    }
    MayorEdad()
    {
    let edad=this.añoNacimiento-2010;
    
    if(edad>=18){

        document.write(`${this.nombre} es mayor de edad `);
    }else 
    { 
        document.write(`${this.nombre} es menor de edad `);
    }
    }
   // edad(){
    //   let edad1=this.añoNacimiento-2010;
    //   return edad1;
   // }
   set generacionEdad(añoNacimiento){
    this.añoNacimiento - 2010;

   }
   get MostrarEdad(){
    return this.añoNacimiento-2010;
   }
    /*GenerarDni(){

        let dni= Math.floor(Math.random()*(99999999-10000000)+10000000);
        return dni;
    }*/
    MostraDato()
    {
        document.write(`<p>Nombre : ${this.nombre} </p>`);
       
        document.write(`<p>Edad : ${this.MostrarEdad} </p>`);
        document.write(`<p>DNI : ${ this.dni} </p>`);
        document.write(`<p>Sexo : ${this.sexo} </p>`);
        document.write(`<p>Peso : ${this.peso} </p>`);
        document.write(`<p>Altura : ${this.altura} </p>`);
        document.write(`<p>Año de nacimiento : ${this.añoNacimiento} </p>`);
    }

}
/*let dni= Math.floor(Math.random()*(99999999-10000000)+10000000);
let sexo = parseInt(prompt("ingrese su sexo 1-femenino 2-masculino"));
if(sexo===1){
    sexo="femenino";
}else if(sexo===2){
sexo="masculino";
}*/



let nombre= document.getElementById("Nombreusuario");
let peso= document.getElementById("pesoUsuario");
let AñoNacimiento= document.getElementById("AñoUsuario");
let Altura= document.getElementById("alturaUsuario");

let boton= document.getElementById("Formulario");

function Formulario (){
    let boton= document.getElementById("Formulario");
    // para que se genere una sola ves el numero
boton.disabled= true;

//resetear el formulario
//boton.reset();

}


let PersonaNuevo = new Persona(nombre,"femenino",peso,Altura,AñoNacimiento,"42356236");
console.log(PersonaNuevo);

boton.MostraDato();