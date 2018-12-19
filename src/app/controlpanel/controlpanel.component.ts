import { Component, OnInit, ViewChild  } from '@angular/core';
import { RgbService } from '../rgb.service' ;
import { SwatchPanelComponent } from '../swatchpanel/swatchpanel.component'

@Component({
  selector: 'app-controlpanel',
  templateUrl: './controlpanel.component.html',
  styleUrls: ['./controlpanel.component.scss',
            '../colourmixer/colourmixer.component.scss'],
  providers: [RgbService]
})
export class ControlPanelComponent implements OnInit {

  text: string = 'TEST';
  rgbService : RgbService;

  @ViewChild(SwatchPanelComponent) child: SwatchPanelComponent;
  
  constructor(public rgbService_ : RgbService) {
    this.rgbService = rgbService_;
   }

  ngOnInit() {
    console.log(this.child);
    this.child.rgbService = this.rgbService;
    this.child.rgb = this.rgbService.getRGB();
  }

  get rgb() {
    return this.rgbService.getRGB();
  }

  // set rgb(rgb: RGB) {
  //   this.rgbService.setRGB(rgb);
  // }

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
