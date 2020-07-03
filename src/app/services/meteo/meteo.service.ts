import { Injectable } from '@angular/core';
import { GeoService } from '../geo/geo.service';
import { OWMapService } from '../owm/owmap.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  private _datas: BehaviorSubject<any> = new BehaviorSubject(null);
  public datas$: Observable<any> = this._datas.asObservable();

  constructor(
    private _geo: GeoService,
    private _owm: OWMapService
  ) { }

  async getCurrentWeather() {
    const {coords = {}} = await this._geo.getCurrentPosition().catch(err => err);
    const {
      daily = [],
      current: {
        temp = null,
        weather = []
      },
      name = 'no name',
      dt = null,
    } = await this._owm.getCurrentWeather(coords.latitude, coords.longitude);
    console.log('result:', temp);
    return {daily, current: {temp, weather}}; // {temp, temp_max, temp_min, pressure, humidity, name, dt, weather};
  }

  async getCurrentWeatherReactive() {
    const {coords = {}} = await this._geo.getCurrentPosition().catch(err => err);
    const {
      daily = [],
      current: {
        temp = null,
        weather = []
      },
      name = 'no name',
      dt = null,
    } = await this._owm.getCurrentWeather(coords.latitude, coords.longitude);
    console.log('result:', temp);
    const data = {daily, current: {temp, weather}}; // {temp, temp_max, temp_min, pressure, humidity, name, dt, weather};
    this._datas.next(data);
  }

}
