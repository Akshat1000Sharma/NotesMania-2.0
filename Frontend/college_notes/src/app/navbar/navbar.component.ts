import { Component,OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router,RouterModule,NavigationEnd} from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule,MatIcon,MatButtonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent implements OnInit {
  activeTab!: string;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setActiveTabBasedOnUrl(event.urlAfterRedirects);
      }
    });
  }

  ngOnInit(): void {
    this.setActiveTabBasedOnUrl(this.router.url);
  }

  setActiveTab(tabName: string): void {
    this.activeTab = tabName;
  }

  setActiveTabBasedOnUrl(url: string): void {
    if (url.includes('home')) {
      this.activeTab = 'Home';
    } else if (url.includes('about')) {
      this.activeTab = 'About';
    } else if (url.includes('contact')) {
      this.activeTab = 'Contact';
    } else if (url.includes('downloads') || (url.includes('pdfs'))) {
      this.activeTab = 'Download Notes';
    } else {
      this.activeTab = 'Home';
    }
  }
}

