/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
var Importe;
var Resultado;
var nuevoSueldo;

Importe=document.getElementById("importe").value;
Importe=parseInt(Importe);

Resultado=(Importe*25)/100;

nuevoSueldo=Importe-Resultado;

document.getElementById("resultado").value=nuevoSueldo;







}
