//----------- ANIMATIONS ------------------------------

// Animation Handler
function startAnim(object, state, time) {
    var window_bottom = $(window).scrollTop() + $(window).height();
    var element_mid = $(object).position().top + 250;

    if (window_bottom >= element_mid) {
        $(object).animate(state, time);
    }
    console.log("callse");
}

// Animation definitions
$(document).ready(function () {

    $(window).scroll(() => {
        // start fade in animation
        $('.fadein').each(function (i) {
            startAnim(this, {
                opacity: 1
            }, { "duration": 1000, "queue": false });
        });
    })
});
