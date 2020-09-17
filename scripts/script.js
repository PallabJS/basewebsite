

// STICKY NAVBAR
var nav = document.getElementsByClassName("navbar_wrapper")[0];
navOffest = nav.offsetTop;

$(window).scroll(function () {
	handleStickyNav();
});

function handleStickyNav() {
	if (window.pageYOffset >= navOffest) {
		$(nav).addClass("sticky_top");
	}
	else {
		$(nav).removeClass("sticky_top");
	}
}

$("#navtoggler").click(() => {
	$(".navbar_wrapper").toggleClass("navbartoggled");
	$(".flave_navbar").toggleClass("flave_navbar_show")
})