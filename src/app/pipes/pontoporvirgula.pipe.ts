import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pontoporvirgula'
})
export class PontoporvirgulaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value)
      return null;
    
    return value.replace('.', ',');
  }

}
