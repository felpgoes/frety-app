import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpCli: HttpClient,
  ) { }

  async login(user){
    console.log(user);
    
    await this.httpCli.post(`${environment.apiUrl}`, user).toPromise()
  }
}
