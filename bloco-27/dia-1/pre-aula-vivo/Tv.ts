export default class Tv {
  private brand: string;
  private size: number;
  private resolution: string;
  private connections: string[];
  private connectedTo?: string;

  constructor(brand: string, size: number, resolution: string, connection: string[]) {
    this.brand = brand;
    this.size = size;
    this.resolution = resolution;
    this.connections = connection;
  }

  turnOn(): void {
    console.log(`
      Tv ${this.brand}, 
      size ${this.size}, 
      resolution ${this.resolution}, 
      connections ${this.connections} 
    `);
  }  
}