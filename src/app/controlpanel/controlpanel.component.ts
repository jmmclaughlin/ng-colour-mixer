import { Component, OnInit, Input } from '@angular/core';

import { RGB } from '../RGB';
import { RgbService } from '../rgb.service' ;
import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'app-controlpanel',
  templateUrl: './controlpanel.component.html',
  styleUrls: ['./controlpanel.component.scss',
            '../colourmixer/colourmixer.component.scss']
})
export class ControlPanelComponent implements OnInit {

  @Input() text: string;
  // rgb: RGB;

  constructor(public rgbService : RgbService) { }

  ngOnInit() {

    this.text = 'test1';
    // this.rgb = this.rgbService.getRGB();
    // let rgb = new RGB(0, 0, 0);
    // this.rgb = rgb;
  }

  get rgb() {
    console.log(this.rgbService);
    return this.rgbService.getRGB();
  }

  set rgb(rgb: RGB) {
    this.rgbService.setRGB(this.rgb);
  }

  singleRGBColourToHex(rgb) { 
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
         hex = "0" + hex;
    }

    return hex;
  }

  formatRedHextoFullHex(redRGB) {
    var singleColourHex = this.singleRGBColourToHex(redRGB);
    var fullHex = '#' + singleColourHex + '0000';
    return fullHex;
  }

  formatGreenHextoFullHex(greenRGB) {
    var singleColourHex = this.singleRGBColourToHex(greenRGB);
    var fullHex = '#00' + singleColourHex + '00';
    return fullHex;
  }

  formatBlueHextoFullHex(blueRGB) {
    var singleColourHex = this.singleRGBColourToHex(blueRGB);
    var fullHex = '#0000' + singleColourHex;
    return fullHex;
  }



}
