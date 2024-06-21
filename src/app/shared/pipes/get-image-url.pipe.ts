import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getImageUrl',
  standalone: true,
})
export class GetImageUrlPipe implements PipeTransform {
  transform(value: number | null, imagesObj: { [key: number]: string }): string {
    const index = Number(value);
    return imagesObj[index] || imagesObj[0];
  }
}
