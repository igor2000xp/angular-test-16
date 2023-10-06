// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'example'
// })
// export class ExamplePipe implements PipeTransform {

//   transform(value: unknown, ...args: unknown[]): unknown {
//     return null;
//   }

// }


// In this pipe we will transform the string 
// 'hello world' to 'Hello world', 
// capitalizing the first letter of the sentence.

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return ''; // Handle null or undefined values
    return value.charAt(0).toUpperCase() + value.slice(1);
    JSON.
  }
}

