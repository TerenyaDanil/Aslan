const links = document.querySelectorAll("a.scroll-to");

for (const link of links) {
	link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
	e.preventDefault();
	const href = this.getAttribute("href");
	const offsetTop = document.querySelector(href).offsetTop;

	scroll({
		top: offsetTop,
		behavior: "smooth"
	});
}


const plus = document.querySelector(".header__plus");

plus.onclick = () => {
	plus.classList.toggle("active")
}


var qus = document.querySelectorAll('.qustions__item-plus')

qus.forEach(function (el) {
	el.onclick = function () {
		el.classList.toggle("active");
		el.previousElementSibling.classList.toggle("active");
	}
});

