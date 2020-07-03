import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OWMapService {

  url = 'https://api.openweathermap.org/data/2.5';

  constructor(
    private _http: HttpClient
  ) { }

  async getCurrentWeather(lat, long) {
    const datas = await this._http.get(this.url + `/onecall?lat=${lat}&lon=${long}&appid=${environment.appId}&units=metric`).toPromise().catch(err => err);
    return datas;
  }
}
