import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import your components
import { ProjectComponent } from './project/project.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LocationComponent } from './location/location.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'project', component: ProjectComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'location', component: LocationComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }  // wildcard: redirects any unknown URL to Home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }