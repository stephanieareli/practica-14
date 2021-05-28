function limpiarformulario (){
document.getElementById("miForm").reset();
}
var calcular= function (n1,n2,n3){
var num1=parseFloat(document.getElementById("num1").value);
var num2=parseFloat(document.getElementById("num2").value);
var num3=parseFloat(document.getElementById("num3").value);
if(num1<num2){
	return "El numero" +num1+ "es el menor";
}

else{
	if(num2<num3){
    return "El numero" +num2+ "es el menor";
	}
else{
    return "El numero" +num3+ "es el menor";;
}
}
}
var Pul =function(numero1){
	var cm=parseFloat(document.getElementById("cm").value);
	pg= cm =0.393701;
	return cm+ "metros son" +pg+ "en pulgadas";
}
var yar= function (numero1){
	var mts=parseFloat(document.getElementById("mts").value);
	yardas= mts * 1.09361;
	return mts+"metros son" +yardas+ " en yardas";
}