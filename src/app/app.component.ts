import { Component, Input, SimpleChanges } from '@angular/core';
import { ActivatedRoute, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, RouteConfigLoadEnd, RouteConfigLoadStart, Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = 'newsapp';

  categories = [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology',
  ];
  countries = [
    { path: 'ar', name: 'Argentina' },
    { path: 'au', name: 'Australia' },
    { path: 'at', name: 'Austria' },
    { path: 'be', name: 'Belgium' },
    { path: 'br', name: 'Brazil' },
    { path: 'bg', name: 'Bulgaria' },
    { path: 'ca', name: 'Canada' },
    { path: 'cn', name: 'China' },
    { path: 'co', name: 'Colombia' },
    { path: 'cu', name: 'Cuba' },
    { path: 'cz', name: 'Czech Republic' },
    { path: 'eg', name: 'Egypt' },
    { path: 'fr', name: 'France' },
    { path: 'de', name: 'Germany' },
    { path: 'gr', name: 'Greece' },
    { path: 'hk', name: 'Hong Kong' },
    { path: 'hu', name: 'Hungary' },
    { path: 'in', name: 'India' },
    { path: 'path', name: 'Indonesia' },
    { path: 'ie', name: 'Ireland' },
    { path: 'il', name: 'Israel' },
    { path: 'it', name: 'Italy' },
    { path: 'jp', name: 'Japan' },
    { path: 'lv', name: 'Latvia' },
    { path: 'lt', name: 'Lithuania' },
    { path: 'my', name: 'Malaysia' },
    { path: 'mx', name: 'Mexico' },
    { path: 'ma', name: 'Morocco' },
    { path: 'nl', name: 'Netherlands' },
    { path: 'nz', name: 'New Zealand' },
    { path: 'ng', name: 'Nigeria' },
    { path: 'no', name: 'Norway' },
    { path: 'ph', name: 'Philippines' },
    { path: 'pl', name: 'Poland' },
    { path: 'pt', name: 'Portugal' },
    { path: 'ro', name: 'Romania' },
    { path: 'ru', name: 'Russia' },
    { path: 'sa', name: 'Saudi Arabia' },
    { path: 'rs', name: 'Serbia' },
    { path: 'sg', name: 'Singapore' },
    { path: 'sk', name: 'Slovakia' },
    { path: 'si', name: 'Slovenia' },
    { path: 'za', name: 'South Africa' },
    { path: 'kr', name: 'South Korea' },
    { path: 'se', name: 'Sweden' },
    { path: 'ch', name: 'Switzerland' },
    { path: 'tw', name: 'Taiwan' },
    { path: 'th', name: 'Thailand' },
    { path: 'tr', name: 'Turkey' },
    { path: 'ae', name: 'UAE' },
    { path: 'ua', name: 'Ukraine' },
    { path: 'gb', name: 'United Kingdom' },
    { path: 'us', name: 'United States' },
    { path: 've', name: 'Venuzuela' },
  ];

  country: any = {} ;
  category: string = "";
  constructor(private route: ActivatedRoute,private router:Router)
  {
    this.country = this.countries.filter((c) => c.path === "in")[0];
  }

  ngOnInit(): void {
    if (this.route.snapshot.params['country'] === undefined)
    {
      this.country = this.countries.filter((c) => c.path === "in")[0];
    }
    else
    {
      this.router.events.subscribe( (event) =>{
        if(event instanceof NavigationStart) {
            // Navigation started.
          this.country = this.countries.filter((c) => c.path === event.url.split('/')[2])[0];
          this.category = event.url.split('/')[3];
        }
        else if (event instanceof RoutesRecognized) {
          // Router parses the URL and the routes are recognized.
          this.country = this.countries.filter((c) => c.path === event.url.split('/')[2])[0];
          this.category = event.url.split('/')[2];
        }
      });  
    }
  }
}
