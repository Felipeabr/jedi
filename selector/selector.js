function desapareceRojo(id) {
	var obj = document.getElementById(id);
	obj.parentNode.removeChild(obj);
}

function esconder(clas) {
	var clase = document.getElementsByClassName(clas); //array de divs
	for (var i = 0; i < clase.length; i++) {
		clase[i].style.display = "none";
	}
}

function borrar() {
	var bor = document.getElementById("bod");
	while(bor.hasChildNodes()) {
		bor.removeChild(bor.firstChild);
	}
}