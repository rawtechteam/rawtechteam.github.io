import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
declare var $: any;
declare var bootstrap: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  fname: any = 'Suyog'
  sname: any = 'Payal'
  constructor(private title: Title, private meta: Meta, private route: ActivatedRoute) { }
  ngOnInit() {
    this.title.setTitle('Suyog weds Payal')
    this.meta.updateTag({ name: 'og:description', content: 'Join us as we embark on this beautiful journey of love, laughter, and a lifetime of shared dreams.Your presence will make our day even more special.' })
    this.meta.updateTag({ name: 'description', content: 'Join us as we embark on this beautiful journey of love, laughter, and a lifetime of shared dreams.Your presence will make our day even more special.' })
    this.meta.updateTag({ name: 'og:image', content: 'https://rawtechteam.github.io/page1.be6839336052a63c.JPG' })

    this.route.params.subscribe((val: any) => {
      switch (val.val) {
        case 'bride':
          this.title.setTitle('Payal weds Suyog')
          this.meta.updateTag({ name: 'og:title', content: 'Payal weds Suyog' })
          this.meta.updateTag({ name: 'og:url', content: 'https://rawtechteam.github.io/bride' })
          this.fname = 'Payal'
          this.sname = 'Suyog'
          $('span.title small').css('margin-left', '4vw')
          break;
        case 'groom':
          this.title.setTitle('Suyog weds Payal')
          this.meta.updateTag({ name: 'og:title', content: 'Suyog weds Payal' })
          this.meta.updateTag({ name: 'og:url', content: 'https://rawtechteam.github.io/groom' })
          this.fname = 'Suyog'
          this.sname = 'Payal'
          $('span.title small').css('margin-left', '2vw')
          break;
        default:
          this.title.setTitle('Suyog weds Payal')
          this.meta.updateTag({ name: 'og:title', content: 'Suyog weds Payal' })
          this.meta.updateTag({ name: 'og:url', content: 'https://rawtechteam.github.io/' })
          this.fname = 'Suyog'
          this.sname = 'Payal'
          $('span.title small').css('margin-left', '2vw')
          break;
      }
    })
    $('#home .tag').addClass('visible');
    $(".smooth").on("scroll", function () {
      var pageTop: any = $(document).scrollTop();
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
