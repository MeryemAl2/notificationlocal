import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NotificationLocale} from "../model/notificationLocale";
import {Observable} from "rxjs";
import {Notif} from "../model/notif";

@Injectable({
  providedIn: 'root'
})
export class NotificationLocaleService {
  private _notificationlocale= new NotificationLocale() ;
  private _url = 'http://localhost:8036/api/v1/notificationlocale/';

  constructor(private http: HttpClient) {}
  get notificationlocale(): NotificationLocale {
    if(this._notificationlocale == null){
      this._notificationlocale = new NotificationLocale();
    }
    return this._notificationlocale;
  }

  set notificationlocale(value: NotificationLocale) {
    this._notificationlocale = value;
  }

  public creernotifs(notif: Notif): Observable<number>{
    return this.http.post<number>(this._url, notif);
  }





}
