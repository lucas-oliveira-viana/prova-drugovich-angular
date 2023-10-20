import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cnpjFormat'
})
export class CnpjFormatPipe implements PipeTransform {
  transform(value: string): string {
    if (value && value.length === 15) {
      return `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6, 9)}/${value.slice(9, 13)}-${value.slice(13)}`;
    }

    return value;
  }
}