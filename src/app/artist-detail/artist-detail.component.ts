import { Artist } from './../models/Artist';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ArtistService } from './../services/artist.service';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ArtistDetailComponent implements OnInit {
  artist: Artist;

  constructor(
    private route: ActivatedRoute,
    private artistService: ArtistService
  ) { }

  ngOnInit() {
    this.getArtist();
  }

  getArtist() {
    const name = this.route.snapshot.paramMap.get('name');
    return this.artistService.getArtistInfo(name)
      .subscribe(
        data => {
           this.artist = data.artist; 
        });
  }
}
