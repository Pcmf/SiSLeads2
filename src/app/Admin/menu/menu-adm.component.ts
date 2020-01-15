import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Servicos/data.service';

@Component({
  selector: 'app-menu-adm',
  templateUrl: './menu-adm.component.html',
  styleUrls: ['./menu-adm.component.scss']
})
export class MenuAdmComponent implements OnInit {
  public user = '';
  public type: string;

  constructor(private dataService: DataService) {
   }

  ngOnInit() {
   // this.type = this.dataService.getUserType();
    this.user = this.dataService.getUserName();
  }

  logout() {
    this.dataService.logout();
  }
}
