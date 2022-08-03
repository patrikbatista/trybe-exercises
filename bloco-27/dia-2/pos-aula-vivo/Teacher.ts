import Person from './Person';
import IEmployee from './IEmployee';
import Subject from './Subject';

export default class Teacher extends Person implements IEmployee {
  private _subject: Subject;;
  private _registration: string;
  private _salary: number;
  private _admissionDate: Date;

  constructor(name: string, birthDate: Date, salary: number, subject: Subject) {
    super(name, birthDate);
    this._subject = subject;
    this._salary = salary;
    this._admissionDate = new Date();
    this._registration = this.generateRegistration();
  }

  public get subject(): Subject {
    return this._subject;
  }

  public set subject(value: Subject) {
    this._subject = value;
  }

  public get salary(): number {
    return this._salary;
  }

  public set salary(value: number) {
    if (value < 0) throw new Error('O salário não pode ser negativo.');
    this._salary = value;
  }

  public get admissionDate(): Date {
    return this._admissionDate;
  }

  public set admissionDate(value: Date) {
    if (value.getTime() > new Date().getTime()) {
      throw new Error('A data de admissão não pode ser uma data no futuro.');
    }
    this._admissionDate = value;
  }

  public get registration(): string {
    return this._registration;
  }

  public set registration(value: string) {
    if (value.length < 16) {
      throw new Error('O registro deve possuir no mínimo 16 caracteres.');
    }
    this._registration = value;
  }

  generateRegistration(): string {
    const randomStr = String(Date.now() 
    * (Math.random() + 1)).replace(/\W/g, '');

    return `PRF${randomStr}`;
  }
}