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
  constructor(private title: Title, private meta: Meta, private route: ActivatedRoute) { }
  ngOnInit() {
    this.title.setTitle('Suyog weds Payal')
    this.meta.updateTag({ name: 'description', content: 'Join us as we embark on this beautiful journey of love, laughter, and a lifetime of shared dreams.Your presence will make our day even more special.' })

    this.meta.updateTag({ itemprop: 'description', content: 'Join us as we embark on this beautiful journey of love, laughter, and a lifetime of shared dreams.Your presence will make our day even more special.' })
    this.meta.updateTag({ itemprop: 'image', content: 'https://rawtechteam.github.io/page1.be6839336052a63c.JPG' })

    this.meta.updateTag({ property: 'og:type', content: 'website' })
    this.meta.updateTag({ property: 'og:description', content: 'Join us as we embark on this beautiful journey of love, laughter, and a lifetime of shared dreams.Your presence will make our day even more special.' })
    this.meta.updateTag({ property: 'og:image', content: 'https://rawtechteam.github.io/page1.be6839336052a63c.JPG' })

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' })
    this.meta.updateTag({ name: 'twitter:description', content: 'Join us as we embark on this beautiful journey of love, laughter, and a lifetime of shared dreams.Your presence will make our day even more special.' })
    this.meta.updateTag({ property: 'twitter:image', content: 'https://rawtechteam.github.io/page1.be6839336052a63c.JPG' })

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

      this.meta.updateTag({ itemprop: 'name', content: `${this.fname} weds ${this.sname}` })
      this.meta.updateTag({ name: 'twitter:title', content: `${this.fname} weds ${this.sname}` })
      this.meta.updateTag({ property: 'og:title', content: `${this.fname} weds ${this.sname}` })

      this.meta.updateTag({ property: 'og:url', content: `https://rawtechteam.github.io/${val.val || ''}` })
    })
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
