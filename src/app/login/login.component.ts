import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { UsuarioCadastro } from '../cadastro/usuarioCadastro';

import { AuthService } from '../auth.service';
import { StorageService } from '../storage.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string;
  password: string;
  loginError: boolean;
  cadastrando: boolean;
  mensagemSucesso: string;
  errors: string[] = [];

  constructor(
    private router: Router,
    private storageService: StorageService,
    private authService: AuthService
  ) { }

  onSubmit() {
    this.authService.logar2(this.email, this.password)
      .subscribe(
        response => {
          if (response.idRepresentante == 0) {
            // alert("Usuario não cadastrado");
            this.errors = ["Email e/ou senha incorreto(s)"];
          } else {
            console.log("Sucesso:", response);
            this.mensagemSucesso = "Sucesso";
            this.storageService.setEmail(this.email);
            this.storageService.setSenha(this.password);
            this.router.navigate(['/home']);
          }
        },
        errorResponse => {
          this.errors = ['Email e/ou senha incorreto(s)'];
        }
      );
  }

}

  





// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { StorageService } from './storage.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {

//   email: string;
//   password: string;
//   loginError: boolean;
//   cadastrando: boolean;
//   mensagemSucesso: string;
//   errors: string[] = [];

//   constructor(
//     private router: Router,
//     private storageService: StorageService,
//     private authService: AuthService
//   ) { }

//   onSubmit() {
//     this.authService.logar2(this.email, this.password)
//       .subscribe(
//         response => {
//           if (response.idRepresentante == 0) {
//             alert("Usuario não cadastrado");
//           } else {
//             console.log("Sucesso:", response);
//             this.storageService.setEmail(this.email);
//             this.storageService.setSenha(this.password);
//             this.router.navigate(['/home']);
//           }
//         },
//         errorResponse => {
//           this.errors = ['Email e/ou senha incorreto(s)']
//         }
//       );
//   }

// }
