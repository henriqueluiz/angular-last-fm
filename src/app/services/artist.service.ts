import { BaseHttp } from './base-http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError} from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

const LIMIT_DEFAULT  = 10;
const PAGE_DEFAULT   =  1;

@Injectable()
export class ArtistService extends BaseHttp {

  constructor(private artistService: HttpClient) { 
    super();
  }

  /* Informações do método geo.getTopArtists da API da last-fm
    Params
      country (Required) : A country name, as defined by the ISO 3166-1 country names standard
      limit (Optional) : The number of results to fetch per page. Defaults to 50.
      page (Optional) : The page number to fetch. Defaults to first page.
      api_key (Required) : A Last.fm API key.
  */
  getTopArtistsInLocale(country:string, limitResultsPerPage?:number, page?:number): Observable<any> {
    limitResultsPerPage = limitResultsPerPage ? limitResultsPerPage : LIMIT_DEFAULT;
    page = page ? page : PAGE_DEFAULT;

    return this.artistService.get<any>(
      `${this.url}` 
       + `?method=geo.getTopArtists` 
       + `&country=${country}` 
       + `&limit=${limitResultsPerPage}` 
       + `&page=${page}` 
       + `&api_key=${this.token}` 
       + `&format=json`)
      .pipe(
        catchError(super.handleError('geo.getTopArtists', []))  
    );
  }

  /* Informações do método artist.getInfo da API da last-fm
    Params
      artist (Required (unless mbid)] : The artist name
      mbid (Optional) : The musicbrainz id for the artist
      lang (Optional) : The language to return the biography in, expressed as an ISO 639 alpha-2 code.
      autocorrect[0|1] (Optional) : Transform misspelled artist names into correct artist names, returning the correct version instead. The corrected artist name will be returned in the response.
      username (Optional) : The username for the context of the request. If supplied, the user's playcount for this artist is included in the response.
      api_key (Required) : A Last.fm API key.
  */
  getArtistInfo(artist:string, limitResultsPerPage?:number, page?:number): Observable<any> {
    limitResultsPerPage = limitResultsPerPage ? limitResultsPerPage : LIMIT_DEFAULT;
    page = page ? page : PAGE_DEFAULT;

    return this.artistService.get<any>(
      `${this.url}` 
       + `?method=artist.getInfo` 
       + `&artist=${artist}` 
       + `&lang=pt` 
       + `&limit=${limitResultsPerPage}` 
       + `&page=${page}` 
       + `&api_key=${this.token}` 
       + `&format=json`)
      .pipe(
        catchError(super.handleError('artist.getInfo', []))  
    );
  }

  
}
