const btnHamburger = document.querySelector("#btnHamburger");
btnHamburger.addEventListener("click", () => {
	if (btnHamburger.classList.contains("header__burger--open")) {
		btnHamburger.classList.remove("header__burger--open");
	} else {
		btnHamburger.classList.add("header__burger--open");
	}
});
