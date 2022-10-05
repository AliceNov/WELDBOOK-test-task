
import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: "searchpipe"
})
export class SearchPipe implements PipeTransform {
    transform(list: Array<{id: string, title: string, iconName: string}>, input: string):  Array<{id: string, title: string, iconName: string}> {
      if (input === undefined) {
          return list;
      }
      if (input === "") {
        return list;
      }
      return list.filter((list: {id: string, title: string}) => {
        if (list.title.toLowerCase().includes(input.toLowerCase())){
              return list.title;
        }
        return false;

      });
    }

}