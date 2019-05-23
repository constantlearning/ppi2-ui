import {Categoria} from "./Categoria";

export interface Veiculo {
    id: number,
    marca: string,
    modelo: string,
    categoria: Categoria
}
