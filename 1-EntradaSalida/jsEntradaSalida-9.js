/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

 var Importe;
 var Resultado;
 var nuevoImporte;

 Importe=document.getElementById("sueldo").value;
 Importe=parseInt(Importe);

 Resultado=(Importe*10)/100;

 nuevoImporte=Resultado + Importe;

  document.getElementById("resultado").value=nuevoImporte;
 
















}