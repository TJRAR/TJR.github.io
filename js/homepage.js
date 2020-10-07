fadeinByid("maintitlebackground", 2, 0, 50);
fadeinByid("pOst", 2, 1000, 50);
fadeinByid("ceil", 2, 1000, 50);
fadeinByid("list",2,2000,50);

function fadeinByid(iD, tIme, wAit, fPs) {
	var dEaly = 0;
	var ID = document.getElementById(iD);
	ID.style.opacity = dEaly;
	setTimeout(function() {
		var interId = setInterval(function() {
			dEaly += (100 / (tIme * fPs || 50) / 100) || 0.02;
			ID.style.opacity = dEaly;
			if (parseInt(dEaly) == 1) {
				clearInterval(interId);
			}
		}, 1000 / fPs || 20)
	}, wAit || 0);
}
