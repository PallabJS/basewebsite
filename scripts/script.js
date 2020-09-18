
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

//----------- TOGGLE NAV BAR ------------------------------
var toggeled = false;
$("#navtoggler").addClass("fas fa-bars");
function toggleNav() {
	$(".navbar_wrapper").toggleClass("navbartoggled");
	$(".flave_navbar").toggleClass("flave_navbar_show")
	if (!toggeled) {
		try {
			$("#navtoggler").addClass("fa-window-close");
			$("#navtoggler").removeClass("fas fa-bars");
			toggeled = true;

			$(".maincontent_wrapper").css('filter', 'blur(10px)');
			$("#top_header").css('filter', 'blur(10px)');
			$(document.body).css('overflow', 'hidden');
		}
		catch (e) { }
	}
	else {
		try {
			$("#navtoggler").addClass("fas fa-bars");
			$("#navtoggler").removeClass("fa-window-close");
			toggeled = false;

			$(".maincontent_wrapper").css('filter', 'none');
			$("#top_header").css('filter', 'none');
			$(document.body).css('overflow', 'scroll');
		}
		catch (e) { }
	}
}

$("#navtoggler").click(() => {
	toggleNav();
})

$(".flave_navitem").click(() => {
	toggleNav();
});
