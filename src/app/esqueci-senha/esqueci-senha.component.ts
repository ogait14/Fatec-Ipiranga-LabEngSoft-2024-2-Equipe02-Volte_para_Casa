import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.component.html',
  styleUrls: ['./esqueci-senha.component.css']
})
export class EsqueciSenhaComponent {
  email: string = '';
  mensagemSucesso: string = '';
  errors: string[] = [];

  constructor(private http: HttpClient) {}

  async sendEmail() {
    let valido = false; 
    let mensagem = "Erro:";
    let Senha = "";    
    

    const email = this.email;
    const url = `http://localhost:8080/api/representante/operacao/email/${email}`;

    try {
      const response = await this.http.get<any>(url).toPromise(); // Use toPromise para lidar com a chamada assíncrona
      if (response && response.senha) {
        Senha = response.senha;
        valido = true; // Se senha foi encontrada, email é válido
      } else {
        // mensagem += "\nO email não está cadastrado no banco de dados!";
        this.errors = ["O email não está cadastrado no banco de dados!"];
      }
    } catch (error) {
      console.error(error);
      // mensagem += "\nErro ao recuperar a senha ou o email não está cadastrado!";
      this.errors = ["Erro ao recuperar a senha ou o email não está cadastrado!"];
    }

    if (valido) {
      const emailData = {
        to: this.email,
        subject: 'Recuperação de senha',
        body: `A senha que foi gravada no sistema é: ${Senha}\n\n\n\nAtenciosamente, \nEquipe do Volta para Casa. \n\nEste e-mail é automático, favor não responder.`
      };

      this.http.post<String>("http://localhost:8080/Email/enviar-email", emailData).subscribe({
        next: () => {
          // alert("Email enviado com sucesso!");
          this.mensagemSucesso = "Email enviado com sucesso!";
        },
        error: err => {
          console.error("Erro ao enviar o email:", err);
          // alert("Erro ao enviar o email.");
          this.errors = ["Erro ao enviar o email. Tente novamente mais tarde."];
        }
      });
    } 
    // else {
    //   // alert(mensagem);
    //   this.errors = ["Erro ao enviar o email. Tente novamente mais tarde."];
    // }
  }
}

