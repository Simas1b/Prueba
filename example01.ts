let a: number=15;         //* Inferencia explícita
let b: string="UnString"; //* Inferencia explícita
let c=101;                //* Inferencia implícita
let recursos=["memoria","disco","procesador",100]; //* Inferencia implícita doble
let recursosSting: string[]= ["UnString","OtroString"]; //* Si espeficicamos el tipo nos devolverá error cuando contenga algo distinto al tipo
let cualquierCosa: any=[true,101,"UnString"]       //* "any" representa cualquier tipo (type)
class Persona{
    private nombre:string;
    private apellido:string;
    private añoNac:number;
    constructor(nombre:string, apellido:string){
      this.nombre = nombre;
      this.apellido = apellido;
    }
    public toString():string{
      return this.nombre + this.apellido;
    }
    public edad(añoActual:number):number{
      return (añoActual - this.añoNac);
    }
  }