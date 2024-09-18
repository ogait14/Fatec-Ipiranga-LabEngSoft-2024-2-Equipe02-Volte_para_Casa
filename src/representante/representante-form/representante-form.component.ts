
import { Component, AfterViewInit} from '@angular/core';
import { Representante } from '../representante';  
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';  
import { StorageService } from 'src/app/storage.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-representante-form',
  templateUrl: './representante-form.component.html',
  styleUrls: ['./representante-form.component.css']
})
export class RepresentanteFormComponent implements AfterViewInit{
  representante: Representante = new Representante();

  mensagemSucesso: string = '';
  errors: string[] = [];
  nome: string;
  email: string;
  senha: string;
  senhaConfirmação: string;
  cpf: string;
  rg: string;
  logradouro: string;
  numero: number;
  telefone: string;
  estadoCivil: string = 'solteiro(a)';
  genero: string = 'outro';
  cadastrando: boolean = false;
  deletando: boolean = false;
  editando: boolean = false;

  editMode: boolean = false;
  imagePath: string = '';


  // Injetar o AuthService no construtor
  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router
  ) { }

  onSubmit() {
    this.cadastrar();
  }

  ativarEdit(){
    this.editMode = true;
    this.editando = true;
  }

  desativarEdit(){
    this.editando = false;
  }

  
  editar() {
    this.editMode = false;
      if (this.cadastrando) return; // Evita múltiplas submissões
    
      this.cadastrando = true; // Desabilita a submissão
    
      const email = this.storageService.getEmail(); // Obtenha o email do localStorage
      
      // Buscar os dados atuais do representante antes de atualizar
      this.authService.buscarPorEmail(email).subscribe(
        (response: Representante) => {
          // Preenche os campos do representante com os dados atuais
          const representante = response;
    
          // Atualiza apenas os campos que foram alterados pelo usuário no formulário
          representante.email = this.email || representante.email;

          representante.nome = this.nome || representante.nome;
          representante.senha = this.senha || representante.senha;
          representante.genero = this.genero || representante.genero;
          representante.cpf = this.cpf || representante.cpf;
          representante.rg = this.rg || representante.rg;
          representante.logradouro = this.logradouro || representante.logradouro;
          representante.numero = this.numero || representante.numero;
          representante.telefone = this.telefone || representante.telefone;
          representante.estadoCivil = this.estadoCivil || representante.estadoCivil;

          representante.foto = this.imagePath || representante.foto;

    
          // Chamada ao serviço de atualização
          // this.authService.atualizar(representante).subscribe(
          //   (response: any) => {
          //     console.log("Sucesso:", response);
          //     alert(4);
          //     this.mensagemSucesso = "Cadastro atualizado com sucesso!";
          //     this.errors = [];
          //     this.cadastrando = false; // Habilita a submissão novamente
          //   },
          //   (errorResponse: any) => {
          //     alert(5);
          //     console.error('Erro ao atualizar:', errorResponse);
          //     this.errors = ["Erro ao atualizar. Tente novamente mais tarde."];
          //     this.cadastrando = false; // Habilita a submissão novamente
          //   }
          // );
          const isValid =  this.atualizar3(representante);
        },
        (errorResponse: any) => {
          console.error('Erro ao buscar representante:', errorResponse);
          this.errors = ["Erro ao buscar dados do representante. Tente novamente mais tarde."];
          this.cadastrando = false; // Habilita a submissão novamente
        }
      );
  }
    
  async atualizar3(representante: any) { 
    const isValid = await this.authService.atualizar2(representante);
    
    if (isValid == 1) {

      this.mensagemSucesso = "Cadastro atualizado com sucesso!";
      this.errors = [];
      this.cadastrando = false; // Habilita a submissão novamente
      this.editando = false;
      window.location.reload();
      alert(this.mensagemSucesso);
    } else {
      console.error('Erro ao atualizar');
      this.errors = ["Erro ao atualizar. Tente novamente mais tarde."];
      this.cadastrando = false; // Habilita a submissão novamente
    }
  }
  

  confirmDelete() {

    if (this.deletando) return; // Evita múltiplas submissões

    this.deletando = true; // Desabilita a submissão

    const representante: Representante = new Representante();


    representante.email = this.storageService.getEmail()

    
    // Verificar se o representante já existe
    this.authService.buscarPorEmail(representante.email).subscribe(
      (response: any) => {
        if (response) {
          // Se o representante já existe, deletar
          this.authService.deletar(representante.email).subscribe(
            (response: any) => {
              console.log("Sucesso:", response);
              this.mensagemSucesso = "Dados do usuário deletado";
              this.router.navigate(['/login']);
              this.errors = [];


            },
            (errorResponse: any) => {
              console.log("Sucesso:", response);
              this.mensagemSucesso = "Dados do usuário deletado";
              this.router.navigate(['/login']);
              this.errors = [];

            }
          );
        } 
      },
      (errorResponse: any) => {
        console.error('Erro ao verificar existência:', errorResponse);
        this.errors = ["Usuário não encontrado. Tente novamente mais tarde."];

      }
    );
  }

  
  // representante-form.component.ts
  cadastrar() {
    if (this.cadastrando) return; // Evita múltiplas submissões

    this.cadastrando = true; // Desabilita a submissão

    const representante: Representante = new Representante();


    representante.email = this.storageService.getEmail()

    representante.cpf = this.cpf;
    representante.rg = this.rg;
    representante.logradouro = this.logradouro;
    representante.numero = this.numero;
    representante.telefone = this.telefone;
    representante.estadoCivil = this.estadoCivil;

    // Verificar se o representante já existe
    this.authService.buscarPorEmail(representante.email).subscribe(
      (response: any) => {
        if (response) {
          // Se o representante já existe, atualizar
          this.authService.atualizar(representante).subscribe(
            (response: any) => {
              console.log("Sucesso:", response);
              this.mensagemSucesso = "Cadastro atualizado com sucesso!";
              this.errors = [];
              this.cadastrando = false; // Habilita a submissão novamente
            },
            (errorResponse: any) => {
              console.error('Erro ao atualizar:', errorResponse);
              this.errors = ["Erro ao atualizar. Tente novamente mais tarde."];
              this.cadastrando = false; // Habilita a submissão novamente
            }
          );
        } else {
          // Se o representante não existe, criar
          this.authService.salvar(representante).subscribe(
            (response: any) => {
              console.log("Sucesso:", response);
              this.mensagemSucesso = "Cadastro realizado com sucesso!";
              this.errors = [];
              this.cadastrando = false; // Habilita a submissão novamente
            },
            (errorResponse: any) => {
              console.error('Erro ao cadastrar:', errorResponse);
              this.errors = ["Erro ao cadastrar. Verifique os dados informados."];
              this.cadastrando = false; // Habilita a submissão novamente
            }
          );
        }
      },
      (errorResponse: any) => {
        console.error('Erro ao verificar existência:', errorResponse);
        this.errors = ["Erro ao verificar existência. Tente novamente mais tarde."];
        this.cadastrando = false; // Habilita a submissão novamente
      }
    );
  }



  openDeleteModal() {
 // Type assertion to tell TypeScript that window.$ is a JQuery object
 (window as any).$('#confirmDeleteModal').modal('show'); 
  }

  onImageSelected(event: any): void {
    if(this.editMode)
    {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          // Armazena na localStorage
          localStorage.setItem('userImage', e.target.result);
          this.imagePath = e.target.result;
          localStorage.setItem('imageName', file.name);
          
          // Atualiza as imagens exibidas
          const selectedImage = document.getElementById('selectedImage') as HTMLImageElement;
          const selectedImage2 = document.getElementById('selectedImage2') as HTMLImageElement;
          const selectedImage3 = document.getElementById('selectedImage3') as HTMLImageElement;
          
          if (selectedImage) {
            selectedImage.src = e.target.result;
          } 
          if (selectedImage2) {
            selectedImage2.src = e.target.result;
          }
          if (selectedImage3) {
            selectedImage3.src = e.target.result;
          }
        };
        reader.readAsDataURL(file);
        event.target.value = '';
      }
    }
  } 

  ngAfterViewInit() {
    // Certifique-se de que o jQuery está disponível
    if (typeof $ !== 'undefined') {
      console.log('jQuery está disponível');
    } else {
      console.error('jQuery não está disponível');
    }
  }

  ngOnInit() {
    // this.imagePath = localStorage.getItem('userImage') || '././assets/avatar-1.png';
    const email = localStorage.getItem('email') || "";

    this.authService.buscarPorEmail(email).subscribe(
      (response: any) => {
        if (response) {
          localStorage.setItem('userImage', response.foto);
          this.imagePath = response.foto;  

          this.rg = response.rg;
          this.logradouro = response.logradouro;
          this.numero = response.numero;
          this.telefone = response.telefone;
          this.estadoCivil = response.estadoCivil;
          this.cpf = response.cpf;

          this.nome = response.nome;
          this.genero = response.genero;
          this.senha = response.senha;
          this.email = response.email;
        } 
      },
      (errorResponse: any) => {
        console.error('Erro ao verificar existência:', errorResponse);
        this.errors = ["Usuário não encontrado. Tente novamente mais tarde."];

      }
    );

  }


}








