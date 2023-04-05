import {Component, OnInit} from '@angular/core';
import {NotificationLocaleService} from "../../../controler/service/notification-locale.service";
import {NotificationLocale} from "../../../controler/model/notificationLocale";

@Component({
  selector: 'app-notificationlocale-liste',
  templateUrl: './notificationlocale-liste.component.html',
  styleUrls: ['./notificationlocale-liste.component.css']
})
export class NotificationlocaleListeComponent implements OnInit{

  constructor(private _notificationlocaleservice: NotificationLocaleService) {
  }

  ngOnInit(): void {
        this.findAll();
    }
  public findAll(): void{
    this._notificationlocaleservice.findAll().subscribe(data=> this.notificationlocales = data);
  }

  get notificationlocale(): NotificationLocale {
    return this._notificationlocaleservice.notificationlocale;
  }

  set notificationlocale(value: NotificationLocale) {
    this._notificationlocaleservice.notificationlocale = value;
  }

  get notificationlocales(): NotificationLocale[] {
    return this._notificationlocaleservice.notificationlocales;
  }

  set notificationlocales(value: NotificationLocale[]) {
    this._notificationlocaleservice.notificationlocales = value;
  }

}
