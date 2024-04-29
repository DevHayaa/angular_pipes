import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any[]): any {
    if (!value) return null;
    if (!args || !args.length) return value;

    const searchText = args[0] ? args[0].toUpperCase() : ''; // Search for items starting with specified letter(s)

    return value.filter((user: any) => {
      const itemName = user.name.toUpperCase(); // Assuming 'name' is the property to be checked
      return itemName.startsWith(searchText); // Check if itemName starts with searchText
    });
}

}
