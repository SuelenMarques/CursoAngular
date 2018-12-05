import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mloul'
})
export class MloulPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value)
      return null
      
    return value + " " + args;
  }

}
