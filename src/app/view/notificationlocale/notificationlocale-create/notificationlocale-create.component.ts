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


  public saveNotif(): void {
    this.notificationlocaleservice.saveNotif(this.notif).subscribe((resp: number) => {
        if(resp==1){
          this.notificationlocaleservice.creernotifs(this.notif).subscribe((resp: number) => {
            if (resp != 1) {
              this.result = "notification dupliquee";

            }this.notificationlocales.push({...this.notificationlocale});
          })
          alert("saved")
        }

      if (resp == -3) {
          this.result = "locals n'existe pas";
        }if(resp == -2){
           alert("notification est deja Envoyee");
        }if(resp == -1){
        alert("notification1==null");
        }if(resp == -5){
        alert("neighbours == null");
        }
        if (resp == -4) {
          this.result = "redevable n'existe pas";
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

  get notificationlocales(): NotificationLocale[] {
    return this.notificationlocaleservice.notificationlocales;
  }

  set notificationlocales(value: NotificationLocale[]) {
    this.notificationlocaleservice.notificationlocales = value;
  }

}
