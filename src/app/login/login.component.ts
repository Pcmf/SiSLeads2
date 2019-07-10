import { Component, OnInit } from '@angular/core';
import { DataService } from './../Servicos/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  submit(form) {
    this.dataService.checkUser(form).subscribe(
      resp => {
        console.log(resp);
        if (resp) {
          switch (this.dataService.getUserType()) {
            case 'Gestor':
              this.router.navigate(['/gestor']);
              break;
            case 'Analista':
              this.router.navigate(['/analista']);
              break;
            case 'Administrador':
              this.router.navigate(['/admin']);
              break;
            default:
              this.router.navigate(['/']);
              break;
          }
        }
      }
    );

  }

  ngOnInit() {
  }

}
