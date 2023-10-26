import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
declare var $: any;
declare var bootstrap: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fname: any = 'Suyog'
  sname: any = 'Payal'
  constructor(private title: Title, private route: ActivatedRoute) { }
  ngOnInit() {
    this.title.setTitle('Suyog weds Payal')
    this.route.queryParams.subscribe((val: any) => {
      switch (val.val) {
        case 'bride':
          this.title.setTitle('Payal weds Suyog')
          this.fname = 'Payal'
          this.sname = 'Suyog'
          $('span.title small').css('margin-left', '3vw')
          break;
        case 'groom':
          this.title.setTitle('Suyog weds Payal')
          this.fname = 'Suyog'
          this.sname = 'Payal'
          $('span.title small').css('margin-left', '2vw')
          break;
        default:
          this.title.setTitle('Suyog weds Payal')
          this.fname = 'Suyog'
          this.sname = 'Payal'
          $('span.title small').css('margin-left', '2vw')
          break;
      }
    })
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
