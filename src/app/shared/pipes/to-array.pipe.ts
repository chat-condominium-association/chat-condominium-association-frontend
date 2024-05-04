import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toArray',
})
export class ToArrayPipe<T> implements PipeTransform {
  transform(value: Record<number, T> | null): T[] {
    if (!value) return [];
    return Object.values(value);
  }
}
