import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopArtist } from './models/TopArtist';
import { TopartistsComponent } from './topartists/topartists.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';


const routes: Routes = [
  { path: '', redirectTo: 'topartists', pathMatch: 'full'},
  { path: 'topartists', component: TopartistsComponent },
  { path: 'artist/:name', component: ArtistDetailComponent },
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})

export class AppRoutingModule {

 }
