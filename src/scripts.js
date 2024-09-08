let thirdDec = new Date("December 3, 2023 00:00:00").getTime();

let timer = setInterval(function () {
	let now = new Date().getTime();
	let distance = now - thirdDec;

	// console.log(distance);
	let days = Math.ceil(distance / 1000 / 60 / 60 / 24);
	document.getElementById("timer").innerHTML = `${days} dni`;
	document.title = `Już ${days} dni!`
}, 1000);
