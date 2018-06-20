import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnChanges {

  options: any;
  lineChartData: any;
  constructor() { }
  @Input() chartData;
  ngOnChanges() {
    this.lineChartData =  {
      chartType: 'LineChart',
      dataTable: [
        ['Time', 'Temperature'],
        ...this.chartData
      ],
      options: {'title': 'Tasks'},
    };
  }

}
