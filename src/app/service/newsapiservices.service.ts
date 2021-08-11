import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http: HttpClient) { }

  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=0001d939b9d342d1b4e5580d917c5e6e";

  newsCategory = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=0001d939b9d342d1b4e5580d917c5e6e";
  
  newsByCategory(country: string, category: string): Observable<any>
  {
    this.newsCategory = "https://newsapi.org/v2/top-headlines?country="+country+"&category="+category+"&apiKey=0001d939b9d342d1b4e5580d917c5e6e";
    return this._http.get(this.newsCategory);
  }

  news(country:string): Observable<any>
  {
    this.newsApiUrl = "https://newsapi.org/v2/top-headlines?country="+country+"&apiKey=0001d939b9d342d1b4e5580d917c5e6e";
    return this._http.get(this.newsApiUrl);
  }


}
