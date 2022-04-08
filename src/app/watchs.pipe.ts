import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'watchs'
})
export class WatchsPipe implements PipeTransform {

  transform(desc: string, limit: number): any {
    // return desc.substring(0, 800);
  }

}
