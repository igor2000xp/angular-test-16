import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fistCustom'
})
export class FistCustomPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return `Hello ${value}!`;
  }

}
