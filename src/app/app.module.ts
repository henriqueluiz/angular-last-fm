import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { ArtistService } from './services/artist.service';
import { CardComponent } from './card/card.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { TopartistsComponent } from './topartists/topartists.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ArtistDetailComponent,
    TopartistsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ArtistService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
