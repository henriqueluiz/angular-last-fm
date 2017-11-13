import { Artist } from './../models/Artist';
import { ArtistService } from './../services/artist.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-topartists',
  templateUrl: './topartists.component.html',
  styleUrls: ['./topartists.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TopartistsComponent implements OnInit {
  artists: Artist[];

  constructor(private artistService: ArtistService) {
    
  }

  ngOnInit() {
    this.getTopArtistsInLocale('brazil');    
  }

  getTopArtistsInLocale(country:string) {
    return  this.artistService.getTopArtistsInLocale('brazil')
    .subscribe(
      data => {
       this.artists = data.topartists.artist

      });
  }
}
