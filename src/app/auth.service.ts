import { Injectable } from '@angular/core';
import { Usuario } from './login/usuario';
import { UsuarioCadastro } from './cadastro/usuarioCadastro';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: string = environment.apiBaseUrl + '/api/representante/operacao';
  tokenURL: string = environment.apiBaseUrl + environment.TokenUrl;
  clientID: string = environment.clientId;
  clientSecret: string = environment.clientSecret;
  // private url: string = `http://localhost:8080/api/representante/operacao`;


  constructor (private http: HttpClient) { 

  }
  salvar(usuario: Usuario): Observable<any>{
    return this.http.post<any>("http://localhost:8080/api/representante/operacao", usuario);
  }
  // logar(username: string, password: string): Observable<any>{
  //   alert(2);
  //   const params = new HttpParams()
  //                                 .set('username', username)
  //                                 .set('password', password)
  //                                 .set('grant_type', 'password')
  //                                 // .set('client_id', 'projeto-angular')
  //                                 // .set('client_secret', '**123456**')
    
  //   const headers = {
  //     'Authorization': 'Basic ' + btoa(`${this.clientID}:${this.clientSecret}`),
  //     'Content-Type': 'application/x-www-form-urlencoded'
  //   }
  //   alert(3);
  //   alert(this.tokenURL);
  //   alert(params.toString());
  //   alert(headers);
  //   return this.http.post(this.tokenURL, params.toString(), { headers: headers });
  // }
  
  logar(username: string, password: string): Observable<any> {
    const body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);
    body.set('grant_type', 'password');
  
    const headers = {
      'Authorization': 'Basic ' + btoa(`${this.clientID}:${this.clientSecret}`),
      'Content-Type': 'application/x-www-form-urlencoded'
    };
  
    return this.http.post(this.tokenURL, body.toString(), { headers: headers });
  }

  // logar2(username: string, password: string): Observable<any>{
  //   const body = new URLSearchParams();
  //   body.set('nome', "");
  //   body.set('email', username);
  //   body.set('senha', password);
  //   body.set('genero', "");
  //   return this.http.post("http://localhost:8080/api/representante/login", body.toString());
  // }


  logar2(username: string, password: string): Observable<any>{
    const usuarioCadastro: UsuarioCadastro = new UsuarioCadastro();
    usuarioCadastro.nome = "";
    usuarioCadastro.email = username;
    usuarioCadastro.senha = password;
    usuarioCadastro.genero = "";

    
    
  

    return this.http.post<any>("http://localhost:8080/api/representante/login", usuarioCadastro);
  }


  // auth.service.ts
  buscarPorEmail(email: string): Observable<any> {
  return this.http.get<any>(`http://localhost:8080/api/representante/operacao/email/${email}`);
  }

  deletar(email: string): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/representante/operacao/email/${email}`);
  }


  atualizar(usuario: Usuario): Observable<any> {
    return this.http.put<any>("http://localhost:8080/api/representante/operacao", usuario);
  }
  
  async atualizar2(usuario: Usuario): Promise<any> {

    
    try {
    const url = `http://localhost:8080/api/representante/operacao`;
    const response = await  fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(usuario),
    });   
    if (response.ok) {  
      return 1; 
    } else {
      return 0;
    }
  } catch (error) {

    return 0; 
  
  }  
}


}
