import { Component } from '@angular/core';

@Component({
  selector: 'ct-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  countries;
  selectedCountry;

  ngOnInit() {
      this.countries = [
          { id: 1, name: "India"},
          { id: 2, name: "USA" },
          { id: 3, name: "China" },
          { id: 4, name: "Japan" }
      ];

      // this.selectedCountry = [{
      //     id: 1,
      //     name: "India"
      // }];
  }
}
