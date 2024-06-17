import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getImageUrl',
})
export class GetImageUrlPipe implements PipeTransform {
  transform(value: number | null, imagesObj: { [key: number]: string }): string {
    const index = Number(value);
    return imagesObj[index] || imagesObj[0];
  }
}
