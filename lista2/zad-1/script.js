function skalowanie()
{
	var currentRange = document.getElementById("myRange").value;
	document.getElementById("thecircle").innerHTML = currentRange;
	document.getElementById("thecircle").style.height = `${currentRange}px`;
	document.getElementById("thecircle").style.width = `${currentRange}px`;
	document.getElementById("thecircle").style.lineHeight = `${currentRange}px`;
	if (currentRange < 100) {
		document.getElementById("thecircle").style.fontSize = `${currentRange/2}px`;
	} else {
		document.getElementById("thecircle").style.fontSize = "50px";
	}
}
