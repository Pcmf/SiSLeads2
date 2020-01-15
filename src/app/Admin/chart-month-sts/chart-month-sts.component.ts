import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Servicos/data.service.js';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-chart-month-sts',
  templateUrl: './chart-month-sts.component.html',
  styleUrls: ['./chart-month-sts.component.scss']
})
export class ChartMonthStsComponent implements OnInit {
  private date = new Date();
  public ano = this.date.getFullYear().toString();
  public mes = (this.date.getMonth() + 1).toString();
  public data: any = [];

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  public barChartLabels: Label[] = ['Recebidos', 'Anulados', 'Analise', 'Recusados', 'Aprovados', 'Financiados', 'Cancelados'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataSets[] = [];
  public show = false;

  constructor(private dataService: DataService) {
    this.getData();
   }

  ngOnInit() {}

  getData() {
    this.dataService.getData('admdashinfo/1/' + this.ano + '/' + this.mes).subscribe(
      resp => {
        this.data = resp;
        this.barChartData = [
          { data: [
                    +this.data.entradas,
                    +this.data.anuladas,
                    +this.data.paraAnalise[0],
                    +this.data.recusados[0],
                    +this.data.aprovados[0],
                    +this.data.financiados[0]
                  ], label: 'Leads' },
          { data: [
                    0,
                    0,
                    +this.data.paraAnalise[1] / 1000,
                    +this.data.recusados[1] / 1000,
                    +this.data.aprovados[1] / 1000,
                    +this.data.financiados[1] / 1000
                            ], label: 'Valor K' 
          }
        ];
        this.show = true;
      }
    );
  }
}
