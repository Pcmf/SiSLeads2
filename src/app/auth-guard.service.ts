import { Injectable } from '@angular/core';
import { DataService } from './Servicos/data.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private dataService: DataService, private router: Router) { }

  canActivate() {
    if (this.dataService.isLoggedIn() ) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
