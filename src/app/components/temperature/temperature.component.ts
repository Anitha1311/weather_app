import { ITemperature } from './../../models/temperature';
import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from './../../weather.service';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {

  @Input() tempInfo: ITemperature;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }
  onCelciusClick() { return this.weatherService.cclick();

  }
  onFarenheitClick() {return this.weatherService.fclick();
  }

}
