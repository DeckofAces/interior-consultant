const btnHamburger = document.querySelector("#btnHamburger");
const overlay = document.querySelector("#overlay");

btnHamburger.addEventListener("click", () => {
	if (btnHamburger.classList.contains("header__burger--open")) {
		btnHamburger.classList.remove("header__burger--open");
		overlay.style.display = "none";
		
	} else {
		btnHamburger.classList.add("header__burger--open");
		overlay.style.display = "block";
	}
});