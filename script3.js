nmb = prompt("Salut,bienvenue ddans ma super pyramide ! Combient d' etage veux-tu")
for (var i=0;i<=nmb-1;i++){
	var space =" ";
	var diez ="#";
	for (var j=nmb-i;j>=1;j--) {
		space += " ";
	}
	for (var n=nmb-i+1;n<=nmb;n++){
		diez +="#";
	}
	console.log(space+diez);	
}
