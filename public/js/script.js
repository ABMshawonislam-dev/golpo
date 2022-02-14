let count = document.querySelectorAll(".count");
let arr = Array.from(count);
arr.map(function (item) {
	let countNumber = 0;

	function counterUp() {
		countNumber++;
		item.innerHTML = countNumber;
		if (countNumber == item.dataset.number) {
			clearInterval(stop);
		}
	}
	let stop = setInterval(function () {
		counterUp();
	}, 100);
});
// counter up

let type = document.querySelector(".type");
let cnt = 0;

function typejs() {
	type.innerHTML += type.dataset.text.charAt(cnt);
	cnt++;
	if (cnt == type.dataset.text.length + 1) {
		cnt = 0;
		type.innerHTML = "";
	}
}

let stop = setInterval(function () {
	typejs();
}, 500);
// type js

let type1 = document.querySelector(".type1");
let cnt1 = 0;

function type1js() {
	type1.innerHTML += type1.dataset.text.charAt(cnt1);
	cnt1++;
	if (cnt1 == type1.dataset.text.length + 1) {
		cnt1 = 0;
		type1.innerHTML = "";
	}
}

let stop1 = setInterval(function () {
	type1js();
}, 500);

// type js

// let count2 = 0;

// function progressBar() {
// 	count2++;
// 	innerBar.style.width = `${count2}%`;
// 	if (count2 == innerBar.dataset.percent) {
// 		clearInterval(thamo);
// 	}
// }
// let thamo = setInterval(function () {
// 	progressBar();
// }, 50);
let innerBar = document.querySelectorAll(".innerbar");
let text = document.querySelectorAll(".text");
let arr3 = Array.from(innerBar);
let arr4 = Array.from(text);

arr3.map(function (bars) {
	arr4.map(function (lekha) {
		let count2 = 0;

		function pgbar() {
			count2++;
			bars.style.width = `${count2}%`;
			lekha.innerHTML = `${count2}%`;
			if (count2 == bars.dataset.percent) {
				clearInterval(thamo);
			}
			if (count2 == lekha.dataset.number) {
				clearInterval(thamo);
			}
		}

		let thamo = setInterval(function () {
			pgbar();
		}, 50);
	});
});
