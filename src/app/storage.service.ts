import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  setEmail(email: string) {
    this.storage.setItem('email', email);
  }

  getEmail(): string {
    return this.storage.getItem('email') ?? ''; // Retorna uma string vazia se for null
  }

  setSenha(senha: string) {
    this.storage.setItem('senha', senha);
  }

  getSenha(): string {
    return this.storage.getItem('senha') ?? ''; // Retorna uma string vazia se for null
  }

  limpar() {
    this.storage.removeItem('email');
    this.storage.removeItem('senha');
  }

}
