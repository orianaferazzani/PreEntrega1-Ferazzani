let notaApro = 0;
let nota = 0;
let suma = 0;
let contadorNotas = 0;
let promedio = 0;
let nombre= (prompt("Ingrese su nombre")) 
 

//ingresar la nota de aprobacion entre el 1 al 10  y que sea un num
do {
  notaApro = parseInt(prompt("Ingrese la nota de aprobacion (entre 1 y 10)"));
} while (notaApro >= 1 && nota <= 10 && isNaN(nota) );

do {
  nota = parseInt(prompt("Ingrese una nota entre 1 y 10, escriba 0 cuando se termine"));
  if (nota >= 1 && nota <= 10) {
    suma += nota;
    contadorNotas++;
  } else if(nota!= 0){
    alert("Nota inválida. Por favor, ingrese una nota entre 1 y 10.");
  }
} while (nota != 0);

//calculo del promedio
promedio = suma / contadorNotas;
alert(`Su promedio es: ${promedio}`);

if (promedio >= notaApro) {
  alert(`¡Muy bien, aprobaste ${nombre}!`);
} else {
  alert(`Lo siento, no aprobaste ${nombre} `);
}
