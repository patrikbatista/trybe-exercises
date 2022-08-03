export default class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;
  

  constructor(brand: string, size: number, resolution: string, connection: string[]) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connection;
  }

  public get brand(): string {
    return this._brand;
  }
  public set brand(value: string) {
    this._brand = value;
  }

  public get size(): number {
    return this._size;
  }
  public set size(value: number) {
    this._size = value;
  }


  public get resolution(): string {
    return this._resolution;
  }
  public set resolution(value: string) {
    this._resolution = value;
  }


  public get connections(): string[] {
    return this._connections;
  }
  public set connections(value: string[]) {
    this._connections = value;
  }
  

  public get connectedTo(): string | undefined {
    return this._connectedTo;
  }
  public set connectedTo(value: string | undefined) {
    this._connectedTo = value;
  }

  turnOn(): void {
    console.log(`
      Tv ${this._brand}, 
      size ${this._size}, 
      resolution ${this._resolution}, 
      connections ${this._connections} 
    `);
  }  
}