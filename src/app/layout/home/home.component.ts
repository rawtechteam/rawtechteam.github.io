import { Component, HostListener } from '@angular/core';
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
  image1: any = './assets/page1.JPG'
  image2: any = './assets/page2.JPG'
  image3: any = './assets/page3.JPG'
  image4: any = './assets/page4.JPG'
  fname: any = 'Suyog'
  sname: any = 'Payal'
  constructor(private title: Title, private meta: Meta, private route: ActivatedRoute) {
    this.title.setTitle('Suyog weds Payal')
    this.route.params.subscribe((val: any) => {
      switch (val.val) {
        case 'bride':
          this.fname = 'Payal'
          this.sname = 'Suyog'
          break;
        case 'groom':
          this.fname = 'Suyog'
          this.sname = 'Payal'
          break;
        default:
          this.fname = 'Suyog'
          this.sname = 'Payal'
          break;
      }
      this.title.setTitle(`${this.fname} weds ${this.sname}`)
      this.meta.addTag({ itemprop: "name", content: `${this.fname} weds ${this.sname}` })
      this.meta.addTag({ name: 'twitter:title', content: `${this.fname} weds ${this.sname}` })
      this.meta.addTag({ property: 'og:title', content: `${this.fname} weds ${this.sname}` })
      this.meta.addTag({ property: 'og:url', content: `https://rawtechteam.github.io/${val.val || ''}` })
    })
  }
  ngOnInit() {
    $('#home .tag').addClass('visible');
    $(".smooth").on("scroll", function () {
      var pageTop: any = $(document).scrollTop();
      var pageBottom = pageTop + $(window).height();
      const tags = $("section");
      const select = '.main'
      for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];
        if ($(tag).position().top < pageBottom) {
          $(tag).find(select).addClass("visible");
        } else {
          $(tag).find(select).removeClass("visible");
        }
      }
    });
    $('#home').find('.main').addClass("visible");
  }

  pageChange(val: any) {
    switch (val) {
      case 'up':
        document?.querySelector('#dates')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'down':
        document?.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
        break;
    }
  }

  dateCondition() {
    const current = new Date();
    const endDate = new Date('11/1/2023')
    if (current >= endDate) {
      return true
    }
    return false

  }
}
