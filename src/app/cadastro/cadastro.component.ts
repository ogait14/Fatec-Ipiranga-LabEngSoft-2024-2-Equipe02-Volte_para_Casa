import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioCadastro } from './usuarioCadastro';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  nome: string;
  email: string;
  senha: string;
  senhaConfirmação: string;
  genero: string = 'outro';

  cadastrando: boolean = false;
  mensagemSucesso: string = '';
  errors: string[] = [];

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  onSubmit() {
    this.cadastrar();
  }

  cadastrar() {
    if (this.cadastrando) return; // Evita múltiplas submissões

    this.cadastrando = true; // Desabilita a submissão

    const usuarioCadastro: UsuarioCadastro = new UsuarioCadastro();
    usuarioCadastro.nome = this.nome;
    usuarioCadastro.email = this.email;
    usuarioCadastro.senha = this.senha;
    usuarioCadastro.genero = this.genero;

  

    this.authService.salvar(usuarioCadastro)
      .subscribe(
        response => {
          console.log("Sucesso:", response);
          this.mensagemSucesso = "Cadastro realizado com sucesso!";
          this.errors = [];
          this.cadastrando = false; // Habilita a submissão novamente
        },
        errorResponse => {
          console.error('Erro ao cadastrar:', errorResponse);
          this.errors = errorResponse.error.errors || ["Erro ao cadastrar. Cheque se já possui cadastro."];
          this.cadastrando = false; // Habilita a submissão novamente
        }
      );
  }
  
}
