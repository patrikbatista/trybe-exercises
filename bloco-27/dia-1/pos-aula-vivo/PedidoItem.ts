export default class PedidoItem {
  private _nome: string;
  private _preco: number;

  constructor(nome: string, preco: number) {
    this._nome = nome;
    this._preco = preco;
  }

  get nome(): string {
    return this._nome;
  }
  set nome(value: string) { 
    if(value.length < 3) {
      throw new Error("Nome deve possuir minimo de 3 caracteres");
    }
    this._nome = value;
  }

  get preco(): number {
    return this._preco;
  }
  set preco(value: number) {
    if(value < 0) {
      throw new Error("Preco deve ser maior que zero");
    }
    this._preco = value;
  }
}
