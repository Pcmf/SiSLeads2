import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Servicos/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public user = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.user = this.dataService.getUserName();
  }

  logout() {
    this.dataService.logout();
  }
}
