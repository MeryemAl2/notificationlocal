import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationlocaleCreateComponent } from './view/notificationlocale/notificationlocale-create/notificationlocale-create.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { NotificationlocaleListeComponent } from './view/notificationlocale/notificationlocale-liste/notificationlocale-liste.component';

@NgModule({
  declarations: [
    AppComponent,
    NotificationlocaleCreateComponent,
    NotificationlocaleListeComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
