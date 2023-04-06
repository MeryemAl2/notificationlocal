import {Component, OnInit} from '@angular/core';
import {NotificationLocale} from "../../../controler/model/notificationLocale";
import {NotificationLocaleService} from "src/app/controler/service/notification-locale.service";
import {Notif} from "src/app/controler/model/notif";

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
    this.notificationlocaleservice.saveNotif(this.notif).subscribe((respn: number) => {
      if (respn == 1) {
        this.notificationlocaleservice.creernotifs(this.notif).subscribe((resp: number) => {
          if (resp == 1) {
            alert("saved");
            this.notificationlocaleservice.findAll().subscribe(data=> this.notificationlocales=data);
          }

          if (resp == -3) {
            alert("locals n'existe pas");
          }
          if (resp == -2) {
            alert("notification deja enregistrée");
          }
          if (resp == -1) {
            alert("notification n'existe pas") ;
          }

          if (resp == -4) {
            alert("redevable n'existe pas");
          }

        })

      }else{
        this.result = "notification dupliquee";
      }

      //this.notificationlocales.push({...this.notificationlocale});
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
