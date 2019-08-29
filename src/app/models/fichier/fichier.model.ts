export enum TypeFichier {
    AUDIO,
    VIDEO,
    PHOTO
}
export class Fichier {
    'id': number;
    'typeFichier': TypeFichier;

    constructor() {}
}
