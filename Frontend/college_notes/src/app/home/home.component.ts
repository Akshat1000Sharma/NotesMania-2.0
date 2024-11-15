import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      import('bootstrap').then(({ Carousel }) => {
        const carouselElement = document.querySelector('#homeCarousel');
        if (carouselElement) {
          new Carousel(carouselElement, {
            interval: 10000
          });
        }
      });
    }
  }
}
