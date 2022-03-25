import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private _httpClient: HttpClient) { }

  saveBook(books: any[]): Observable<any> {
    return this._httpClient.post('https://meazak-angular-default-rtdb.firebaseio.com/data.json', books);
  }

  getBook() {
    return this._httpClient.get('https://meazak-angular-default-rtdb.firebaseio.com/data.json');
  }

}
