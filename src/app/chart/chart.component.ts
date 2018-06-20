import { Component, OnInit, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Input() chartData;
  pieChartData: any;
  constructor() { }

  ngOnInit() {
    console.log(this.chartData);
    this.pieChartData = {
      chartType: 'LineChart',
      dataTable: [['Time', 'Temperature'],...this.chartData]
  }

}
}
