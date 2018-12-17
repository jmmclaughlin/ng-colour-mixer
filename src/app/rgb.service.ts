import { Injectable, OnInit } from '@angular/core';
import { RGB } from './RGB';

@Injectable({
  providedIn: 'root'
})
export class RgbService { // implements OnInit {  OnInit doesn't work for Services

  rgb: RGB = null;

  constructor() {
     this.rgb = new RGB(0, 0, 0, 255);
  }

  getRGB() {
    return this.rgb;
  }

  setRGB(rgb) {
    this.rgb = rgb;
  }

  getRedValue() {
    return this.rgb.red;
  }

  setRedValue(redVal) {
    this.rgb.red = redVal;
  }

  getGreenValue() {
    return this.rgb.green;
  }

  setGreenValue(greenVal) {
    this.rgb.green = greenVal;
  }
  getBLueValue() {
    return this.rgb.blue;
  }

  setBlueValue(blueVal) {
    this.rgb.blue = blueVal;
  }
}
