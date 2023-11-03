import { Component, HostListener } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, Subscription, interval, map, timer } from 'rxjs';
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
  private timer$: Observable<number>;
  counter: string = '';
  constructor(private title: Title, private meta: Meta, private route: ActivatedRoute, private router: Router) {
    this.title.setTitle('Suyog weds Payal')

    this.timer$ = timer(1000, 1000).pipe(
      map(() => {
        const now = new Date();
        const targetDate = new Date('2023-12-07 12:35:00');
        const remainingTime = targetDate.getTime() - now.getTime();
        return remainingTime / 1000;
      })
    );

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {

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
    });
  }

  ngOnInit() {
    this.timer$.subscribe(timeDifference => {
      const remainingTimeInMs = timeDifference * 1000;

      const days = Math.floor(remainingTimeInMs / (1000 * 60 * 60 * 24));
      const hours = Math.floor((remainingTimeInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((remainingTimeInMs % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remainingTimeInMs % (1000 * 60)) / 1000);
      const timeRemaining = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      this.counter = timeRemaining
    });

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
