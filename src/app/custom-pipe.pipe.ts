import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
  standalone: true
})
export class CustomPipePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';
    return value.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('_'); // Split the input string by spaces, capitalize the first letter of each word, and join with underscores
  }

}
