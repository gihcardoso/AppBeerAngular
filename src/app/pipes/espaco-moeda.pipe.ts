import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'espacoMoeda'
})
export class EspacoMoedaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
      return null;
    } else {
      return value.replace('R$', 'R$ ');
    }
  }

}
