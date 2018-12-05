import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

@Injectable()
export class MainComponent {
  items = [];
  title = 'holland-app';
  navIsOpen = false;
  constructor(private http: HttpClient) {
    this.http.get('/assets/itineraries.json')
      .subscribe((data: any) => {
        this.items = data.data[0].attributes.itineraries;
      });
  }

}
