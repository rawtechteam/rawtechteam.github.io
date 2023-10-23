import { Component } from '@angular/core';
declare var $: any;
declare var bootstrap: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Suyog Weds Payal';
  ngOnInit() {
    $('#home .tag').addClass('visible');
    $(".smooth").on("scroll", function () {
      var pageTop = $(document).scrollTop();
      var pageBottom = pageTop + $(window).height();
      var tags = $("section");
      for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];
        if ($(tag).position().top < pageBottom) {
          $(tag).children('.tag').addClass("visible");
        } else {
          $(tag).children('.tag').removeClass("visible");
        }
      }
    });

  }
}
