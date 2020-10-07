import { Component } from '@angular/core';

@Component({ selector: 'app', templateUrl: 'app.component.html', styleUrls: ['app.component.css'], })
export class AppComponent {
  model: any = {};

  lat = 51.678418;
  lng = 7.809007;

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));
  }
}
