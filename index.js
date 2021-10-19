var navLinks = $(".navlinks");
var dropDownButton = $(".navlinks-drop-down");
var dropDown = $(".drop-down");

dropDownButton.click(function() {
    $(".drop-down").removeClass("hidden");
    console.log("drop clicked");
})

$(document).click(function(e) {
    var myClass = e.target.id;
    if (myClass != 'noActionDiv') {
        console.log("action");
        dropDown.addClass("hidden");
    };
});

checkPosition();


function checkPosition() {
    if (window.matchMedia('(max-width: 750px)').matches) {
        navLinks.addClass("hidden");
        dropDownButton.removeClass("hidden");
        $(".search-input").addClass("hidden");
        $(".cta").addClass("hidden");
        $("#logo").css("margin-right", "auto");
        $(".search-input-phone").removeClass("hidden");
        console.log("width Change");
    } else {
        console.log("nothi");
    }
}