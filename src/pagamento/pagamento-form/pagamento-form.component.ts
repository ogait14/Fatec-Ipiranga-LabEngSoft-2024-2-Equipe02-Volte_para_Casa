import { Component } from '@angular/core';

@Component({
  selector: 'app-pagamento-form',
  templateUrl: './pagamento-form.component.html',
  styleUrls: ['./pagamento-form.component.css']
})
export class PagamentoFormComponent {
  selectedPayment: string = 'cartao';
  nomePagante: string = '';
  numeroCartao: string = '';
  validade: string = '';
  cvv: string = '';
  cep: string = '';

  selectPayment(paymentMethod: string) {
    this.selectedPayment = paymentMethod;
  }

  cancel() {
    // Limpar os campos ou executar outra lógica de cancelamento
    this.nomePagante = '';
    this.numeroCartao = '';
    this.validade = '';
    this.cvv = '';
    this.cep = '';
  }

  confirm() {
    // Adicionar lógica de confirmação, como enviar dados para o backend
    alert('Pagamento confirmado!');
  }
}