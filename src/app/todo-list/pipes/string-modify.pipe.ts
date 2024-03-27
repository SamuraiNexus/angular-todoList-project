import { Pipe, PipeTransform } from '@angular/core';
import { title } from 'process';

@Pipe({
  name: 'stringModify',
  standalone: true
})
export class StringModifyPipe implements PipeTransform {

  transform(value: string): string {
    return value.substring(0, 10) + "..."
  }

}
