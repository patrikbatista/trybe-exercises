import Cliente from "./Cliente";
import PedidoItem from "./PedidoItem";

export default class Pedido {
  private _cliente: Cliente;
  private _itens: PedidoItem[];
  private _metodoPagamento: string;
  private _desconto: number;

  constructor(cliente: Cliente, itens: PedidoItem[], metodoPagamento: string, desconto: number) {
    this._cliente = cliente;
    this._itens = itens;
    this._metodoPagamento = metodoPagamento;
    this._desconto = desconto;
  }

  get cliente(): Cliente {
    return this._cliente;
  }
  set cliente(value: Cliente) {
    this._cliente = value;
  }

  get itens(): PedidoItem[] {
    return this._itens;
  }

  set itens(value: PedidoItem[]) {  
    if(value.length === 0){
      throw new Error("Deve possuir pelo menos um item");
    }
    this._itens = value;
  }

  get metodoPagamento(): string {
    return this._metodoPagamento;
  }
  set metodoPagamento(value: string) {
    this._metodoPagamento = value;
  }

  get desconto(): number {
    return this._desconto;
  }
  set desconto(value: number){
   if(value <= 0) {
      throw new Error("Desconto deve ser maior que zero");
   }
    this._desconto = value;
  }

  total(){
    let total = 0;
    for(let item of this._itens){
      total = total + item.preco;
    }
    return total - this._desconto;
  }
  
  pedidoFeito(): void{
    console.log(`Pedido feito por ${this._cliente.nome}`);
    console.log(...`Itens:`);
    
    this._itens.map(item => console.log(...item.nome, ' ', item.preco))
    console.log(`Total: ${this.total()}`);    
  }
}