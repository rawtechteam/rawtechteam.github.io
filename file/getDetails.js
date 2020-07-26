$.ajax({
    url: baseUrl + '1f1306c07615c0f06726',
    success: function (data) {
        data.forEach(function (file) {
            if (file.id == getUrlVars()["id"]) {
                var title = $("title").html()
                $("title").html(file.title + ' - ' + title);
                $("#title").html(file.title)
                $("#downloadFile").attr("href", file.url);
                $("#poster").attr("src", "" + file.img);
                file.videoLinks.forEach(function (link, index) {
                    $("#videoBtn").append('<div class="row"><a class="waves-effect waves-light btn" href="' + link + '" target="_blank">Part ' + (index + 1) + ' Video</a></div>');
                })
            }
        })
    }
});

$("#ytBtn").click(function(){
    console.log(true)
    $("#downloadFile").attr('disabled', false);
})