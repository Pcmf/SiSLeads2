import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { DataService } from 'src/app/Servicos/data.service';

@Component({
  selector: 'app-cart-month-sts-forn',
  templateUrl: './cart-month-sts-forn.component.html',
  styleUrls: ['./cart-month-sts-forn.component.scss']
})
export class CartMonthStsFornComponent implements OnInit {
  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'left',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,1)', 'rgba(255,255,0,1)', 'rgba(0,255,255,1)', 'rgba(0,255,0,1)', 'rgba(240,173,78,1)',
       'rgba(0,0,255,1)', 'rgba(240,173,78,1)'],
    },
  ];

  private date = new Date();
  public ano = this.date.getFullYear().toString();
  public mes = (this.date.getMonth() + 1).toString();
  public data: any = [];
  public status = 'Recebidos';

  constructor(private dataService: DataService) {
    this.getData();
  }

  getData() {
    this.dataService.getData('graphdata2/' + this.status + '/' + this.ano + '/' + this.mes).subscribe(
      resp => {
        this.data = resp;
        this.pieChartLabels = [];
        this.pieChartData = [];
        this.data.forEach(element => {
          this.pieChartLabels.push(element.nome);
          this.pieChartData.push(element.qty);
        });
      }
    );

  }

  ngOnInit() {
  }

  // events
  chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
