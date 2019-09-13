export interface ITabellen {
    tabellenId: number,
    tabellenName: String,
    tabellenQuantity: number
}

export class Tabellen implements ITabellen {

    constructor(public tabellenId: number,
                public tabellenName: String,
                public tabellenQuantity: number,
           ){

    }
}