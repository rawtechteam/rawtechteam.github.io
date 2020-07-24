var baseUrl = "https://api.npoint.io/";

(function ($) {
    $(function () {

        $('.sidenav').sidenav();
        $('.parallax').parallax();

    }); // end of document ready
})(jQuery); // end of jQuery name space

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

function send(subject, body) {
    setTimeout(function () {
        window.open("mailto:rawtechteam@gmail.com?subject=" + subject + "&body=" + body);
    }, 320);
}


