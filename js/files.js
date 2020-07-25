if (getUrlVars()["list"] == undefined) {
    getData(1)
} else {
    getData(getUrlVars()["list"])
}

function getData(page) {
    $.ajax({
        url: baseUrl + '1f1306c07615c0f06726',
        dataType: "json",
        success: function (data) {
            var perPage = 25;
            var totalPagination = Math.round(data.length / perPage);
            if (totalPagination !== 0) {
                var disable = '';
                var hrefsub = 'href="?list=' + (parseInt(page) - 1) + '"';
                var hrefadd = 'href="?list=' + (parseInt(page) + 1) + '"';
                if (page == 1) {
                    hrefsub = '';
                }
                if (page == totalPagination) {
                    hrefadd = '';;
                }
                if (page == 1 || page == totalPagination) {
                    disable = 'disabled';


                }
                $(".pagination").append('<li class="' + disable + '"><a ' + hrefsub + '><i class="material-icons">chevron_left</i></a></li>');
                for (var i = 1; i <= totalPagination; i++) {
                    if (i == page) {
                        $(".pagination").append('<li class="active"><a href="?list=' + i + '">' + i + '</a></li>');
                    } else {
                        $(".pagination").append('<li class="waves-effect"><a href="?list=' + i + '">' + i + '</a></li>');
                    }
                }
                $(".pagination").append('<li class="' + disable + ' waves-effect"><a ' + hrefadd + '><i class="material-icons">chevron_right</i></a></li>');
            }
            for (var i = 0; i < data.length; i++) {
                if (i >= (page * perPage) - perPage && i < page * perPage) {
                    if (data[i].data === true) {
                        var title = data[i].title;
                        var id = data[i].id;
                        var logo = data[i].logo;
                        var html = createPost(title, logo, id);
                        $(".post").append(html);
                    }
                }
            }
        },
        error: function (xhr, status, error) {
            console.log(status, error)
        }
    });
}

function createPost(title, logo, id) {
    var html = ''
    html += '<div class="col s12 m4 l3"><a href="file?id=' + id + '"><div class="card"><div class="card-image">'
    html += '<img src="' + logo + '">'
    html += '</div><div class="card-stacked"><div class="card-content">'
    html += '<h5>' + title + '</h5>'
    html += '</div></div></div></a></div>';
    return html;
}
