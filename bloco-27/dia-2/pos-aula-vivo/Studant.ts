import Person from './Person';

export default class Studant extends Person {
  private _enrollment: string;

  private _examsGrades: number[] = [];
  
  private _worksGrades: number[] = [];

  constructor(name: string, birthDate: Date, enrollment: string) {
    super(name, birthDate);
    this._enrollment = enrollment;
  }

  public get enrollment(): string {
    return this._enrollment;
  }

  public set enrollment(value: string) {
    if (value.length < 16) {
      throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');
    }
    this._enrollment = value;
  }

  public get examsGrades(): number[] {
    return this._examsGrades;
  }

  public set examsGrades(value: number[]) {
    if (value.length < 4) {
      throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
    }
    this._examsGrades = value;
  }

  public get worksGrades(): number[] {
    return this._worksGrades;
  }

  public set worksGrades(value: number[]) {
    if (value.length < 4) {
      throw new Error(`A pessoa estudante 
      só pode possuir 2 notas de trabalhos`);
    }
    this._worksGrades = value;
  }

  public generateEnrollment(): string {
    const randomStr = String(Date.now() 
    * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }
}