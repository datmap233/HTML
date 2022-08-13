// //Xử lý Input
var checkInput = function (input) {
	if (input.value.length > 0) {
		input.classList.add("active");
	} else {
		input.classList.remove("active");
	}
};
