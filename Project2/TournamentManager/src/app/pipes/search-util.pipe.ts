import { Pipe, PipeTransform } from "@angular/core";
import {Participant} from "../model/participant";

@Pipe({name: 'searchUtil'})
export class SearchUtilPipe implements PipeTransform {
  transform(items: any[], field: string, value: string): any[] {
    if(!items) {
      return [];
    }
    if(!field || !value) {
      return items;
    }
    return items.filter(singleItem =>
    singleItem[field].toLowerCase().includes(value.toLowerCase()));
  }

}


