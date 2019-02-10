import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'searchUtil'})
export class SearchUtilPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return [];

    searchText = searchText.toLowerCase();

    return items.filter(it=> {
      return it.toLowerCase().includes(searchText);
    });
  }
}
