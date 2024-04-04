//your JS code here. If required.


	let a = document.getElementById("counter");
	let b = document.getElementById("incrementBtn");
	b.addEventListener("click", () => {
	alert(parseInt(a.innerHTML));
	a.innerHTML = parseInt(a.innerHTML)+1;
	});
	
	


