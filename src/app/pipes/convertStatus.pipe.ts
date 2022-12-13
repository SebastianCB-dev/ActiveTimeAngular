import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'convertStatus'
})
export class ConvertStatus implements PipeTransform {

  transform(value: boolean): string {
    if (value) {
      return 'Completed';
    } else {
      return 'Pending';
    }
  }
}