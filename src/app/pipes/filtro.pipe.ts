import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(item: any[], value: string): any[] {
    if (!item) {
      return [];
    }
    if (value) {
      return item.filter(item => item.nome.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) > -1);
    } else {
      return item;
    }
  }

}
