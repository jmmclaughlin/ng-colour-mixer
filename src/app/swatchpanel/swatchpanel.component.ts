import { Component, Input} from '@angular/core';
import { RgbService } from '../rgb.service' ;
import { RGB } from '../RGB';

@Component({
  selector: 'app-swatchpanel',
  templateUrl: './swatchpanel.component.html',
  styleUrls: ['./swatchpanel.component.scss']
})
export class SwatchPanelComponent {

  constructor() { }

  rgbService: RgbService;
  rgb: RGB;

  @Input() swatchtext: string = 'TEMP';

  
  rgbColourChannelToHex(rgb: number) { 
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
         hex = "0" + hex;
    }

    return hex;
  }

  rgbObjToHex(rgb: RGB) {

    let redHex: string = this.rgbColourChannelToHex(rgb.red);
    let greenHex: string = this.rgbColourChannelToHex(rgb.green);
    let blueHex: string = this.rgbColourChannelToHex(rgb.blue);

    return '#' + redHex + greenHex + blueHex;
  }

}
