function generate(){
	var firstname = ["Con:"];
	var lastname= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Ñ",];
	var rand_first = Math.floor(Math.random()*firstname.length); 
	var rand_last = Math.floor(Math.random()*lastname.length); 
	document.getElementById('result').innerHTML = "<h1>Letra:</h1><div class='alert alert-success'><h2>"+firstname[rand_first]+" "+lastname[rand_last]+"</h2></div>";
	
}



