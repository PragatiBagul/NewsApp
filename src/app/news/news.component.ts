import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router, RoutesRecognized } from '@angular/router';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
  
export class NewsComponent implements OnInit {

  news: any = [];
  country: string ="";
  category: string ="";

  constructor(private _service:NewsapiservicesService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    if (this.route.snapshot.params['country'] === undefined)
    {
      this._service.news("in").subscribe(result => {
        this.news = result.articles;
      });
    }
    else
    {
      this.router.events.subscribe( (event) =>{
        if(event instanceof NavigationStart) {
            // Navigation started.
          this.country =  event.url.split('/')[2];
          this.category = event.url.split('/')[3];
          if (this.category === undefined)
          {
            this._service.news(this.country).subscribe(result => {
              this.news = result.articles;
            }); 
          }
          else
          {
            this._service.newsByCategory(this.country,this.category).subscribe(result => {
              this.news = result.articles;
            });
          }
        }
        else if (event instanceof RoutesRecognized) {
          // Router parses the URL and the routes are recognized.
          console.log(event.url.split('/'));
          this.category = event.url.split('/')[2];
          if (this.category === undefined)
          {
            this._service.news(this.country).subscribe(result => {
              this.news = result.articles;
            }); 
          }
          else
          {
            this._service.newsByCategory(this.country,this.category).subscribe(result => {
              this.news = result.articles;
            });
          }
        }
      }); 
    }
  }
}
