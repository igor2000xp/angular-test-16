import { Pipe } from "@angular/core";

@Pipe({ name: "secondCustom" })
export class SecondCustomPipe {
  transform(value: string): string {
    return value.split("").reverse().join("");
  }
}