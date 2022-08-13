const settingBtn = document.querySelector(".setting-btn");
const closeBtn = document.querySelector(".close-btn");
const modalSetting = document.querySelector(".modal-setting");
const modalCover = document.querySelector(".modal-cover");

settingBtn.addEventListener("click", function (e) {
	if (modalSetting.classList.value == "modal-setting open") {
		modalSetting.classList.remove("open");
		modalCover.classList.remove("open");
	} else {
		modalSetting.classList.add("open");
		modalCover.classList.add("open");
	}
});
closeBtn.addEventListener("click", function (e) {
	modalSetting.classList.remove("open");
	modalCover.classList.remove("open");
});
modalCover.addEventListener("click", function (e) {
	modalSetting.classList.remove("open");
	modalCover.classList.remove("open");
});

const collapsedBtn = document.querySelector(".collapsed");
const fullBtn = document.querySelector(".full");
const sideBar = document.querySelector(".side-bar");
const containerHome = document.querySelector(".container.home");
const contentSidebars = document.querySelectorAll(
	".side-bar>.wrapper>button>.content"
);
const btnOfSidebars = document.querySelectorAll(".side-bar>.wrapper>button");

fullBtn.addEventListener("click", () => {
	if (fullBtn.classList.value != "btn full active") {
		containerHome.style.width = "calc(100% - 250px)";
		sideBar.style.width = "250px";
		collapsedBtn.classList.remove("active");
		fullBtn.classList.add("active");
		for (contentSidebar of contentSidebars)
			contentSidebar.classList.add("open");
		for (btnOfSidebar of btnOfSidebars) btnOfSidebar.classList.add("open");
	}
});

collapsedBtn.addEventListener("click", () => {
	if (fullBtn.classList.value != "btn collapsed active") {
		containerHome.style.width = "calc(100% - 105px)";
		sideBar.style.width = "105px";
		fullBtn.classList.remove("active");
		collapsedBtn.classList.add("active");
		for (contentSidebar of contentSidebars)
			contentSidebar.classList.remove("open");
		for (btnOfSidebar of btnOfSidebars)
			btnOfSidebar.classList.remove("open");
	}
});
