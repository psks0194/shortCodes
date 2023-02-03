// create an angular Pipe to convert 24 hour to 12 hour time format

import { Pipe, PipeTransform } from "@angular/core";
@Pipe({ name: "convertFrom24To12Format" })
export class TimeFormat implements PipeTransform {
  transform(time: any): any {
    if (time != null) {
      let hours = Number(time.match(/^(\d+)/)[1]);
      let minutes = Number(time.match(/:(\d+)/)[1]);
      let AMPM;
      if (!!time.match(/\s(.*)$/)) {
        AMPM = time.match(/\s(.*)$/)[1];
      }
      if (AMPM === "PM" && hours < 12) hours = hours + 12;
      if (AMPM === "AM" && hours === 12) hours = hours - 12;
      let sHours = hours.toString();
      let sMinutes = minutes.toString();
      if (hours < 10) sHours = "0" + sHours;
      if (minutes < 10) sMinutes = "0" + sMinutes;
      return sHours + ":" + sMinutes;
    }
  }
}
