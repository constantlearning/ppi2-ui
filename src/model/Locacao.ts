import {Veiculo} from "./Veiculo";
import {Cliente} from "./Cliente";
import {Funcionario} from "./Funcionario";
import {Avaria} from "./Avaria";
import {Multa} from "./Multa";

export interface Locacao {
    id: number,
    data: Date,
    veiculo: Veiculo,
    cliente: Cliente,
    funcionarioRetirada: Funcionario,
    funcionarioEntrega: Funcionario,
    avarias: Array<Avaria>,
    multas: Array<Multa>
}
