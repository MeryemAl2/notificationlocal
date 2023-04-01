import {Component, OnInit} from '@angular/core';
import {NotificationLocale} from "../../../controler/model/notificationLocale";
import {NotificationLocaleService} from "src/app/controler/service/notification-locale.service";
import {Notif} from "../../../controler/model/notif";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-notificationlocale-create',
  templateUrl: './notificationlocale-create.component.html',
  styleUrls: ['./notificationlocale-create.component.css']
})
export class NotificationlocaleCreateComponent {

  notif = new Notif();
  result: any;

  constructor(private notificationlocaleservice: NotificationLocaleService) {
  }


  public creerNotif(): void {
    this.notificationlocaleservice.creernotifs(this.notif).subscribe((resp: number) => {
        if (resp == -1) {
          this.result = "locals n'existe pas";

        }if(resp==1){
          alert("saved")
        }
        if (resp == -2) {
          this.result = "redevable n'existe pas";
        }else{
          alert("babla");
        }

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      })
  }

  get notificationlocale(): NotificationLocale {
    return this.notificationlocaleservice.notificationlocale;
  }

  set notificationlocale(value: NotificationLocale) {
    this.notificationlocaleservice.notificationlocale = value;
  }


}
