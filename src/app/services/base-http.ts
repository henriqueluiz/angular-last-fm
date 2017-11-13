import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

export class BaseHttp {
  protected url:string;
  protected token:string;

  constructor() {
    this.url = "http://ws.audioscrobbler.com/2.0/";
    this.token = "67b23f8e98126edc1f9fd48ec63c8d09";
   }



   //tratamento de erro retirado da documentação do angular.
   protected handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      return of(result as T);
    };
  }
}