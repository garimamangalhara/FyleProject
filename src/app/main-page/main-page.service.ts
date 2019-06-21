import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MainPageService {

  constructor(private http: HttpClient) { }
  getBankDetails(url): Observable<any> {
    return this.http.get(url).map(response => response)
  }
}
