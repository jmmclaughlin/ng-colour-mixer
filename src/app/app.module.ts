import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopmenubarComponent } from './topmenubar/topmenubar.component';
import { SidemenubarComponent } from './sidemenubar/sidemenubar.component';
import { ControlPanelComponent } from './controlpanel/controlpanel.component';
import { ColourMixerComponent } from './colourmixer/colourmixer.component';
import { SwatchpanelComponent } from './swatchpanel/swatchpanel.component';
// import { RgbService } from './rgb.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopmenubarComponent,
    SidemenubarComponent,
    ControlPanelComponent,
    ColourMixerComponent,
    SwatchpanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
