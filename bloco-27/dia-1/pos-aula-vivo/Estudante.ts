export default class Estudante {
  private _matricula: string;
  private _nome: string;
  private _provas: number[];
  private _trabalhos: number[];

  constructor(matricula: string, nome: string) {
    this._matricula = matricula;
    this._nome = nome;
    this._provas = [];
    this._trabalhos = [];
  }

  get matricula(): string {
    return this._matricula;
  }
  set matricula(value: string) {
    this._matricula = value;
  }

  get nome(): string {
    return this._nome;
  }
  set nome(value: string) {
    this._nome = value;
  }

  get provas(): number[] {
    return this._provas;
  }
  set provas(value: number[]) {
    if(value.length < 4) {
      throw new Error("Deve possuir 4 notas");
    }
    this._provas = value;
  }

  get trabalhos(): number[] {
    return this._trabalhos;
  }
  set trabalhos(value: number[]) {
    if(value.length < 2) {
      throw new Error("Deve possuir 2 notas");
    }
    this._trabalhos = value;
  }

  sumNotas():number {
    let sum = 0;
    let sumTrabalhos = 0;

    for (let nota of this._provas) {
      sum = sum + nota;
    }

    for (let notaTrab of this._trabalhos) {
      sumTrabalhos = sumTrabalhos + notaTrab;
    }

    return sum + sumTrabalhos;
  }

  media():number {
    return this.sumNotas() / (this._provas.length + this._trabalhos.length);
  }

}