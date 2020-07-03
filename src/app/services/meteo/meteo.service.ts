import { Injectable } from '@angular/core';
import { GeoService } from '../geo/geo.service';
import { OWMapService } from '../owm/owmap.service';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(
    private _geo: GeoService,
    private _owm: OWMapService
  ) { }

  async getCurrentWeather() {
    const {coords = {}} = await this._geo.getCurrentPosition().catch(err => err);
    const {
      main: {
        temp_max = null,
        temp_min = null,
        temp = null,
        pressure = null,
        humidity = null,
      } = {},
      name = 'no name',
      dt = null,
      weather = []
    } = await this._owm.getCurrentWeather(coords.latitude, coords.longitude);
    console.log('result:', temp);
    return {temp, temp_max, temp_min, pressure, humidity, name, dt, weather};
  }
}
