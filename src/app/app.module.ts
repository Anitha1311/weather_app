import { WeatherService } from './weather.service';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppComponent } from './app.component';
import { SummaryComponent } from './components/summary/summary.component';
import { TemperatureComponent } from './components/temperature/temperature.component';
import { TpwComponent } from './components/tpw/tpw.component';
import { ChartComponent } from './components/chart/chart.component';
import { DayTileComponent } from './components/day-tile/day-tile.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    TemperatureComponent,
    TpwComponent,
    ChartComponent,
    DayTileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ChartsModule,
    Ng2GoogleChartsModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
