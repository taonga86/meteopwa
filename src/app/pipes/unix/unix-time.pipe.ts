import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unixTime'
})
export class UnixTimePipe implements PipeTransform {

  transform(value: number): string {
    return new Date(value + 1000).toLocaleDateString();
  }
}
