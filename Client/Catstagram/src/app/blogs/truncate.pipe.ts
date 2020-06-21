import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    const limit = args[0]; 
    if (typeof value == 'string' && typeof limit == 'number') {
      return value.length > limit ? value.substring(0, limit) + '...' : value;
    }
  }
}
