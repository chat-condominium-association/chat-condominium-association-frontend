import { Component, Input, OnInit } from '@angular/core';
import { avatars } from '@shared/data/avatars.images';
import { trigger, transition, useAnimation } from '@angular/animations';
import { AnimationType, slideIn, slideOut } from './carousel.animations';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('slideAnimation', [
      transition('void => slide', [useAnimation(slideIn, { params: { time: '500ms' } })]),
      transition('slide => void', [useAnimation(slideOut, { params: { time: '500ms' } })]),
    ]),
  ],
})
export class CarouselComponent implements OnInit {
  @Input() images: [string, string][] = []; // first el of images is imageID, second imageUrl
  @Input() slidesChunkSize = 3;
  @Input() activeImageID = '1';

  animationType = AnimationType.Slide;
  currentSlideIndex = 0;
  slides: [string, string][][] = [];

  ngOnInit() {
    this.slides = this.chunkSlides();
  }

  onPreviousClick() {
    this.currentSlideIndex = Math.max(0, this.currentSlideIndex - 1);
  }

  onNextClick() {
    this.currentSlideIndex = Math.min(this.slides.length - 1, this.currentSlideIndex + 1);
  }

  isFirstSlide(): boolean {
    return this.currentSlideIndex === 0;
  }

  isLastSlide(): boolean {
    return this.currentSlideIndex === this.slides.length - 1;
  }

  // Method to chunk the slides array
  chunkSlides(): [string, string][][] {
    const chunkedSlides: [string, string][][] = [];

    for (let i = 0; i < this.images.length; i += this.slidesChunkSize) {
      chunkedSlides.push(this.images.slice(i, i + this.slidesChunkSize));
    }
    return chunkedSlides;
  }
}
