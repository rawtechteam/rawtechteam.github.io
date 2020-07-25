$.ajax({
    url: baseUrl + "0e975edf147221c770f0",
    success: function (data) {
        var thumb = "thumbnail/"
        var href1 = data[0].url;
        var img1 = thumb + data[0].thumbnail;
        var href2 = data[1].url;
        var img2 = thumb + data[1].thumbnail;
        //var href1 = ytBase + data.items[0].id.videoId;
        //var href2 = ytBase + data.items[1].id.videoId;
        //var img1 = data.items[0].snippet.thumbnails.medium.url;
        //var img2 = data.items[1].snippet.thumbnails.medium.url;
        $("#video1").attr("href", href1);
        $("#video2").attr("href", href2);
        $("#video1 img").attr("src", img1);
        $("#video2 img").attr("src", img2);
    }
});

$.ajax({
    url: baseUrl + '1f1306c07615c0f06726',
    dataType: "json",
    success: function (data) {
        for (var i = 0; i < 3; i++) {
            if (data[i].data === true) {
                var id = data[i].id;
                var img = data[i].img;
                $("#file" + (i + 1)).attr("href", "file?id=" + id);
                $("#file" + (i + 1) + " img").attr("src", "logos/" + img);
            }
        }
    },
    error: function (xhr, status, error) {
        console.log(status, error)
    }
});

$.ajax({
    url: baseUrl + 'e60ff5fc7cb37ca68009',
    dataType: "json",
    success: function (data) {
        for (var i = 0; i < 3; i++) {
            if (data[i].active === true) {
                var id = data[i].id;
                var html = data[i].html;
                var title = data[i].title;
                $("#product" + (i + 1)).append(html);
                $("#product" + (i + 1)+" img").addClass("thumbnail");
                $("#product" + (i + 1)).append('<h5 class="truncate">' + title + '</h5></div>');
            }
        }
    },
    error: function (xhr, status, error) {
        console.log(status, error)
    }
});
