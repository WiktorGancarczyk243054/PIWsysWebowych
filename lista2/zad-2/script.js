function walidacja()
{
	document.getElementById("nameval").style.display = `none`;
	document.getElementById("widthval").style.display = `none`;
	document.getElementById("heigthval").style.display = `none`;
	document.getElementById("depthval").style.display = `none`;
	var anyfail = false;
	
	var packagename = document.getElementById("name").value;
	if (packagename.length == 0) {
		anyfail = true;
		document.getElementById("nameval").style.display = `block`;
	}
	
	var widthvalue = document.getElementById("width").value;
	if ((widthvalue <= 0) || (widthvalue > 1000)) {
		anyfail = true;
		document.getElementById("widthval").style.display = `block`;
	}
	
	var heigthvalue = document.getElementById("heigth").value;
	if (heigthvalue <= 0 || heigthvalue > 1000) {
		anyfail = true;
		document.getElementById("heigthval").style.display = `block`;
	}
	
	var depthvalue = document.getElementById("depth").value;
	if (depthvalue <= 0 || depthvalue > 1000) {
		anyfail = true;
		document.getElementById("depthval").style.display = `block`;
	}
	
	if (anyfail) {
		clearmsg();
	} else {
		addrow();
		document.getElementById("testowy").innerHTML = `Succesfully added a package with ${packagename} with dimensions of ${widthvalue}x${heigthvalue}x${depthvalue}.`;
		document.getElementById("name").value = "";
		document.getElementById("width").value = "";
		document.getElementById("heigth").value = "";
		document.getElementById("depth").value = "";
	}
}

function clearmsg()
{
	document.getElementById("testowy").innerHTML = "";
}

function addrow() {
	var table = document.getElementById("mybody");
	var nrows = document.getElementById("mybody").rows.length;
	var row = table.insertRow(nrows);
	var cellname = row.insertCell(0);
	var cellwidth = row.insertCell(1);
	var cellheigth = row.insertCell(2);
	var celldepth = row.insertCell(3);
	var cellvolume = row.insertCell(4);
	var w = document.getElementById("width").value;
	var h = document.getElementById("heigth").value;
	var d = document.getElementById("depth").value;
	cellname.innerHTML = document.getElementById("name").value;
	cellwidth.innerHTML = w;
	cellheigth.innerHTML = h;
	celldepth.innerHTML = d;
	var v = (w*0.01*h*0.01*d*0.01).toFixed(2);
	cellvolume.innerHTML = v;
	document.getElementById("sumvolume").innerHTML = Number(document.getElementById("sumvolume").innerHTML) + Number(v);
}