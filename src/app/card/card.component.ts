import { TopArtist } from './../models/TopArtist';
import { Component, OnInit, ViewEncapsulation , Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {
  @Input() artist: TopArtist;

  constructor() { }

  ngOnInit() {
  }

}
