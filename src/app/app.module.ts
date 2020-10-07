import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MustMatchDirective } from './_helpers/must-match.directive';

import { AgmCoreModule } from '@agm/core';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AgmCoreModule.forRoot({
          apiKey: ''
        })
    ],
    providers: [],
    declarations: [
        AppComponent,
        MustMatchDirective
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
