import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MeteoService } from './services/meteo/meteo.service';
import { ToastController, Platform } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  date = new Date().toLocaleDateString();
  title = 'Meteo';
  datas: any = null;
  datas$: Observable<any> = null;

  constructor(
    private _api: MeteoService,
    private _toastCtrl: ToastController,
    private _platform: Platform
  ) {
    this._platform.ready().then(platform => {
      this.displayToastInstall();
    })
  }

  async ngOnInit() {
    const datas = await this._api.getCurrentWeather().catch(err => err);
    console.log(datas);
    this.datas = datas;
    // await this._api.getCurrentWeatherReactive();
    // this._api.datas$
    // .subscribe(res => this.datas = res).unsubscribe();
  }

  async displayToastInstall(platform = null) {
    // Detects if device is on iOS
    const isIos = () => {
      const userAgent = platform || window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod/.test( userAgent );
    };
    // Detects if device is in standalone mode
    const isInStandaloneMode = () => ('standalone' in (window as any).navigator) && ((window as any).navigator.standalone);
    // Checks if should display install popup notification:
    console.log(platform, isIos(), !isInStandaloneMode());
    if (isIos() && !isInStandaloneMode()) {
      const toast = await this._toastCtrl.create({
        header: 'Install PWA',
        message: 'la la, lala, lalalala',
        buttons: [
          {
            text: 'Ok',
            role: 'ok'
          }
        ]
      });
      await toast.present();

    }
  }
}
