$(document).ready(function () {
    console.log("ready!");
    $('#hide-button').click(function () {
        $('.hide-show').hide();
    });
    $('#show-button').click(function () {
        $('.hide-show').show();
    });
    $('#toggle-button').click(function () {
        $('.toggle').toggle();
    });
    $('#slidedown-button').click(function () {
        $('.slidedown').slideDown(1500);
    });
    $('#slideup-button').click(function () {
        $('.slideup').slideUp(1500);
    });
    $('#slidetoggle-button').click(function () {
        $('.slidetoggle').slideToggle(1500);
    });
    $('#fadein-button').click(function () {
        $('.fadein').fadeIn(1500);
    });
    $('#fadeout-button').click(function () {
        $('.fadeout').fadeOut(1500);
    });
    $('#addclass-button').click(function () {
        $('.addclass').addClass("addclass red");
    });
    $('#before-button').click(function () {
        $('#before-p').before("<h1>Before</h1>");
    });
    $('#after-button').click(function () {
        $('#after-h1').after("<p>Text added after the h1 element.</p>");
    });
    $('#append-button').click(function () {
        $('.append').after("<p>This is the new paragraph!</p>");
    });
    $('#html-button').click(function () {
        $('.html').after("<h1>Appended Text</h1><p>Clicking the button added a new header and paragraph element.</p>");
    });
    $('#attr-button').click(function () {
        $('.attr').attr("style", "background-color:red");
    });
    $('#val-button').click(function () {
        $('input:text').val("Coding Dojo!");
    });
    $('#text-button').click(function () {
        $('.text').text("New line of text!");
    });
});