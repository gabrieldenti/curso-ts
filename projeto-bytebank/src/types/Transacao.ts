//pasta type onde ficam definidos os tipos personalizados, formatos dos dados

import { TipoTransacao } from "./TipoTransacao.js"

export type Transacao = { //Tipos personalizados (type alias) -> tipo criado por nós, que pode ser usado para definir a estrutura de um objeto ou um tipo específico.
    tipoTransacao: TipoTransacao,
    valor: number,
    data: Date
}




