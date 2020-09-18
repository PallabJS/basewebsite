

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

// TOGGLE NAV BAR
var toggeled = false;
$("#navtoggler").addClass("fas fa-bars");

$("#navtoggler").click(() => {
	$(".navbar_wrapper").toggleClass("navbartoggled");
	$(".flave_navbar").toggleClass("flave_navbar_show")
	if (!toggeled) {
		try {
			$("#navtoggler").addClass("fa-window-close");
			$("#navtoggler").removeClass("fas fa-bars");
			console.log("toggled");
			toggeled = true;
		}
		catch (e) { }
	}
	else {
		try {
			$("#navtoggler").addClass("fas fa-bars");
			$("#navtoggler").removeClass("fa-window-close");
			console.log("shrinked");
			toggeled = false;
		}
		catch (e) { }
	}
})