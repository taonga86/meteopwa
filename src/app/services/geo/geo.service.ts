import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class GeoService {

  constructor() { }

  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    return coordinates;
  }


}
