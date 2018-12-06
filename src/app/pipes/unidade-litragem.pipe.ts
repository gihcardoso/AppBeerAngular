import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unidadeLitragem'
})
export class UnidadeLitragemPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
      return null;
    } else {
      return value + args;
    }
  }

}
