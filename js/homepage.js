HTMLBodyElement.onload = fclist(), fcceil(), fcpostdiv()
document.getElementById("list").style.visibility = "hidden";

function fclist() {
	setTimeout(function() {
		document.getElementById("list").style.visibility = "visible";
	}, 2000);
}
document.getElementById("ceil").style.visibility = "hidden";

function fcceil() {
	setTimeout(function() {
		document.getElementById("ceil").style.visibility = "visible";
	}, 1000);
}
divset = document.getElementsByClassName("postdiv");
for (var i = 0; i < divset.length; i++) {
	divset[i].style.visibility = "hidden";
}

function fcpostdiv() {
	setTimeout(function() {
		divset = document.getElementsByClassName("postdiv");
		for (var i = 0; i < divset.length; i++) divset[i].style.visibility = "visible";
	}, 1000)
}
