import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuService } from './Servicos/menu.service';
import { DataService } from './Servicos/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SiSLeads2';
  menu: string;
  subscription: Subscription;

  constructor(private menuService: MenuService, private data: DataService) {

    this.subscription = this.menuService.getMenu().subscribe(
      resp => {
        this.menu = resp;
      }
    );
  }

  ngOnInit() {
    this.menuService.setMenu(this.data.getUserType());

  }

}
