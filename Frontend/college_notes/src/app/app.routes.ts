import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { PdfsComponent } from './pdfs/pdfs.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'downloads', component: DownloadsComponent },
  { path: 'pdfs/:collegeId/:yearId/:branchId', component: PdfsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

