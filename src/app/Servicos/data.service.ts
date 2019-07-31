import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private ADDRESS = environment.ADDRESS;
  private helper = new JwtHelperService();

  constructor(private http: HttpClient) { }

  getData(param) {
    return this.http.get(this.ADDRESS + param);
  }



  checkUser(credenciais: any) {
    return this.http.post(this.ADDRESS + 'login',
      JSON.stringify(credenciais))
      .pipe(
        map((response: any) => {
          console.log('Teste ' + response);
          if (response) {
            sessionStorage.setItem('token', response);
            return true;
          } else {
            return false;
          }
        })

      );
  }

  isLoggedIn() {
    const token = sessionStorage.getItem('token');
    if (token && this.helper.isTokenExpired(token)) {
      return true;
    } else {
      return false;
    }
  }

  getUserType() {
    const token = sessionStorage.getItem('token');
    return this.helper.decodeToken(token).tipo;
  }

  logout() {
    sessionStorage.clear();
    window.location.reload();
  }

}
