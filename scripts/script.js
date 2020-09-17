

// STICKY NAVBAR
var nav = document.getElementById("navbar");
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


// NAV BAR TOGGLING

// // Navigation Bar Toggling
$("#navtoggler").click(function () {
	$("#navbar").toggleClass("navbartoggled");
	$(".navlink").toggleClass("navlinktoggled");
});