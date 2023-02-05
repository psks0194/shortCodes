// #angular
// *** build a pipe in angular to convert string to a date format
// *** this pipe takes date in string format
// *** then split it by forward slash
// *** then using new DatePipe method as used below transform them into date format

import { DatePipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "stringToDateFormat",
})
export class GetStringToDateFormat implements PipeTransform {
  transform(expiryDate): string {
    const [date, month, year] = expiryDate.split("/");
    return new DatePipe("en").transform(
      new Date(year, month, date),
      "dd/MM/yy"
    );
  }
}
