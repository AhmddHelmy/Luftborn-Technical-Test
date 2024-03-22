import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'description',
  standalone: true
})
export class DescriptionPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    if (!value) return '';

    const limit = args ? args : 5;

    const words = value.split(' ');
    return words.length > limit ? `${words.slice(0, limit).join(' ')}...` : value;
  }

}
