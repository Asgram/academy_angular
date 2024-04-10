import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {
  returnValue!: string;

  transform(value: string, ...args: unknown[]): string {
    // 'Lorem ipsum ...' => split('') => ['L','o','r',...]
    this.returnValue = value.split('').reverse().join('');
    return this.returnValue;
  }

}
